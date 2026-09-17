export interface ResearchLineItem {
  id: string;
  title: string;
  description: string;
  leads: { name: string; id: string }[];
}

export interface ResearchProjectItem {
  id: string;
  title: string;
  period: string;
  description: string;
  image: string;
  link?: string;
  fundingBadge?: string;
}

export const researchLines: ResearchLineItem[] = [
  {
    id: "complexity-measures",
    title: "Complexity Measures",
    description: "We develop tools and metrics to analyze and characterize data regarding feature overlap, class separability, and data geometry to improve machine learning models based on dataset properties.",
    leads: [
      { name: "Víctor Aceña", id: "victor-acena" },
      { name: "Carmen Lancho", id: "carmen-lancho" },
    ],
  },
  {
    id: "data-visualization",
    title: "Data Visualization",
    description: "We design tools to graphically represent complex multidimensional data, focusing on enhancing decision-making through effective and interactive visualizations.",
    leads: [
      { name: "Isaac Martín", id: "isaac-martin" },
      { name: "Emilio López", id: "emilio-lopez" },
    ],
  },
  {
    id: "explainable-ml",
    title: "Explainable Machine Learning",
    description: "We focus on explainable and interpretable ML, particularly counterfactuals and semifactuals, enhancing transparency in sensitive fields like healthcare and finance.",
    leads: [
      { name: "Javier Martínez", id: "javier-martinez" },
      { name: "Rubén Rodríguez", id: "ruben-rodriguez" },
    ],
  },
  {
    id: "foundations-ml",
    title: "Foundations of Machine Learning",
    description: "We explore the theoretical foundations of machine learning, specializing in Support Vector Machines, kernel methods, statistical learning theory, and ensemble methods.",
    leads: [
      { name: "Isaac Martín", id: "isaac-martin" },
      { name: "Javier Martínez", id: "javier-martinez" },
    ],
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    description: "We research and develop AI systems capable of generating realistic data, including text, images, and synthetic datasets, enabling personalization, simulation, and creative applications.",
    leads: [
      { name: "Alberto Fernández", id: "alberto-fernandez" },
      { name: "Rubén Rodríguez", id: "ruben-rodriguez" },
    ],
  },
  {
    id: "indicator-development",
    title: "Indicator Development",
    description: "We design robust indicators for sectors like sustainable tourism and healthcare, supporting precise evaluations and informed public decisions.",
    leads: [
      { name: "Emilio López", id: "emilio-lopez" },
      { name: "Carmen Lancho", id: "carmen-lancho" },
    ],
  },
  {
    id: "intelligent-agents",
    title: "Intelligent Agents",
    description: "We create autonomous and multi-agent AI systems for dynamic tasks, integrating perception, reasoning, and action for advanced automation.",
    leads: [
      { name: "Alberto Fernández", id: "alberto-fernandez" },
      { name: "Rubén Rodríguez", id: "ruben-rodriguez" },
    ],
  },
  {
    id: "iot",
    title: "Internet of Things",
    description: "We develop edge ML algorithms for IoT systems, optimizing data transmission to improve energy efficiency and operational reliability in smart sensors.",
    leads: [
      { name: "Alberto Fernández", id: "alberto-fernandez" },
      { name: "Felipe Ortega", id: "felipe-ortega" },
    ],
  },
  {
    id: "knowledge-systems",
    title: "Knowledge-Based Systems",
    description: "We create systems integrating domain expert knowledge, semantic graphs, and rule engines to address complex reasoning problems efficiently.",
    leads: [
      { name: "Alberto Fernández", id: "alberto-fernandez" },
      { name: "Rubén Rodríguez", id: "ruben-rodriguez" },
    ],
  },
  {
    id: "metaheuristics",
    title: "Metaheuristics",
    description: "We research advanced heuristic and metaheuristic search algorithms to solve NP-hard combinatorial optimization problems in logistics and network design.",
    leads: [
      { name: "Antonio Alonso", id: "antonio-alonso" },
      { name: "Víctor Aceña", id: "victor-acena" },
    ],
  },
  {
    id: "open-data",
    title: "Open Data",
    description: "We develop architectures and systems for managing open data repositories, ensuring accessibility, interoperability, and reusability for public and scientific value.",
    leads: [
      { name: "Emilio López", id: "emilio-lopez" },
      { name: "Carmen Lancho", id: "carmen-lancho" },
    ],
  },
  {
    id: "optimization",
    title: "Optimization",
    description: "We develop mathematical optimization methods to maximize system efficiency in resource management, scheduling, and operational performance under uncertainty.",
    leads: [
      { name: "Antonio Alonso", id: "antonio-alonso" },
      { name: "Carmen Lancho", id: "carmen-lancho" },
    ],
  },
  {
    id: "performance-metrics",
    title: "Performance Metrics",
    description: "We create advanced mathematical metrics to evaluate the efficiency, calibration, fairness, and generalization of complex machine learning models.",
    leads: [
      { name: "Isaac Martín", id: "isaac-martin" },
      { name: "Javier Martínez", id: "javier-martinez" },
    ],
  },
  {
    id: "sports-analytics",
    title: "Sports Analytics",
    description: "We apply machine learning models to enhance athletic performance and competition strategies, across sports like football, swimming, and speed skating.",
    leads: [
      { name: "Isaac Martín", id: "isaac-martin" },
      { name: "Víctor Aceña", id: "victor-acena" },
    ],
  },
  {
    id: "recommender-systems",
    title: "Recommender Systems",
    description: "We design personalized recommendation algorithms for tourism, content platforms, and clinical protocols, enhancing user decision-making.",
    leads: [
      { name: "Isaac Martín", id: "isaac-martin" },
      { name: "Alberto Fernández", id: "alberto-fernandez" },
    ],
  },
];

export const researchProjects: ResearchProjectItem[] = [
  {
    id: "pace",
    title: "PACE",
    period: "2024 - 2026",
    image: "/assets/images/research_projects/pace.jpg",
    description: "Performance Analytics and Competitions Evaluation (PACE) uses advanced machine learning to help athletes improve performance, optimize training strategies, and make data-driven competition decisions.",
  },
  {
    id: "ia3-chair",
    title: "IA3 Chair",
    period: "2024 - 2026",
    image: "/assets/images/research_projects/ia3.png",
    link: "http://ia3migdem.uah.es/",
    description: "Chair of Artificial Intelligence in Aeronautics and Aerospace, a joint initiative led by Universidad de Alcalá and Indra driving innovation and talent development in AI for aerospace technologies.",
  },
  {
    id: "ailive4env",
    title: "AILIVE4ENV",
    period: "2024 - 2026",
    image: "/assets/images/research_projects/ailive4env.jpg",
    description: "Data-driven project focused on enhancing livestock farming sustainability through AI, satellite imagery, and IoT data to mitigate climate change impact.",
  },
  {
    id: "attrv",
    title: "ATTRV",
    period: "2024 - 2025",
    image: "/assets/images/research_projects/attrv.jpg",
    description: "Application of Artificial Intelligence in the study of predictive factors of evolution in hereditary transthyretin Amyloidosis.",
  },
  {
    id: "dicyme",
    title: "DICYME",
    period: "2022 - 2025",
    image: "/assets/images/research_projects/dicyme.jpg",
    link: "https://dicyme.denexus.io/en/dicyme-project",
    fundingBadge: "/assets/images/research_projects/MICIU+NextG+PRTR+AEI.svg",
    description: "Design and build an advanced solution for dynamic modeling of cyber risk in industrial infrastructures, estimating probabilities and impact of cyber incidents for executive decision-making.",
  },
  {
    id: "evastur",
    title: "EVASTUR",
    period: "2022 - 2025",
    image: "/assets/images/research_projects/evastur.jpg",
    description: "Comprehensive platform to analyze, visualize, and evaluate sustainable tourism indicators, generating predictions and policy recommendations based on machine learning.",
  },
  {
    id: "vrcardio",
    title: "VRCARDIO",
    period: "2022 - 2024",
    image: "/assets/images/research_projects/cardio.jpg",
    description: "Collaboration with Spika Tech for holographic, non-invasive visualization measuring electrical signals produced by the heart for early diagnosis of cardiovascular disease.",
  },
  {
    id: "decide-madrid",
    title: "DECIDE MADRID",
    period: "2022 - 2023",
    image: "/assets/images/research_projects/madrid.jpg",
    description: "Collaboration with Deimos Space and the Madrid City Council to improve automated categorization and classification models in the Decide Madrid citizen participation platform.",
  },
  {
    id: "xmidas",
    title: "XMIDAS",
    period: "2021 - 2027",
    image: "/assets/images/research_projects/xmidas.jpg",
    description: "Integrates mathematical optimization and explainable machine learning to develop adaptive data science solutions for industrial challenges like concept drift across health, transport, and energy.",
  },
  {
    id: "siagro",
    title: "SIAGRO",
    period: "2021 - 2022",
    image: "/assets/images/research_projects/tat.jpg",
    description: "Collaboration with TEST & TRIALS developing statistical software with user-friendly exploratory analysis, pattern discovery, and predictive quality control.",
  },
  {
    id: "rnfc",
    title: "RNFC",
    period: "2021 - 2022",
    image: "/assets/images/research_projects/rnfc.jpeg",
    description: "Multicentre clinical study with the National Hip Fracture Registry (RNFC) to design and validate predictive models of ambulation capacity and autonomy deterioration one month after hip fracture.",
  },
  {
    id: "abaco",
    title: "ABACO",
    period: "2020",
    image: "/assets/images/research_projects/mattress.png",
    description: "Automatic Bed Assistance based on Continuous Optimization with Pixelabs S.L., learning optimal pressure patterns to maximize comfort and sleep quality in smart mattresses.",
  },
  {
    id: "gelob",
    title: "GELOB",
    period: "2020 - 2022",
    image: "/assets/images/research_projects/wolfs.jpg",
    description: "Coordinated by Unión de Pequeños Agricultores (UPA) with Digitanimal digital cowbells to monitor livestock behavior and prevent wolf attacks using real-time IoT tracking.",
  },
  {
    id: "covid-19",
    title: "COVID-19 Health Sufficiency",
    period: "2020",
    image: "/assets/images/research_projects/covid19.jpg",
    description: "Development of the Health Sufficiency Indicator (HSI) during the COVID-19 pandemic to visualize and understand stress levels across regional hospital systems in Spain.",
  },
  {
    id: "citizenlab",
    title: "CitizenLab",
    period: "2019 - 2021",
    image: "/assets/images/research_projects/citizenlab.jpg",
    link: "https://www.grantthornton.es/contentassets/13e5fa99f3ed4fd4903463f86ec89b44/citizenlab-20250226-2.pdf",
    description: "Experimental data science project in partnership with Grant Thornton analyzing citizen mobility and behavior to improve public services and economic development in the Madrid region.",
  },
  {
    id: "sabermed",
    title: "SABERMED",
    period: "2018 - 2021",
    image: "/assets/images/research_projects/sabermed.jpg",
    link: "/research/projects/sabermed",
    description: "Swarm Agent-Based Environment for Reputation in MEDicine assessing credibility of online medical information and detecting fraudulent health content through deep learning and intelligent agents.",
  },
];
