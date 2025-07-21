// pages/users.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard'; // Import UserCard
import { UserProps } from '@/interfaces'; // Import UserProps

// Define the props type for the Users component
interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow p-8">
        <h1 className="text-5xl font-semibold text-purple-700 text-center mb-10">Our Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              address={user.address}
              phone={user.phone}
              website={user.website}
              company={user.company}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

// getStaticProps to fetch user data at build time
export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users: UserProps[] = await response.json();

    return {
      props: {
        users,
      },
      revalidate: 60, // Re-generate the page every 60 seconds (optional)
    };
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return {
      props: {
        users: [], // Return empty array on error
      },
      revalidate: 10, // Try to re-fetch soon
    };
  }
}

export default Users;