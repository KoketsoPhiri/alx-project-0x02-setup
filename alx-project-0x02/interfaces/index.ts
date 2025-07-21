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


export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string; // JSONPlaceholder uses 'body' for content
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}