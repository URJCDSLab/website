export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "faculty" | "researchers" | "affiliated" | "visiting" | "former";
  title?: string;
  department: string;
  institution?: string;
  photo: string;
  hoverPhoto?: string;
  email?: string;
  scholar?: string;
  orcid?: string;
}

export interface Publication {
  id?: string;
  title: string;
  authors: string[];
  year: number;
  publication_date?: string;
  work_type?: string;
  source_type?: string;
  journal?: string | null;
  quartile?: string | null;
  issn?: string | null;
  doi?: string | null;
  pdf_url?: string | null;
  landing_page_url?: string | null;
  keywords?: string[];
  is_oa?: boolean;
  cited_by_count?: number;
  dslab_authors?: string[];
}

export interface ResearchLine {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  description: string;
  topics: string[];
}

export interface Project {
  id: string;
  title: string;
  type: "research" | "consulting";
  fundingAgency?: string;
  duration?: string;
  summary: string;
  link?: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  authorLink?: string;
  summary: string;
  content: string;
  imageUrl?: string;
  tags: string[];
}
