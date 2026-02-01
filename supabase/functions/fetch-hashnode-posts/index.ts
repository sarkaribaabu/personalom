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
    const { host, first = 10, after } = await req.json();

    if (!host) {
      console.error('Missing host parameter');
      return new Response(
        JSON.stringify({ error: 'Missing host parameter' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Fetching posts from host: ${host}, first: ${first}`);

    // Hashnode GraphQL query for fetching posts list
    const query = `
      query Publication($host: String!, $first: Int!, $after: String) {
        publication(host: $host) {
          id
          title
          posts(first: $first, after: $after) {
            edges {
              node {
                id
                title
                slug
                brief
                coverImage {
                  url
                }
                publishedAt
                readTimeInMinutes
                author {
                  name
                  profilePicture
                }
                tags {
                  name
                  slug
                }
              }
            }
            pageInfo {
              hasNextPage
              endCursor
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
        variables: { host, first, after }
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

    const publication = data.data?.publication;

    if (!publication) {
      console.log('Publication not found for host:', host);
      return new Response(
        JSON.stringify({ error: 'Publication not found', host }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const posts = publication.posts.edges.map((edge: any) => edge.node);
    const pageInfo = publication.posts.pageInfo;

    console.log(`Successfully fetched ${posts.length} posts`);

    return new Response(
      JSON.stringify({ posts, pageInfo, publicationTitle: publication.title }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: unknown) {
    console.error('Error in fetch-hashnode-posts:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
