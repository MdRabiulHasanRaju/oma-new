export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Admission' | 'Exam' | 'Event' | 'General' | 'Holiday';
  excerpt: string;
  content: string;
  pinned?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortCode: string;
  category: string;
  duration: string;
  level: 'Pre-Sea' | 'Post-Sea' | 'STCW' | 'Specialized' | 'Degree';
  description: string;
  longDescription: string;
  eligibility: string;
  fees: string;
  seats: number;
  image: string;
  highlights: string[];
  syllabus: { title: string; topics: string[] }[];
  featured?: boolean;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  specialization: string;
  experience: string;
  image: string;
  department: string;
}

export interface Department {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  head: string;
  courses: number;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  category: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  type: 'Government' | 'Industry' | 'Academic';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  quote: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  category: string;
  fileSize: string;
  format: string;
  url: string;
}

export interface CareerItem {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  deadline: string;
  description: string;
}

export interface AdmissionStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface MessageContent {
  name: string;
  role: string;
  image: string;
  message: string;
  signature: string;
}
