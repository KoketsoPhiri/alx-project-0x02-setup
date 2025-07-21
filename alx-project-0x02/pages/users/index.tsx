// pages/users/index.tsx
import React, { useState } from 'react';
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal"; // Import UserModal
import { UserData, UserProps } from "@/interfaces"; // Import UserData

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users: initialUsers }) => { // Rename prop to avoid conflict
  const [isModalOpen, setModalOpen] = useState(false);
  // Manage the list of users locally, initialized with fetched users
  const [currentUsers, setCurrentUsers] = useState<UserProps[]>(initialUsers);

  // This function handles adding a new user from the modal
  const handleAddUser = (newUserData: UserData) => {
    // In a real application, you would send this to a backend API.
    // For now, we simulate assigning a temporary ID (in a real app, this would come from the server)
    const newId = currentUsers.length > 0 ? Math.max(...currentUsers.map(u => u.id)) + 1 : 1;

    // Ensure the new user data conforms to UserProps, adding a default ID and ensuring geo is present
    const newUser: UserProps = {
      ...newUserData,
      id: newId,
      // Ensure nested objects like address.geo are fully present if UserData allows partial
      address: {
        ...newUserData.address,
        geo: newUserData.address.geo || { lat: '0', lng: '0' } // Ensure geo is present
      }
    };

    setCurrentUsers((prevUsers) => [newUser, ...prevUsers]); // Add new user to the beginning of the list
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Our Users</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-700 px-6 py-2 rounded-full text-white hover:bg-green-800 transition-colors"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentUsers?.map((user: UserProps) => ( // Iterate over currentUsers state
            <UserCard key={user.id} {...user} /> // Pass all user props directly
          ))}
        </div>
      </main>

      {/* Conditional rendering of UserModal */}
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;