import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

// NOTE: This hook now fetches from DEV.to via the fetch-devto-post edge function.
// The exported names remain unchanged to avoid touching existing UI components.

export const HASHNODE_HOST = 'dev.to';

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
  } | null;
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
  canonicalUrl?: string;
}

interface HashnodePostResponse {
  post: HashnodePost | null;
  error?: string;
}

export const useHashnodePost = (slug: string) => {
  return useQuery({
    queryKey: ['devto-post', slug],
    enabled: !!slug,
    queryFn: async (): Promise<HashnodePost | null> => {
      const { data, error } = await supabase.functions.invoke('fetch-devto-post', {
        body: { slug },
      });

      if (error) {
        console.error('Error fetching DEV.to post:', error);
        return null;
      }

      const response = data as HashnodePostResponse;
      if (response?.error) {
        console.log('DEV.to post not found:', response.error);
        return null;
      }

      return response?.post ?? null;
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
