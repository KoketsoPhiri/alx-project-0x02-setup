// pages/about.tsx
import React from 'react';
import Header from '@/components/layout/Header'; // Ensure this line is present
import Button from '@/components/common/Button';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header /> {/* Header component rendered here */}
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-semibold text-green-700 mb-10">About Us Page</h1>

        <p className="text-lg text-gray-700 max-w-2xl text-center mb-8">
          This application demonstrates core Next.js features, including routing, reusable components, and interactive UI elements.
          We are committed to building robust and scalable web solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Button size="small" shape="rounded-sm" onClick={() => alert('Small button clicked!')}>
            Small Button
          </Button>
          <Button size="medium" shape="rounded-md" onClick={() => alert('Medium button clicked!')}>
            Medium Button
          </Button>
          <Button size="large" shape="rounded-full" onClick={() => alert('Large button clicked!')}>
            Large Button
          </Button>
        </div>
      </main>
    </div>
  );
};

export default About;