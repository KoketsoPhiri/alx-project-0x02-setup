// interfaces/index.ts

// Existing PostProps
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Existing UserProps interfaces (keep these as well)
export interface GeoProps {
  lat: string;
  lng: string;
}

export interface AddressProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoProps;
}

export interface CompanyProps {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressProps;
  phone: string;
  website: string;
  company: CompanyProps;
}


// NEW Interfaces for Task 4:
export interface PostData {
  userId: number;
  id?: number; // 'id' is optional for new posts as it might be assigned by the server
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void; // A function to close the modal
  onSubmit: (post: PostData) => void; // A function to handle form submission, passing PostData
}

export interface UserData {
  id?: number; // 'id' is optional for new users
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserData) => void;
}