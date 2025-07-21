// components/common/UserCard.tsx
import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
  id
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-blue-700 mb-1">{name}</h2>
      <p className="text-gray-600 text-sm mb-3">@{username}</p>

      <div className="text-gray-700 text-sm space-y-1">
        <p><strong>Email:</strong> <a href={`mailto:${email}`} className="text-blue-500 hover:underline">{email}</a></p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{website}</a></p>
        <p>
          <strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}
        </p>
        <p><strong>Company:</strong> {company.name}</p>
        <p className="text-xs text-gray-500 mt-2">User ID: {id}</p>
      </div>
    </div>
  );
};

export default UserCard;