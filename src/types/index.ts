export interface TeamMember {
  id: string;
  firstName: string;
  lastName: string;
  name?: string;
  role: string;
  category?: "faculty" | "researchers" | "affiliated" | "visiting" | "former";
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
  image: string;
  description: string;
  link?: string;
  secondaryLink?: string;
  fundingLogo?: string;
}

export interface PartnerItem {
  name: string;
  logo: string;
  url?: string;
  description: string;
}

export interface ConsultingProjectItem {
  id: string;
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
  description: string;
}

export interface BookItem {
  title: string;
  authors: string;
  date: string;
  url: string;
  sourceUrl?: string;
  pdfUrl?: string;
  description: string;
  language?: string;
  isOpenAccess?: boolean;
}

export interface PackageItem {
  title: string;
  url: string;
  paperUrl?: string;
  description: string;
}

export interface DashboardItem {
  title: string;
  authors: string;
  date: string;
  url: string;
  slidesUrl?: string;
  sourceUrl?: string;
  description: string;
}

export interface SlideItem {
  title: string;
  authors: string;
  date: string;
  url: string;
  description: string;
}

export interface ExerciseItem {
  title: string;
  authors: string;
  date: string;
  url: string;
  burjcUrl?: string;
  description: string;
}

export interface TrainingCourseItem {
  title: string;
  image: string;
  description: string;
}

export interface GroupPhotoItem {
  id: number;
  src: string;
  alt: string;
}

export interface BlogPostLink {
  label: string;
  url: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description?: string;
  content: string[];
  image?: string;
  imageUrl?: string;
  summary?: string;
  author?: string;
  authorLink?: string;
  conferenceLogo?: string | string[];
  conferenceLogos?: string[];
  additionalImages?: string[];
  links?: BlogPostLink[];
  tags?: string[];
}

// Convenient aliases for page components
export type ResearchProject = ResearchProjectItem;
export type ResearchPartner = PartnerItem;
export type ConsultingProject = ConsultingProjectItem;
export type ConsultingClient = ClientItem;
export type Book = BookItem & { burjcUrl?: string };
export type RPackage = PackageItem & { cranUrl?: string; githubUrl?: string; authors?: string };
export type ShinyApp = DashboardItem;
export type LectureSlide = SlideItem;
export type ExerciseSet = ExerciseItem;
export type TrainingCourse = TrainingCourseItem & { id?: string };
export type GroupPhoto = GroupPhotoItem;
