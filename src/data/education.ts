export interface BookItem {
  title: string;
  authors: string;
  date: string;
  url: string;
  description: string;
  sourceUrl?: string;
  pdfUrl?: string;
}

export interface ResourceItem {
  title: string;
  authors?: string;
  url?: string;
  description: string;
  type: "package" | "dashboard" | "slides" | "exercise";
}

export const books: BookItem[] = [
  {
    title: "Modelos Estadísticos para la Predicción",
    authors: "Víctor Aceña & Isaac Martín",
    date: "Sep. 2025",
    url: "https://urjcdslab.github.io/ModelosEstadisticosPrediccion/",
    description: "Provides a rigorous and practical introduction to statistical modeling techniques, especially regression models, aimed at helping students understand, apply, and critically evaluate predictive methods using real data and the R programming language.",
  },
  {
    title: "Modelos de Regresión",
    authors: "Víctor Aceña, Carmen Lancho & Isaac Martín",
    date: "Jan. 2025",
    url: "https://urjcdslab.github.io/Regresion",
    description: "An overview of regression models, including linear, variable selection, regularization, non-linear transformations, feature engineering, and generalized regression techniques.",
  },
  {
    title: "Introducción al software estadístico R",
    authors: "Emilio L. Cano",
    date: "Jun. 2024",
    url: "https://www.lcano.com/b/iser/_book/",
    description: "Practical guidance on using software for statistical data analysis, aimed at helping organizations leverage their data in the digital age.",
  },
  {
    title: "Inferencia Estadística",
    authors: "Carmen Lancho, Víctor Aceña & Isaac Martín",
    date: "May. 2024",
    url: "https://urjcdslab.github.io/InferenciaEstadistica",
    sourceUrl: "https://github.com/URJCDSLab/InferenciaEstadistica",
    pdfUrl: "https://hdl.handle.net/10115/41304",
    description: "An exploration of statistical inference, covering key concepts, sampling distributions, hypothesis testing, and practical applications in data science and engineering.",
  },
  {
    title: "Fundamentos de ciencia de datos con R",
    authors: "With contributions by Emilio L. Cano",
    date: "Jan. 2024",
    url: "https://cdr-book.github.io/",
    description: "Guides readers through data science foundations, big data ethics, and mastering statistical techniques with R.",
  },
  {
    title: "Análisis Exploratorio de Datos",
    authors: "Víctor Aceña, Carmen Lancho & Isaac Martín",
    date: "Sep. 2023",
    url: "https://urjcdslab.github.io/AnalisisExploratorioDatos/",
    description: "Introduces foundational concepts and practical techniques of exploratory data analysis, data cleaning, transformation, and visual discovery.",
  },
];

export const rPackages: ResourceItem[] = [
  {
    title: "ECoL",
    authors: "Extended Complexity Library",
    url: "https://cran.r-project.org/package=ECoL",
    description: "Provides complexity measures for supervised problems to characterize feature overlap, neighborhood, linearity, dimensionality, and class balance in classification.",
    type: "package",
  },
  {
    title: "sixsigma",
    authors: "Emilio L. Cano",
    url: "https://cran.r-project.org/package=SixSigma",
    description: "Functions and utilities for Six Sigma quality management, capability analysis, control charts, and loss function evaluation.",
    type: "package",
  },
  {
    title: "BivRegBLS",
    authors: "Tolerance intervals & clinical acceptance",
    url: "https://cran.r-project.org/package=BivRegBLS",
    description: "Bivariate regression methods (Deming, Passing-Bablok, York) and clinical agreement assessment with errors-in-variables.",
    type: "package",
  },
];
