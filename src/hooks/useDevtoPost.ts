import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface DevtoPost {
  id: string;
  title: string;
  slug: string;
  url?: string;
  excerpt: string;
  brief: string;
  content: {
    html: string;
    markdown: string;
  };
  coverImage?: {
    url: string;
  } | null;
  publishedDate: string;
  publishedAt: string;
  readingTime: number;
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

interface DevtoPostResponse {
  post: DevtoPost | null;
  error?: string;
}

export const useDevtoPost = (slug: string) => {
  return useQuery({
    queryKey: ['devto-post', slug],
    enabled: !!slug,
    queryFn: async (): Promise<DevtoPost | null> => {
      const { data, error } = await supabase.functions.invoke('fetch-devto-post', {
        body: { slug },
      });

      if (error) {
        console.error('Error fetching DEV.to post:', error);
        return null;
      }

      const response = data as DevtoPostResponse;
      if (response?.error) {
        console.log('DEV.to post not found:', response.error);
        return null;
      }

      if (!response?.post) return null;

      return {
        ...response.post,
        excerpt: response.post.excerpt ?? response.post.brief ?? '',
        brief: response.post.brief ?? response.post.excerpt ?? '',
        publishedDate: response.post.publishedDate ?? response.post.publishedAt,
        publishedAt: response.post.publishedAt ?? response.post.publishedDate,
        readingTime: response.post.readingTime ?? response.post.readTimeInMinutes ?? 3,
        readTimeInMinutes: response.post.readTimeInMinutes ?? response.post.readingTime ?? 3,
      };
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};