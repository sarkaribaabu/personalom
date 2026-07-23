import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

interface DevArticleFull {
  id: number;
  title: string;
  description: string;
  slug: string;
  url: string;
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

const normalizeTags = (tagList: string[] | string | null | undefined) => {
  if (Array.isArray(tagList)) return tagList;
  if (typeof tagList === 'string') {
    return tagList
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);
  }
  return [];
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { slug } = await req.json();
    if (!slug) {
      return new Response(JSON.stringify({ error: 'slug required', post: null }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const apiKey = Deno.env.get('DEVTO_API_KEY');
    const headers: Record<string, string> = {
      'accept': 'application/vnd.forem.api-v1+json',
      'user-agent': 'ommahajan.com DEV.to integration',
    };
    if (apiKey) headers['api-key'] = apiKey;

    // 1) Find article id by matching slug from the user's public article list.
    const listRes = await fetch('https://dev.to/api/articles?username=dr_om_mahajan&per_page=1000', {
      headers: {
        ...headers,
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
    console.log('DEV.to public articles JSON response:', JSON.stringify(list));
    const match = list.find((a: { slug: string }) => a.slug === slug);
    if (!match) {
      return new Response(JSON.stringify({ error: 'Post not found', post: null }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // 2) Fetch full article by id (public endpoint, but include key for consistency)
    const detailRes = await fetch(`https://dev.to/api/articles/${match.id}`, {
      headers: {
        ...headers,
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
      url: a.url,
      excerpt: a.description ?? '',
      brief: a.description ?? '',
      content: {
        html: a.body_html ?? '',
        markdown: '',
      },
      coverImage: a.cover_image || a.social_image ? { url: (a.cover_image || a.social_image) as string } : null,
      publishedDate: a.published_at,
      publishedAt: a.published_at,
      readingTime: a.reading_time_minutes ?? 3,
      readTimeInMinutes: a.reading_time_minutes ?? 3,
      author: {
        name: a.user?.name ?? 'Dr. Om Mahajan',
        profilePicture: a.user?.profile_image ?? '',
        bio: { text: a.user?.summary ?? 'Author & IT Professional' },
      },
      tags: normalizeTags(a.tag_list).map((t) => ({ name: t, slug: t })),
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
