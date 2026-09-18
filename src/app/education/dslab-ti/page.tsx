import { Metadata } from "next";
import Link from "next/link";
import {
  Gamepad2,
  ArrowRight,
  ExternalLink,
  FileText,
  Presentation,
  Target,
  Compass,
  Code2,
  PlayCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "DSLAB-TI | Data Science Lab",
  description: "Data Science Lab for Teaching Innovation (DSLAB-TI) at Universidad Rey Juan Carlos.",
};

const strategicObjectives = [
  "Promote continuous improvement of teaching and learning processes.",
  "Integrate active methodologies that foster skill acquisition and student motivation.",
  "Encourage the effective use of the Virtual Classroom by both students and faculty.",
  "Assess, support, and disseminate innovative educational practices to build a quality benchmark for university educators.",
];

const actionLines = [
  "Optimize student performance and reduce academic failure and dropout rates.",
  "Promote the use of modern digital technologies and the Virtual Classroom.",
  "Implement generative AI, predictive modeling, and Big Data analytics applied to instructional enhancement.",
  "Develop and deploy competency-based assessment models.",
  "Analyze and improve academic outcomes in blended and distance learning programs.",
  "Provide personalized academic mentoring and data-driven guidance to students.",
  "Champion Open Education: creation, adoption, and dissemination of open educational resources.",
  "Launch educational innovation initiatives dedicated to inclusion and gender equality.",
];

const projects = [
  {
    title: "ViLT: Virtual Intelligent Tutor for supporting URJC students",
    period: "2024 — 2025",
    desc: "ViLT proposes an intelligent tutoring system powered by AI and Large Language Models (LLMs) to support students across degree courses. It integrates a dynamic chatbot, contextual vector embeddings of course syllabi, and feedback loops to detect conceptual drift. Built on a modular REST API with dedicated analytics dashboards for educators.",
    github: "https://github.com/URJCDSLab/ViLT",
    slides: "https://raw.githubusercontent.com/URJCDSLab/ViLT/refs/heads/main/VILT_INTED_SLIDES.pdf",
    slidesLabel: "INTED2025 Slides",
  },
  {
    title: "DSExams: Massive and automated generation of multipurpose randomized questionnaires",
    period: "2022 — 2023",
    desc: "An automated assessment framework for generating randomized exam questionnaires using the R package {exams} formatted in LaTeX. Enables infinite question variations using probabilistic generation, integrated directly into Moodle with automated grading and detailed student feedback.",
    github: "https://github.com/URJCDSLab/dsexams",
    slides: "https://www.lcano.com/p/edulearn23/",
    slidesLabel: "EDULEARN23 Slides",
  },
  {
    title: "¡CONECTA! Educational board game",
    period: "2024 — 2026",
    desc: "A collaborative educational board game designed to immerse students in telecommunications engineering and data science project lifecycles. Students work in teams to tackle real-world challenges through problem formulation, infrastructure selection, AI modeling, and practical deployment.",
    link: "/education/conecta/",
    linkLabel: "Discover ¡CONECTA!",
  },
];

const publications = [
  {
    title: "Using an LLM-based framework to analyze student performance",
    authors: "A. Fernández-Isabel, C. Lancho, I. Martín de Diego, Á. Udías, A. Alonso-Ayuso, C. Alfaro, E. L. Cano, F. Ortega, J. Gómez, J. M. Moguerza, M. J. Algar",
    venue: "19th International Technology, Education and Development Conference (INTED2025)",
    date: "03/03/2025",
    desc: "Explores a framework powered by LLMs to support educational mentoring and personalized tutoring, particularly for students less likely to seek face-to-face assistance.",
    doi: "https://doi.org/10.21125/inted.2025.0862",
  },
  {
    title: "ChatGPT's performance in university admissions tests in mathematics",
    authors: "Á. Udías, A. Alonso-Ayuso, C. Alfaro, M. J. Algar, M. Cuesta, A. Fernández-Isabel, J. Gómez, C. Lancho, E. L. Cano, I. Martín de Diego, F. Ortega",
    venue: "International Electronic Journal of Mathematics Education",
    date: "24/10/2024",
    desc: "Evaluates ChatGPT-4.0 on Spanish university entrance exams in math, demonstrating strong competence in probability and statistics while analyzing limitations in algebra.",
    doi: "https://doi.org/10.29333/iejme/15517",
  },
  {
    title: "Tutor virtual inteligente basado en modelos generativos del lenguaje",
    authors: "A. Fernández-Isabel, I. Martín de Diego, E. L. Cano, M. Cuesta, C. Lancho",
    venue: "X Innovation in Digital Education Conference (JID URJC)",
    date: "22/11/2023",
    desc: "Presents a fine-tuned LLM tutor tailored to university courses using syllabus materials, offering personalized explanations, exercises, and interactive continuous assistance.",
    doi: "https://doi.org/10.14679/3314",
    downloadUrl: "https://eventos.urjc.es/file_manager/getfile/152649",
  },
  {
    title: "Empowering Academic Performance: Data-Driven Mentoring for Personalized Education",
    authors: "M. Cuesta, C. Lancho, I. Martín de Diego, A. Fernández-Isabel, E. L. Cano, J. M. Moguerza",
    venue: "16th annual International Conference of Education, Research and Innovation (ICERI2023)",
    date: "13/11/2023",
    desc: "Introduces a mentoring framework combining learning analytics, questionnaires, and predictive machine learning to forecast academic needs and tailor interventions.",
    doi: "https://doi.org/10.21125/iceri.2023.0532",
  },
  {
    title: "DSExams: Massive and automated generation of randomized multipurpose questionnaires",
    authors: "E. L. Cano, M. Cuesta, C. Lancho, C. Alfaro, M. J. Algar, A. Alonso-Ayuso, A. Fernández-Isabel, J. Gómez, I. Martín de Diego, J. M. Moguerza, F. Ortega, Á. Udías",
    venue: "15th International Conference on Education and New Learning Technologies (EDULEARN23)",
    date: "03/07/2023",
    desc: "A scalable automated questionnaire pipeline for assessment and self-evaluation in Data Science, leveraging randomization to prevent rote memorization.",
    doi: "https://doi.org/10.21125/edulearn.2023.0495",
    slidesUrl: "https://www.lcano.com/p/edulearn23/",
  },
  {
    title: "DSGame Kids: Learning Data Science projects through a storytelling board game",
    authors: "A. Fernández-Isabel, I. Martín de Diego, M. Cuesta, C. Lancho, J. M. Moguerza",
    venue: "17th International Technology, Education and Development Conference (INTED2023)",
    date: "06/03/2023",
    desc: "A physical board game teaching the complete data science lifecycle to computer science students through cooperative storytelling, teamwork, and mission milestones.",
    doi: "https://doi.org/10.21125/inted.2023.0286",
  },
  {
    title: "Concurso de Monty Hall: una aplicación interactiva con R para explicar probabilidad",
    authors: "E. L. Cano",
    venue: "I Open Culture Conference, URJC",
    date: "30/03/2022",
    desc: "A gamified Shiny application that explains conditional probability and Bayes' rule by simulating the famous Monty Hall dilemma interactively.",
    appUrl: "https://elcano.shinyapps.io/monty_hall/",
  },
  {
    title: "Mejorando la comprensión de conceptos estadísticos mediante aplicaciones interactivas innovadoras",
    authors: "E. L. Cano, M. J. Algar, A. Alonso-Ayuso, J. M. Moguerza, F. Ortega",
    venue: "VIII Teaching Innovation Conference, URJC",
    date: "25/11/2021",
    desc: "Interactive Shiny apps that visually simulate frequentist probability, sampling distributions, and central limit theorems to boost student engagement in STEM courses.",
    appUrl: "https://elcano.shinyapps.io/probability_as_relative_frequency/",
  },
];

function HeaderSection() {
  return (
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            DSLAB-TI: teaching innovation
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            The <strong>Data Science Lab for Teaching Innovation</strong> (DSLAB-TI) pioneers the development of active methodologies, gamified educational tools, generative AI assistants, and automated assessment systems to transform data science education.
          </p>
        </div>

        <div className="shrink-0">
          <img
              src="/assets/images/logos/DSLAB-TI_blanco.png"
              alt="DSLAB-TI logo"
              width={558}
              height={162}
              className="h-16 sm:h-20 w-auto object-contain dark:bg-white/95 dark:p-2.5 dark:rounded-2xl dark:shadow-sm"
          />
        </div>
      </div>
  );
}

function CtaBanner() {
  return (
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0086BA]/10 via-slate-50 to-rose-500/10 dark:from-[#0086BA]/20 dark:via-slate-900 dark:to-rose-500/20 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Featured teaching initiatives
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Explore our open-source virtual tutor ViLT and the ¡CONECTA! board game.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
              href="https://github.com/URJCDSLab/ViLT"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-[#0086BA] text-white hover:bg-[#0086BA]/90 transition-colors inline-flex items-center gap-1.5"
          >
            Meet ViLT <ExternalLink className="w-4 h-4" />
          </a>
          <Link
              href="/education/conecta/"
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-1.5"
          >
            ¡CONECTA! <Gamepad2 className="w-4 h-4 text-[#E30613]" />
          </Link>
        </div>
      </div>
  );
}

function NarrativeSection() {
  return (
      <section className="space-y-8">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Empowering education through Data Science
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="lg:col-span-6 space-y-4">
            <p>
              Data Science Lab for Teaching Innovation (DSLAB-TI) is a recognized teaching innovation group whose primary mission is to leverage data science, machine learning, and interactive visual analytics to elevate university pedagogy.
            </p>
            <p>
              By collecting structured student interaction metrics through tailored online questionnaires, the group builds machine learning models capable of forecasting student evaluations based on partial coursework results. These predictive models identify vulnerable student profiles early, enabling timely, targeted pedagogical interventions.
            </p>
          </div>
          <div className="lg:col-span-6 space-y-4">
            <p>
              Results and predictive indicators are delivered through interactive, role-specific dashboards designed for students and educators. Once validated, models are deployed into production across subsequent academic cycles.
            </p>
            <p>
              Our innovation actions are inherently scalable and replicable across undergraduate and master&apos;s programs at URJC and beyond, requiring only subject-specific questionnaire configurations to unlock predictive learning analytics.
            </p>
          </div>
        </div>
      </section>
  );
}

function ObjectivesAndActionLines() {
  return (
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-5 xl:col-span-4 relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between group">

          {/* Background Watermark Icon */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-12 text-[#0086BA] opacity-[0.10] dark:opacity-[0.16] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1/2">
            <Target className="w-56 h-56" strokeWidth={1} />
          </div>

          {/* Content safely stacked above the background icon */}
          <div className="relative z-10 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Strategic objectives
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              {strategicObjectives.map((obj) => (
                  <li key={obj} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#0086BA] mt-1.5 shrink-0" />
                    <span>{obj}</span>
                  </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7 xl:col-span-8 relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 group">

          {/* Background Watermark Icon */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-12 text-emerald-600 opacity-[0.10] dark:opacity-[0.16] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1/2">
            <Compass className="w-56 h-56" strokeWidth={1} />
          </div>

          {/* Content safely stacked above the background icon */}
          <div className="relative z-10 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Key action lines
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              {actionLines.map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>{line}</span>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
  );
}

function ProjectsSection() {
  return (
      <section className="space-y-8">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Teaching innovation projects
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Competitive teaching innovation grants (Convocatorias de Proyectos de Innovación Docente &bull; URJC).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj) => (
              <div
                  key={proj.title}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow"
              >
                <div className="space-y-3">
              <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {proj.period}
              </span>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {proj.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-3">
                  {proj.github && (
                      <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0086BA] hover:underline"
                      >
                        <Code2 className="w-3.5 h-3.5" /> Source code
                      </a>
                  )}
                  {proj.slides && (
                      <a
                          href={proj.slides}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:underline"
                      >
                        <Presentation className="w-3.5 h-3.5" /> {proj.slidesLabel}
                      </a>
                  )}
                  {proj.link && (
                      <Link
                          href={proj.link}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0086BA] hover:underline"
                      >
                        {proj.linkLabel} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                  )}
                </div>
              </div>
          ))}
        </div>
      </section>
  );
}

function PublicationsSection() {
  return (
      <section className="space-y-8">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Featured publications in educational innovation
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Articles, conference proceedings, and interactive teaching tools authored by DSLAB-TI researchers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub) => (
              <div
                  key={pub.title}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="text-xs text-[#0086BA] font-semibold">
                    {pub.venue} &bull; {pub.date}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {pub.authors}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pub.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-3">
                  {pub.doi && (
                      <a
                          href={pub.doi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0086BA] hover:underline"
                      >
                        <FileText className="w-3.5 h-3.5" /> Read publication (DOI)
                      </a>
                  )}
                  {pub.slidesUrl && (
                      <a
                          href={pub.slidesUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:underline"
                      >
                        <Presentation className="w-3.5 h-3.5" /> Presentation slides
                      </a>
                  )}
                  {pub.appUrl && (
                      <a
                          href={pub.appUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        <PlayCircle className="w-3.5 h-3.5" /> Launch interactive app
                      </a>
                  )}
                  {pub.downloadUrl && (
                      <a
                          href={pub.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:underline"
                      >
                        <FileText className="w-3.5 h-3.5" /> Download book chapter
                      </a>
                  )}
                </div>
              </div>
          ))}
        </div>
      </section>
  );
}

export default function DslabTiPage() {
  return (
      <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <HeaderSection />
        <CtaBanner />
        <NarrativeSection />
        <ObjectivesAndActionLines />
        <ProjectsSection />
        <PublicationsSection />
      </div>
  );
}