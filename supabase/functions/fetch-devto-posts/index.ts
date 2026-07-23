import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

interface DevArticle {
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
  user: { name: string; username: string; profile_image: string };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    let first = 30;
    try {
      const body = await req.json();
      if (body?.first && Number.isFinite(body.first)) first = Math.min(1000, Math.max(1, body.first));
    } catch (_) { /* body optional */ }

    const apiKey = Deno.env.get('DEVTO_API_KEY');
    const headers: Record<string, string> = {
      'accept': 'application/vnd.forem.api-v1+json',
      'user-agent': 'ommahajan.com DEV.to integration',
    };
    if (apiKey) headers['api-key'] = apiKey;

    const res = await fetch(`https://dev.to/api/articles?username=dr_om_mahajan&per_page=${first}`, {
      headers: {
        ...headers,
      },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('DEV.to list error', res.status, text);
      return new Response(JSON.stringify({ error: `DEV.to API error: ${res.status}`, posts: [] }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const articles: DevArticle[] = await res.json();
    console.log('DEV.to public articles JSON response:', JSON.stringify(articles));

    const posts = articles.map((a) => ({
      id: String(a.id),
      title: a.title,
      slug: a.slug,
      url: a.url,
      excerpt: a.description ?? '',
      brief: a.description ?? '',
      coverImage: a.cover_image || a.social_image ? { url: (a.cover_image || a.social_image) as string } : null,
      publishedDate: a.published_at,
      publishedAt: a.published_at,
      readingTime: a.reading_time_minutes ?? 3,
      readTimeInMinutes: a.reading_time_minutes ?? 3,
      author: {
        name: a.user?.name ?? 'Dr. Om Mahajan',
        profilePicture: a.user?.profile_image ?? '',
      },
      tags: (a.tag_list ?? []).map((t) => ({ name: t, slug: t })),
    }));

    return new Response(
      JSON.stringify({
        articles,
        posts,
        pageInfo: { hasNextPage: false, endCursor: null },
        publicationTitle: 'Dr. Om Mahajan',
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  } catch (err) {
    console.error('fetch-devto-posts error', err);
    return new Response(JSON.stringify({ error: String(err), posts: [] }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
