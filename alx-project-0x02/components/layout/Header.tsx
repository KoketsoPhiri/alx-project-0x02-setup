import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h3 className="font-bold text-2xl">
          <Link href="/">
            <span className="cursor-pointer hover:text-blue-200 transition-colors duration-200">My Next.js App</span>
          </Link>
        </h3>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/home">
                <span className="cursor-pointer hover:underline hover:text-blue-200 transition-colors duration-200">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="cursor-pointer hover:underline hover:text-blue-200 transition-colors duration-200">About</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;