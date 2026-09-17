import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "2026-nursing",
    title: "Nueva publicación en Nursing in Critical Care",
    date: "15 Abr 2026",
    author: "Isaac Martín de Diego",
    authorLink: "/about/team#isaac-martin",
    imageUrl: "https://onlinelibrary.wiley.com/pb-assets/journal-banners/14785153-1501384720787.jpg",
    summary: "Colaboración con la Unidad de Quemados y Reanimación del Hospital La Paz para estandarizar el volumen de descarte en extracciones por catéter arterial para reducir la anemia iatrogénica en pacientes críticos.",
    content: "Desde el Data Science Lab nos complace compartir un nuevo trabajo en el que hemos colaborado con la Unidad de Quemados y la Unidad de Reanimación del Hospital Universitario de La Paz. El estudio aborda la necesidad de estandarizar el volumen de descarte en extracciones por catéter arterial para reducir la anemia iatrogénica. Nuestro compañero Víctor Aceña ha realizado el diseño estadístico y computacional del estudio, íntegramente con R.",
    tags: ["Healthcare", "Biostatistics", "Hospital La Paz", "R"],
  },
  {
    id: "2025-modelos-prediccion",
    title: "Publicación del libro 'Modelos Estadísticos para la Predicción'",
    date: "20 Sep 2025",
    author: "Víctor Aceña & Isaac Martín",
    authorLink: "/about/team#victor-acena",
    summary: "Lanzamiento del nuevo libro en acceso abierto que introduce de forma rigurosa y práctica las técnicas de modelización estadística predictiva utilizando R.",
    content: "El libro ofrece una visión completa de modelos lineales, regularización, splines y evaluación rigurosa de errores de predicción, enfocado a estudiantes de grado y posgrado en ciencia de datos e ingeniería.",
    tags: ["Books", "R", "Predictive Modeling", "Open Access"],
  },
  {
    id: "2025-dicyme-update",
    title: "Avances en la modelización de ciber-riesgo industrial en DICYME",
    date: "12 May 2025",
    author: "Javier Martínez Moguerza",
    authorLink: "/about/team#javier-martinez",
    summary: "Resultados clave en la estimación dinámica de la probabilidad e impacto de ciber-incidentes en infraestructuras industriales críticas.",
    content: "En el marco del proyecto DICYME, en consorcio con DeNexus y financiado por el MICIU/AEI a través del PRTR, hemos completado los módulos de visualización interactiva y aprendizaje bayesiano para el soporte a la toma de decisiones.",
    tags: ["Cybersecurity", "Bayesian", "DICYME", "Risk Modeling"],
  },
];
