"use client";

import * as React from "react";
import { Calendar, ExternalLink, X, FileText, ArrowRight } from "lucide-react";
import { BlogPost } from "@/types";

interface BlogTimelineProps {
  posts: BlogPost[];
}

// Estimate visual height for balanced two-column distribution
function estimatePostHeight(post: BlogPost): number {
  const baseCard = 180;
  const hasMedia = Boolean(
    post.image ||
      post.conferenceLogo ||
      (post.conferenceLogos && post.conferenceLogos.length > 0)
  );
  const imgHeight = hasMedia ? 220 : 0;
  const descHeight = Math.ceil((post.description || post.summary || "").length / 50) * 20;
  return baseCard + imgHeight + descHeight;
}

function getConferenceLogos(post: BlogPost): string[] {
  if (post.conferenceLogos && post.conferenceLogos.length > 0) {
    return post.conferenceLogos;
  }
  if (Array.isArray(post.conferenceLogo)) {
    return post.conferenceLogo;
  }
  if (post.conferenceLogo) {
    return [post.conferenceLogo];
  }
  return [];
}

function ConferenceBanner({
  post,
  inModal = false,
}: {
  post: BlogPost;
  inModal?: boolean;
}) {
  const logos = getConferenceLogos(post);
  if (!post.image && logos.length === 0) return null;

  const containerClass = inModal
    ? "relative rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 max-h-80 flex items-center justify-center"
    : "relative rounded-xl overflow-hidden max-h-60 bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 group-hover/btn:opacity-95 transition-opacity";

  const imgClass = inModal
    ? "w-full h-full max-h-80 object-cover"
    : "w-full h-full max-h-60 object-cover group-hover/btn:scale-102 transition-transform duration-300";

  return (
    <div className={containerClass}>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className={imgClass}
        />
      )}
      {logos.length === 1 && (
        <div className={`absolute inset-0 flex items-center justify-center bg-black/25 ${inModal ? "p-4 pointer-events-none" : "p-3"}`}>
          <img
            src={logos[0]}
            alt="Conference logo"
            className={`${inModal ? "max-h-24 max-w-[80%]" : "max-h-20 max-w-[75%]"} object-contain drop-shadow-lg`}
          />
        </div>
      )}
      {logos.length > 1 && (
        <div className={`absolute inset-0 flex items-center justify-center gap-6 sm:gap-10 bg-black/35 ${inModal ? "p-4 pointer-events-none" : "p-3"}`}>
          {logos.map((logo, idx) => (
            <img
              key={logo}
              src={logo}
              alt={`Conference logo ${idx + 1}`}
              className={`${inModal ? "max-h-20 max-w-[42%]" : "max-h-16 max-w-[42%]"} object-contain drop-shadow-lg`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function distributePosts(posts: BlogPost[]) {
  const left: { post: BlogPost; originalIndex: number }[] = [];
  const right: { post: BlogPost; originalIndex: number }[] = [];
  let leftHeight = 0;
  let rightHeight = 64;

  posts.forEach((post, i) => {
    const h = estimatePostHeight(post);
    if (leftHeight <= rightHeight) {
      left.push({ post, originalIndex: i });
      leftHeight += h + 48;
    } else {
      right.push({ post, originalIndex: i });
      rightHeight += h + 48;
    }
  });

  return { left, right };
}

export function BlogTimeline({ posts }: BlogTimelineProps) {
  const [selectedPost, setSelectedPost] = React.useState<BlogPost | null>(null);

  // Close modal on Escape key and lock body scroll
  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedPost(null);
      }
    }

    if (selectedPost) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedPost]);

  const { left, right } = React.useMemo(() => distributePosts(posts), [posts]);

  return (
    <>
      {/* Mobile single-column timeline */}
      <div className="md:hidden relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-6 space-y-8">
        {posts.map((post) => (
          <div key={post.id} className="relative group">
            {/* Horizontal connector line from spine to card */}
            <div className="absolute -left-6 top-[33px] w-6 h-0.5 bg-slate-200 dark:bg-slate-800 group-hover:bg-[#0086BA] transition-colors" />

            {/* Timeline node */}
            <span className="absolute -left-[31px] top-[27px] w-3.5 h-3.5 rounded-full border-2 border-white dark:border-slate-900 bg-[#0086BA] shadow-sm z-10 group-hover:scale-125 transition-transform" />
            <PostCard post={post} onOpen={() => setSelectedPost(post)} />
          </div>
        ))}
      </div>

      {/* Desktop alternating two-column timeline with central spine */}
      <div className="hidden md:block relative">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-slate-200 dark:bg-slate-800" />

        <div className="grid grid-cols-2 gap-x-16 gap-y-12">
          {/* Left Column */}
          <div className="space-y-12">
            {left.map(({ post }) => (
              <div key={post.id} className="relative group">
                {/* Horizontal connector line from card to center spine */}
                <div className="absolute -right-8 top-[33px] w-8 h-0.5 bg-slate-200 dark:bg-slate-800 group-hover:bg-[#0086BA] transition-colors" />

                {/* Connector point on center spine */}
                <span className="absolute -right-[39px] top-[27px] w-3.5 h-3.5 rounded-full border-2 border-white dark:border-slate-900 bg-[#0086BA] shadow-sm z-10 group-hover:scale-125 transition-transform" />
                <PostCard post={post} onOpen={() => setSelectedPost(post)} />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-12 pt-16">
            {right.map(({ post }) => (
              <div key={post.id} className="relative group">
                {/* Horizontal connector line from card to center spine */}
                <div className="absolute -left-8 top-[49px] w-8 h-0.5 bg-slate-200 dark:bg-slate-800 group-hover:bg-[#0086BA] transition-colors" />

                {/* Connector point on center spine (offset by 16px to prevent collisions) */}
                <span className="absolute -left-[39px] top-[43px] w-3.5 h-3.5 rounded-full border-2 border-white dark:border-slate-900 bg-[#0086BA] shadow-sm z-10 group-hover:scale-125 transition-transform" />
                <PostCard post={post} onOpen={() => setSelectedPost(post)} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Dialog / HTML5 Dialog Modal for full post content */}
      {selectedPost && (
        <dialog
          open
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-transparent border-0 max-w-none max-h-none w-full h-full m-0"
        >
          {/* Backdrop button for keyboard & click dismissal */}
          <button
            type="button"
            aria-label="Close dialog overlay"
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity cursor-default w-full h-full border-0 p-0"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl z-10 p-6 sm:p-8 space-y-6">
            {/* Header: Date & Close */}
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <Calendar className="w-4 h-4 text-[#0086BA]" />
                <span>{selectedPost.date}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                aria-label="Close dialog"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title */}
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 leading-snug">
              {selectedPost.title}
            </h2>

            {/* Conference Banner / Logo Header */}
            <ConferenceBanner post={selectedPost} inModal />

            {/* Body Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {selectedPost.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Additional Images (e.g. DSGAME or CEForum photos) */}
            {selectedPost.additionalImages && selectedPost.additionalImages.length > 0 && (
              <div className="pt-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedPost.additionalImages.map((imgSrc) => (
                    <div key={imgSrc} className="rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 h-32 sm:h-40">
                      <img src={imgSrc} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Links & PDFs */}
            {selectedPost.links && selectedPost.links.length > 0 && (
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Related resources &amp; links
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {selectedPost.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target={link.url.startsWith("http") ? "_blank" : undefined}
                      rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0086BA] hover:bg-[#006d96] transition-colors shadow-sm"
                    >
                      {link.url.endsWith(".pdf") ? (
                        <FileText className="w-4 h-4" />
                      ) : (
                        <ExternalLink className="w-4 h-4" />
                      )}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {selectedPost.tags && selectedPost.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-2">
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </dialog>
      )}
    </>
  );
}

function PostCard({ post, onOpen }: { post: BlogPost; onOpen: () => void }) {
  return (
    <article
      id={post.id}
      className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-[box-shadow,border-color] duration-300 space-y-4 group/card"
    >
      {/* Meta (Date only - NO author) */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1.5 font-semibold text-[#0086BA]">
          <Calendar className="w-3.5 h-3.5" />
          {post.date}
        </span>
      </div>

      {/* Accessible button for interactive card body */}
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        className="w-full text-left space-y-3 cursor-pointer group/btn focus:outline-none"
      >
        {/* Conference / Event Banner or Logo */}
        <ConferenceBanner post={post} />

        {/* Title */}
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover/btn:text-[#0086BA] transition-colors leading-snug">
          {post.title}
        </h2>

        {/* Teaser Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover/btn:text-slate-900 dark:group-hover/btn:text-slate-200 transition-colors">
          {post.description}
        </p>
      </button>

      {/* Read full post trigger & tags */}
      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onOpen}
          aria-haspopup="dialog"
          className="inline-flex items-center gap-1 text-xs font-bold text-[#0086BA] hover:underline cursor-pointer"
        >
          <span>Read full story</span>
          <ArrowRight className="w-3 h-3" />
        </button>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
