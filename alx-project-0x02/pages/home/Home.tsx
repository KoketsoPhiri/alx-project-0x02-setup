// pages/home.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card'; // Import the Card component

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-semibold text-blue-700 mb-10">Welcome to the Home Page!</h1>

        {/* Container for Cards */}
        <div className="flex flex-wrap justify-center gap-6"> {/* Added gap for spacing */}
          <Card
            title="What is Next.js?"
            content="Next.js is a React framework for building full-stack web applications. It enables functionality like server-side rendering and generating static websites."
          />
          <Card
            title="Why TypeScript?"
            content="TypeScript is a strongly typed superset of JavaScript that adds optional static typing to the language. It helps catch errors early and improves code maintainability."
          />
          <Card
            title="Styling with Tailwind CSS"
            content="Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. It provides low-level utility classes that you can use to build any design directly in your markup."
          />
          <Card
            title="Reusable Components"
            content="Building reusable components like this Card allows for modularity, easier maintenance, and consistent UI across your application. They are the building blocks of React apps."
          />
        </div>
      </main>
    </div>
  );
};

export default Home;