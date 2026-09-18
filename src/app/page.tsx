import fs from "node:fs";
import path from "node:path";
import { HeroSection } from "@/components/home/HeroSection";
import { BentoGrid } from "@/components/home/BentoGrid";
import { GroupCarousel } from "@/components/home/GroupCarousel";

function getGroupPhotos(): string[] {
  const dir = path.join(process.cwd(), "public/assets/images/group");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => /^group.*\.(jpe?g|png|webp)$/i.test(file))
    .sort()
    .reverse()
    .map((file) => `/assets/images/group/${file}`);
}

export default function HomePage() {
  const groupPhotos = getGroupPhotos();

  return (
    <div className="flex flex-col">
      {/* Interactive Hero Section */}
      <HeroSection />

      {/* Areas of activity Bento Grid */}
      <BentoGrid />

      {/* Group Photos Carousel Section */}
      <section className="py-16 sm:py-24 bg-slate-100/60 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              Our research community
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Professors, researchers, and doctoral candidates driving innovation across multiple departments at Rey Juan Carlos University.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <GroupCarousel photos={groupPhotos} />
          </div>
        </div>
      </section>
    </div>
  );
}
