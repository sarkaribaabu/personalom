import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

// Configure your Hashnode publication host here
export const HASHNODE_HOST = 'ommahajan.hashnode.dev';

interface HashnodePost {
  id: string;
  title: string;
  slug: string;
  brief: string;
  content: {
    html: string;
    markdown: string;
  };
  coverImage?: {
    url: string;
  };
  publishedAt: string;
  readTimeInMinutes: number;
  author: {
    name: string;
    profilePicture?: string;
    bio?: {
      text: string;
    };
  };
  tags?: Array<{
    name: string;
    slug: string;
  }>;
  seo?: {
    title?: string;
    description?: string;
  };
}

interface HashnodePostResponse {
  post: HashnodePost | null;
  error?: string;
}

export const useHashnodePost = (slug: string) => {
  return useQuery({
    queryKey: ['hashnode-post', slug],
    queryFn: async (): Promise<HashnodePost | null> => {
      const { data, error } = await supabase.functions.invoke('fetch-hashnode-post', {
        body: { slug, host: HASHNODE_HOST }
      });

      if (error) {
        console.error('Error fetching Hashnode post:', error);
        return null;
      }

      const response = data as HashnodePostResponse;
      
      if (response.error) {
        console.log('Hashnode post not found:', response.error);
        return null;
      }

      return response.post;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });
};

interface HashnodePostListItem {
  id: string;
  title: string;
  slug: string;
  brief: string;
  coverImage?: {
    url: string;
  };
  publishedAt: string;
  readTimeInMinutes: number;
  author: {
    name: string;
    profilePicture?: string;
  };
  tags?: Array<{
    name: string;
    slug: string;
  }>;
}

interface HashnodePostsResponse {
  posts: HashnodePostListItem[];
  pageInfo: {
    hasNextPage: boolean;
    endCursor: string;
  };
  publicationTitle: string;
  error?: string;
}

export const useHashnodePosts = (first = 10) => {
  return useQuery({
    queryKey: ['hashnode-posts', first],
    queryFn: async (): Promise<HashnodePostListItem[]> => {
      const { data, error } = await supabase.functions.invoke('fetch-hashnode-posts', {
        body: { host: HASHNODE_HOST, first }
      });

      if (error) {
        console.error('Error fetching Hashnode posts:', error);
        return [];
      }

      const response = data as HashnodePostsResponse;
      
      if (response.error) {
        console.log('Hashnode posts not found:', response.error);
        return [];
      }

      return response.posts;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });
};
