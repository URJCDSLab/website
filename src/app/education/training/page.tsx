import { Metadata } from "next";
import { GraduationCap, Database, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Training",
  description: "Specialized data science and engineering training programs for professionals.",
};

const courses = [
  {
    title: "Data Collection & Wrangling",
    image: "/assets/images/training/ObtencionDeDatos.jpg",
    description: "Introduction to tools and procedures for obtaining structured and unstructured data using Python and R, covering web scraping, APIs, databases, and formats like JSON, XML, and parquet.",
  },
  {
    title: "Data Processing & Repositories",
    image: "/assets/images/training/OyTdD.png",
    description: "Creation and maintenance of unified data repositories with Elasticsearch, Kibana, Solr, and data lake pipelines for enterprise data science exploitation.",
  },
  {
    title: "Big Data & Distributed Computing",
    image: "/assets/images/training/spark.jpg",
    description: "Scalable data processing using Apache Spark, PySpark, and distributed computing frameworks for high-velocity and large-volume datasets.",
  },
  {
    title: "Predictive Analytics & Machine Learning",
    image: "/assets/images/training/ObtencionDeDatos.jpg",
    description: "End-to-end predictive modeling, regression, classification, cross-validation, and MLOps best practices for deploying robust models in production.",
  },
];

export default function TrainingPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0086BA]/10 text-[#0086BA] dark:bg-[#0086BA]/20 mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          Professional Development
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Professional Training
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          At DSLAB, we offer specialized training for professionals and corporate teams across key areas of data science, from foundational data wrangling to distributed architectures and MLOps.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.title}
            className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            <div className="h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {course.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
