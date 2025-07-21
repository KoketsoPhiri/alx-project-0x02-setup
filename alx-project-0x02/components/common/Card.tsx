// components/common/Card.tsx
import React from 'react';
import { CardProps } from '@/interfaces'; // Import the CardProps interface

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-sm border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
};

export default Card;