// pages/posts.tsx
import React from 'react';
import Header from '@/components/layout/Header'; // Import Header

const Posts: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header /> {/* Header component rendered here */}
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-semibold text-red-700">Posts Page</h1>
        <p className="mt-4 text-xl text-gray-600">This page will display a list of posts.</p>
      </main>
    </div>
  );
};

export default Posts;