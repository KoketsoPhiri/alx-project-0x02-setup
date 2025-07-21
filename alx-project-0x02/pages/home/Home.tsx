// pages/home.tsx
import React, { useState } from 'react'; // Import useState
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal'; // Import PostModal
import { PostData } from '@/interfaces'; // Import PostData

const Home: React.FC = () => {
  const initialCards: PostData[] = [ // Changed initial content to match PostData structure
    {
      id: 1,
      title: "What is Next.js?",
      content: "Next.js is a React framework for building full-stack web applications. It enables functionality like server-side rendering and generating static websites."
    },
    {
      id: 2,
      title: "Why TypeScript?",
      content: "TypeScript is a strongly typed superset of JavaScript that adds optional static typing to the language. It helps catch errors early and improves code maintainability."
    },
    {
      id: 3,
      title: "Styling with Tailwind CSS",
      content: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. It provides low-level utility classes that you can use to build any design directly in your markup."
    },
    {
      id: 4,
      title: "Reusable Components",
      content: "Building reusable components like this Card allows for modularity, easier maintenance, and consistent UI across your application. They are the building blocks of React apps."
    }
  ];

  const [cards, setCards] = useState<PostData[]>(initialCards);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: PostData) => {
    // Add new post to the beginning of the array for visibility
    setCards((prevCards) => [newPost, ...prevCards]);
    setIsModalOpen(false); // Close modal after submission
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow flex flex-col items-center p-8"> {/* Removed justify-center here */}
        <div className="flex justify-between items-center w-full max-w-4xl mb-10">
            <h1 className="text-5xl font-semibold text-blue-700 ">Welcome to the Home Page!</h1>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-200"
            >
                Add New Post
            </button>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"> {/* Adjusted max-width and added grid */}
          {cards.map((card) => (
            <Card
              key={card.id} // Use the id from PostData for the key
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <PostModal onClose={() => setIsModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  );
};

export default Home;