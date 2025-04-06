export interface Color {
  hex: string;
  name: string;
  rgb: {
    r: number;
    g: number;
    b: number;
  };
}

export interface SavedColor extends Color {
  id: string;
  timestamp: number;
  source: 'camera' | 'upload';
}

export interface FeedbackData {
  id: string;
  type: 'bug' | 'feature' | 'general';
  message: string;
  timestamp: number;
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: number;
}