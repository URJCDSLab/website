import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Rss, Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "News, updates, and research highlights from the Data Science Lab.",
};

export default function BlogPage() {
  return (
    <div className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0086BA]/10 text-[#0086BA] dark:bg-[#0086BA]/20 mb-3">
          <Rss className="w-3.5 h-3.5" />
          News &amp; Stories
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Data Science Lab Blog
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Stay updated with our latest scientific papers, new open-source packages, event participations, and research milestones.
        </p>
      </div>

      {/* Blog Articles Timeline */}
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            id={post.id}
            className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow duration-300 space-y-4"
          >
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#0086BA]" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[#0086BA]" />
                {post.authorLink ? (
                  <Link href={post.authorLink} className="hover:text-[#0086BA]">
                    {post.author}
                  </Link>
                ) : (
                  post.author
                )}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              {post.title}
            </h2>

            {/* Image if present */}
            {post.imageUrl && (
              <div className="rounded-xl overflow-hidden max-h-56 bg-slate-100 dark:bg-slate-800">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content preview */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {post.summary}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
