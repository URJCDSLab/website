import type { Metadata } from "next";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}

const DEFAULT_OG_IMAGE = {
  url: "/assets/images/logos/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Data Science Lab URJC logo",
};

/**
 * Creates standardized page metadata including Open Graph and Twitter Card tags.
 * This guarantees consistent link previews in messaging apps (WhatsApp, Telegram) and social platforms.
 */
export function createPageMetadata({
  title,
  description,
  path = "",
  keywords,
}: PageMetadataOptions): Metadata {
  const url = path.startsWith("http")
    ? path
    : `https://www.datasciencelab.es${path ? (path.startsWith("/") ? path : `/${path}`) : ""}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: `${title} | Data Science Lab URJC`,
      description,
      url,
      siteName: "Data Science Lab URJC",
      images: [DEFAULT_OG_IMAGE],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Data Science Lab URJC`,
      description,
      creator: "@DSLAB_URJC",
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
