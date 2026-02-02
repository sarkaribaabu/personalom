import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const HASHNODE_HOST = 'ommahajan.hashnode.dev';

export interface HashnodePost {
  id: string;
  title: string;
  slug: string;
  brief: string;
  coverImage: {
    url: string;
  } | null;
  publishedAt: string;
  readTimeInMinutes: number;
  author: {
    name: string;
    profilePicture: string;
  };
  tags: Array<{
    name: string;
    slug: string;
  }>;
}

interface UseHashnodePostsResult {
  posts: HashnodePost[];
  loading: boolean;
  error: string | null;
  hasNextPage: boolean;
  loadMore: () => void;
}

export const useHashnodePosts = (initialCount: number = 10): UseHashnodePostsResult => {
  const [posts, setPosts] = useState<HashnodePost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [endCursor, setEndCursor] = useState<string | null>(null);

  const fetchPosts = async (after?: string) => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase.functions.invoke('fetch-hashnode-posts', {
        body: { 
          host: HASHNODE_HOST, 
          first: initialCount,
          after 
        }
      });

      if (fetchError) {
        console.error('Error fetching Hashnode posts:', fetchError);
        setError('Failed to fetch posts');
        return;
      }

      if (data.error) {
        console.error('Hashnode API error:', data.error);
        setError(data.error);
        return;
      }

      if (after) {
        setPosts(prev => [...prev, ...data.posts]);
      } else {
        setPosts(data.posts);
      }
      
      setHasNextPage(data.pageInfo?.hasNextPage || false);
      setEndCursor(data.pageInfo?.endCursor || null);
    } catch (err) {
      console.error('Error in useHashnodePosts:', err);
      setError('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const loadMore = () => {
    if (hasNextPage && endCursor) {
      fetchPosts(endCursor);
    }
  };

  return { posts, loading, error, hasNextPage, loadMore };
};

// Helper to format date from Hashnode
export const formatHashnodeDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Helper to get category from tags
export const getCategoryFromTags = (tags: Array<{ name: string; slug: string }>): string => {
  if (!tags || tags.length === 0) return 'ARTICLE';
  return tags[0].name.toUpperCase().trim();
};
