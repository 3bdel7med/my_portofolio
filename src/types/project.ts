export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  category: string;
  period: string;
  featured?: boolean;
  icon: string;
  accent: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
}