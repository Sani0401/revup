export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
}

export interface MetricsData {
  label: string;
  value: number;
}

export interface ChatMessage {
  id: number;
  sender: 'user' | 'ai';
  message: string;
  timestamp: string;
}