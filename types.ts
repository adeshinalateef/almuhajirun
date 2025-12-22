
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
