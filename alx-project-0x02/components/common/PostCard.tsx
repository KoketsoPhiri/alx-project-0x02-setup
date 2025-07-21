// components/common/PostCard.tsx
import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{body}</p>
      <div className="flex justify-between text-xs text-gray-500">
        <span>User ID: {userId}</span>
        <span>Post ID: {id}</span>
      </div>
    </div>
  );
};

export default PostCard;