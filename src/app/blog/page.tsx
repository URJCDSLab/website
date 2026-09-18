import { Metadata } from "next";
import blogPostsData from "@/data/blog_posts.json";
import { BlogPost } from "@/types";
import { BlogTimeline } from "@/components/blog/BlogTimeline";

export const metadata: Metadata = {
  title: "Blog & news | Data Science Lab",
  description: "News, research milestones, conferences, and open-source updates from the Data Science Lab (URJC).",
};

const blogPosts = blogPostsData as BlogPost[];

export default function BlogPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          News &amp; research highlights
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Stay updated with our latest publications, conference presentations, open-source packages, educational projects, and academic milestones since the lab&apos;s foundation.
        </p>
      </div>

      {/* Interactive Alternating Timeline with Dialog View */}
      <BlogTimeline posts={blogPosts} />

    </div>
  );
}
