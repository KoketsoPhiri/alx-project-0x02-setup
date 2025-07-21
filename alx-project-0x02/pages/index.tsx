import React from 'react';
import Header from '@/components/layout/Header'; // Import the Header component

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <Header /> {/* Include the Header component */}
      <main className="flex-grow flex justify-center items-center">
        <h1 className="text-7xl font-extrabold text-gray-800 animate-pulse">Welcome to Next.js Project 0x02!</h1>
      </main>
    </div>
  );
};

export default Home;
