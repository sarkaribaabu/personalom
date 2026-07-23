import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

interface DevArticleFull {
  id: number;
  title: string;
  description: string;
  slug: string;
  cover_image: string | null;
  social_image: string | null;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  body_html: string;
  canonical_url: string;
  user: {
    name: string;
    username: string;
    profile_image: string;
    summary?: string | null;
  };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('DEVTO_API_KEY');
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'DEVTO_API_KEY not configured', post: null }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { slug } = await req.json();
    if (!slug) {
      return new Response(JSON.stringify({ error: 'slug required', post: null }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // 1) Find article id by matching slug from the user's published list
    const listRes = await fetch('https://dev.to/api/articles/me/published?per_page=1000', {
      headers: {
        'api-key': apiKey,
        'accept': 'application/vnd.forem.api-v1+json',
      },
    });

    if (!listRes.ok) {
      const text = await listRes.text();
      console.error('DEV.to list error', listRes.status, text);
      return new Response(JSON.stringify({ error: `DEV.to list error: ${listRes.status}`, post: null }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const list = await listRes.json();
    const match = list.find((a: { slug: string }) => a.slug === slug);
    if (!match) {
      return new Response(JSON.stringify({ error: 'Post not found', post: null }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // 2) Fetch full article by id (public endpoint, but include key for consistency)
    const detailRes = await fetch(`https://dev.to/api/articles/${match.id}`, {
      headers: {
        'api-key': apiKey,
        'accept': 'application/vnd.forem.api-v1+json',
      },
    });

    if (!detailRes.ok) {
      const text = await detailRes.text();
      console.error('DEV.to detail error', detailRes.status, text);
      return new Response(JSON.stringify({ error: `DEV.to detail error: ${detailRes.status}`, post: null }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const a: DevArticleFull = await detailRes.json();

    const post = {
      id: String(a.id),
      title: a.title,
      slug: a.slug,
      brief: a.description ?? '',
      content: {
        html: a.body_html ?? '',
        markdown: '',
      },
      coverImage: a.cover_image || a.social_image ? { url: (a.cover_image || a.social_image) as string } : null,
      publishedAt: a.published_at,
      readTimeInMinutes: a.reading_time_minutes ?? 3,
      author: {
        name: a.user?.name ?? 'Dr. Om Mahajan',
        profilePicture: a.user?.profile_image ?? '',
        bio: { text: a.user?.summary ?? 'Author & IT Professional' },
      },
      tags: (a.tag_list ?? []).map((t) => ({ name: t, slug: t })),
      seo: {
        title: a.title,
        description: a.description,
      },
      canonicalUrl: a.canonical_url ?? '',
    };

    return new Response(JSON.stringify({ post }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('fetch-devto-post error', err);
    return new Response(JSON.stringify({ error: String(err), post: null }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
