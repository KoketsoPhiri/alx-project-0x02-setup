// interfaces/index.ts

export interface CardProps {
  title: string;
  content: string;
}

export interface PostData { // Used for new post input (might not have ID initially)
  id?: number; // ID is optional for new posts
  title: string;
  content: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

export interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  shape?: ButtonShape;
  onClick?: () => void;
  className?: string;
}

// New interface for PostProps (for fetched data)
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string; // JSONPlaceholder uses 'body' for content
}