export interface ConsultingProject {
  title: string;
  client: string;
  period: string;
  image: string;
  description: string;
}

export interface ClientItem {
  name: string;
  logo: string;
  url?: string;
  description?: string;
}

export const consultingProjects: ConsultingProject[] = [
  {
    title: "AGROCOS: Soil Organic Carbon Estimation",
    client: "Digitanimal",
    period: "2026 - 2027",
    image: "/assets/images/consulting_projects/agrocos.jpg",
    description: "Development and technological transfer of a predictive livestock farming system for the estimation of soil organic carbon levels, integrating soil variables with GPS animal monitoring data.",
  },
  {
    title: "TunAI: Tuna Presence Prediction",
    client: "Satlink",
    period: "2026 - 2027",
    image: "/assets/images/consulting_projects/tunai.jpg",
    description: "System predicting tuna presence by analyzing historical catch data with oceanographic conditions, emphasizing explainability so maritime operators understand the environmental factors driving predictions.",
  },
  {
    title: "GenAI for Retail Promotion Campaigns",
    client: "Tier1 & Optimization Research Group",
    period: "2025 - 2026",
    image: "/assets/images/consulting_projects/comerzzia.jpg",
    description: "Application of GenAI and LLMs with Retrieval-Augmented Generation (RAG) and intelligent agents to automate and hyper-personalize promotional retail campaigns based on purchase histories.",
  },
  {
    title: "Pre-invoice Estimation for Gas & Electricity",
    client: "Endesa",
    period: "2025",
    image: "/assets/images/consulting_projects/prefactura.png",
    description: "Porting complex MATLAB legacy code to Python to develop an automated preliminary invoice estimation system for gas and electricity contracts with flexible consumption forecasting.",
  },
  {
    title: "Plastic Pollution from Source to Sea",
    client: "Seureca Veolia",
    period: "2025",
    image: "/assets/images/consulting_projects/mrc_plastic.jpg",
    description: "Development of an Open Data Platform to support data-driven decision-making around plastic waste management and KPIs for international environmental reporting obligations.",
  },
  {
    title: "Weaving Connections: Combating Energy Poverty",
    client: "Seureca Veolia",
    period: "2024 - 2025",
    image: "/assets/images/consulting_projects/mrc_brazil.png",
    description: "Mapping and consolidating indicators to evaluate public policies combatting energy poverty in remote and vulnerable communities through an interactive analytics dashboard.",
  },
];

export const consultingClients: ClientItem[] = [
  {
    name: "Digitanimal",
    logo: "/assets/images/research_projects/digitanimal.jpg",
    url: "https://digitanimal.com/",
  },
  {
    name: "Endesa",
    logo: "/assets/images/consulting_projects/prefactura.png",
    url: "https://www.endesa.com/",
  },
  {
    name: "Satlink",
    logo: "/assets/images/consulting_projects/tunai.jpg",
    url: "https://www.satlink.es/",
  },
  {
    name: "Seureca Veolia",
    logo: "/assets/images/consulting_projects/mrc.jpg",
    url: "https://www.veolia.com/",
  },
  {
    name: "Tier1",
    logo: "/assets/images/consulting_projects/comerzzia.jpg",
    url: "https://www.tier1.com/",
  },
];
