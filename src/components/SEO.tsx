import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  noIndex?: boolean;
}

const SEO = ({
  title = "Dr. Om Mahajan | IT Professional & Author",
  description = "IT Professional with 15+ years of experience in enterprise solutions, e-governance, and digital transformation. Author of fiction and technical books.",
  keywords = ["Dr. Om Mahajan", "IT Professional", "Author", "E-Governance", "Digital Transformation", "Mumbai"],
  image = "/og-image.jpg",
  url,
  type = "website",
  author = "Dr. Om Mahajan",
  publishedTime,
  noIndex = false,
}: SEOProps) => {
  const siteUrl = "https://ommahajan.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullTitle = title.includes("Om Mahajan") ? title : `${title} | Dr. Om Mahajan`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content="Dr. Om Mahajan" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      
      {/* Article specific */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && (
        <meta property="article:author" content={author} />
      )}
    </Helmet>
  );
};

export default SEO;
