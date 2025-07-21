// interfaces/index.ts

export interface CardProps {
  title: string;
  content: string;
}

export interface PostData {
  id: number;
  title: string;
  content: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// New interface for ButtonProps
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

export interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  shape?: ButtonShape;
  onClick?: () => void;
  className?: string; // Allow custom Tailwind classes to be passed
}