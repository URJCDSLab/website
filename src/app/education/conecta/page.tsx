import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "¡CONECTA! Serious Game",
  description:
    "¡CONECTA! - The educational board game designed by DSLAB URJC teaching telecommunications engineering, data science, and AI problem-solving.",
  path: "/education/conecta/",
});

const stages = [
  {
    title: "Problem",
    image: "/assets/images/conecta/problema.jpg",
    desc: "Identify and define a real-world challenge that needs solving, typically based on a societal need.",
  },
  {
    title: "Technologies",
    image: "/assets/images/conecta/tecnologia.jpg",
    desc: "Select and develop the right telecommunications infrastructure and tools to tackle the identified problem.",
  },
  {
    title: "Artificial intelligence",
    image: "/assets/images/conecta/ia.jpg",
    desc: "Apply AI models to optimize and improve communication systems based on the collected data, making the solution smarter and more effective.",
  },
  {
    title: "Solution",
    image: "/assets/images/conecta/solucion.jpg",
    desc: "Implement a practical solution that allows users to benefit from enhanced telecommunications systems, such as mobile apps that boost connectivity or network quality monitoring tools.",
  },
];

export default function ConectaPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          ¡CONECTA!
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          <strong>¡CONECTA!</strong> is an exciting board game designed to help a team of telecommunications engineers achieve success in data-driven project development. This fast-paced, collaborative game immerses players in the dynamic world of telecommunications engineering—a field that blends math and computing to create and enhance communication systems.
        </p>
      </div>

      {/* Game Objective & Stages */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Game objective
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl">
            The team’s main goal is to complete each stage of a telecommunications project in a practical and efficient way, gathering the necessary resources to progress:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm flex flex-col items-center justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-28 h-28 mb-4 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-800 p-2 flex items-center justify-center">
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg mb-2">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Game Dynamics */}
      <section className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Game dynamics
        </h2>
        <ul className="space-y-3 text-sm sm:text-base text-slate-700 dark:text-slate-300">
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#0086BA] mt-2 shrink-0" />
            <span><strong>Teamwork:</strong> Players must collaborate to complete each stage of the project.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E30613] mt-2 shrink-0" />
            <span><strong>Against the clock:</strong> It’s a countdown! Finish the project before other teams do.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
            <span><strong>Interactive:</strong> Learn from other players, trade resources, and stay alert to unexpected challenges.</span>
          </li>
        </ul>
      </section>

      {/* Gameplay Experience */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
          Gameplay experience
        </h2>
        <div className="space-y-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
          <p>
            In <strong>¡CONECTA!</strong>, players experience the thrill of being part of a telecommunications engineering team, facing real-life challenges and using advanced technologies to find creative solutions. It’s a fun, educational adventure where learning meets strategy and innovation.
          </p>
          <p>
            Join the <strong>¡CONECTA!</strong> adventure and show off your skills as a telecommunications engineer while working with your team to achieve victory!
          </p>
        </div>
      </section>

      {/* Instructional Video */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Game instructions
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Watch the official instructional walkthrough video explaining setup, turns, cards, and winning strategies.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-black">
          <video
            controls
            poster="/assets/images/conecta/CONECTA_poster.png"
            className="w-full h-auto aspect-video"
          >
            <source src="/assets/images/conecta/CONECTA.mp4" type="video/mp4" />
            <track kind="captions" srcLang="es" label="Spanish" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Project Collaborators & Sponsors */}
      <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center justify-center">
          <div className="flex flex-col items-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Project
            </span>
            <div className="h-16 flex items-center justify-center w-48">
              <img
                src="/assets/images/conecta/logo_telecorenta.png"
                alt="Teleco Renta"
                className="max-h-14 max-w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Collaborator
            </span>
            <div className="h-16 flex items-center justify-center w-48">
              <img
                src="/assets/images/conecta/logo_aje.png"
                alt="AJE"
                className="max-h-14 max-w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Sponsor
            </span>
            <div className="h-16 flex items-center justify-center w-48">
              <img
                src="/assets/images/conecta/logo_coit.png"
                alt="COIT"
                className="max-h-14 max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
