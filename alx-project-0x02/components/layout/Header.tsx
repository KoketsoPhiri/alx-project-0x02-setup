// components/layout/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-purple-800 text-white shadow-lg py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <h3 className="font-bold text-3xl mb-3 sm:mb-0">
          <Link href="/">
            <span className="cursor-pointer hover:text-blue-200 transition-colors duration-200">
              MyApp
            </span>
          </Link>
        </h3>
        <nav>
          <ul className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6 text-lg">
            <li>
              <Link href="/home">
                <span className="cursor-pointer hover:underline hover:text-blue-200 transition-colors duration-200">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="cursor-pointer hover:underline hover:text-blue-200 transition-colors duration-200">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <span className="cursor-pointer hover:underline hover:text-blue-200 transition-colors duration-200">
                  Posts
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;