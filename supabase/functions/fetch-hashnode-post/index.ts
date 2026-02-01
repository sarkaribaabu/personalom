import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const HASHNODE_API = 'https://gql.hashnode.com';

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { slug, host } = await req.json();

    if (!slug || !host) {
      console.error('Missing required parameters:', { slug, host });
      return new Response(
        JSON.stringify({ error: 'Missing slug or host parameter' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Fetching post with slug: ${slug} from host: ${host}`);

    // Hashnode GraphQL query for fetching a single post by slug
    const query = `
      query Publication($host: String!, $slug: String!) {
        publication(host: $host) {
          id
          title
          post(slug: $slug) {
            id
            title
            slug
            brief
            content {
              html
              markdown
            }
            coverImage {
              url
            }
            publishedAt
            readTimeInMinutes
            author {
              name
              profilePicture
              bio {
                text
              }
            }
            tags {
              name
              slug
            }
            seo {
              title
              description
            }
          }
        }
      }
    `;

    const response = await fetch(HASHNODE_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { host, slug }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Hashnode API error [${response.status}]:`, errorText);
      return new Response(
        JSON.stringify({ error: `Hashnode API error: ${response.status}` }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    console.log('Hashnode API response received');

    if (data.errors) {
      console.error('GraphQL errors:', data.errors);
      return new Response(
        JSON.stringify({ error: 'GraphQL errors', details: data.errors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const post = data.data?.publication?.post;

    if (!post) {
      console.log('Post not found for slug:', slug);
      return new Response(
        JSON.stringify({ error: 'Post not found', slug }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Successfully fetched post:', post.title);

    return new Response(
      JSON.stringify({ post }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: unknown) {
    console.error('Error in fetch-hashnode-post:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
