import { Metadata } from "next";
import { Gamepad2, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "¡CONECTA!",
  description: "¡CONECTA! - The educational board game for telecommunications engineering and data science.",
};

const stages = [
  {
    title: "Problem Identification",
    image: "/assets/images/conecta/problema.jpg",
    desc: "Identify and define real-world telecommunications and data challenges.",
  },
  {
    title: "Technologies",
    image: "/assets/images/conecta/tecnologia.jpg",
    desc: "Select and develop the right network infrastructure, protocols, and data tools.",
  },
  {
    title: "Artificial Intelligence",
    image: "/assets/images/conecta/ia.jpg",
    desc: "Apply ML algorithms to optimize transmission and extract predictive insights.",
  },
  {
    title: "Solution & Impact",
    image: "/assets/images/conecta/solucion.jpg",
    desc: "Deploy practical applications improving real-world connectivity and society.",
  },
];

export default function ConectaPage() {
  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E30613]/10 text-[#E30613] mb-3">
          <Gamepad2 className="w-3.5 h-3.5" />
          Gamified Learning
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          ¡CONECTA!
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          An educational board game designed to help teams of engineering students learn end-to-end data-driven project development in a collaborative, gamified environment.
        </p>
      </div>

      {/* Game Stages */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Game Stages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm flex flex-col items-center justify-between"
            >
              <div className="w-24 h-24 mb-4 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-800 p-2">
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-1">
                  {stage.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
