import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

// NOTE: This hook now sources posts from DEV.to via the fetch-devto-posts edge
// function. The exported names are kept for backward compatibility with existing
// UI components (Blog.tsx, EditorsPick.tsx, BlogDetail.tsx).

export const HASHNODE_HOST = 'dev.to';

export interface HashnodePost {
  id: string;
  title: string;
  slug: string;
  url?: string;
  excerpt: string;
  brief: string;
  coverImage: {
    url: string;
  } | null;
  publishedDate: string;
  publishedAt: string;
  readingTime: number;
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

export const useHashnodePosts = (initialCount: number = 30): UseHashnodePostsResult => {
  const [posts, setPosts] = useState<HashnodePost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase.functions.invoke('fetch-devto-posts', {
          body: { first: initialCount },
        });

        if (cancelled) return;

        if (fetchError) {
          console.error('Error fetching DEV.to posts:', fetchError);
          setError('Failed to fetch posts');
          return;
        }

        if (data?.error && (!data.posts || data.posts.length === 0)) {
          console.error('DEV.to API error:', data.error);
          setError(data.error);
          return;
        }

        const mappedPosts = (data?.posts ?? []).map((post: HashnodePost) => ({
          ...post,
          excerpt: post.excerpt ?? post.brief ?? '',
          brief: post.brief ?? post.excerpt ?? '',
          publishedDate: post.publishedDate ?? post.publishedAt,
          publishedAt: post.publishedAt ?? post.publishedDate,
          readingTime: post.readingTime ?? post.readTimeInMinutes ?? 3,
          readTimeInMinutes: post.readTimeInMinutes ?? post.readingTime ?? 3,
        }));

        setPosts(mappedPosts);
      } catch (err) {
        if (!cancelled) {
          console.error('Error in useHashnodePosts:', err);
          setError('Failed to fetch posts');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [initialCount]);

  // DEV.to's `me/published` returns all articles in a single page (up to 1000),
  // so pagination is not needed here.
  return { posts, loading, error, hasNextPage: false, loadMore: () => {} };
};

export const formatHashnodeDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const getCategoryFromTags = (tags: Array<{ name: string; slug: string }>): string => {
  if (!tags || tags.length === 0) return 'ARTICLE';
  return tags[0].name.toUpperCase().trim();
};
