// components/common/UserCard.tsx
import React from 'react';
import { UserProps } from '@/interfaces'; // Import the UserProps interface

const UserCard: React.FC<UserProps> = ({ id, name, username, email, website, company, address }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden my-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
          User ID: {id}
        </div>
        <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">
          {name}
        </h2>
        <p className="mt-2 text-gray-500">@{username}</p>
        <p className="mt-2 text-gray-600">
          <span className="font-medium">Email:</span> {email}
        </p>
        <p className="mt-2 text-gray-600">
          <span className="font-medium">Website:</span>{' '}
          <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {website}
          </a>
        </p>

        <div className="mt-5 border-t pt-5">
          <h3 className="text-lg font-bold text-gray-700 mb-2">Company</h3>
          <p className="text-gray-600">
            <span className="font-medium">Name:</span> {company.name}
          </p>
          <p className="text-gray-600 italic text-sm">
            {company.catchPhrase}
          </p>
        </div>

        <div className="mt-5 border-t pt-5">
          <h3 className="text-lg font-bold text-gray-700 mb-2">Address</h3>
          <p className="text-gray-600">{address.street}, {address.suite}</p>
          <p className="text-gray-600">{address.city}, {address.zipcode}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;