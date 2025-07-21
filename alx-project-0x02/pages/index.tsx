import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex justify-center items-center h-screen">
        <h1 className="text-7xl font-thin">Welcome Page</h1>
      </main>
      <Footer />
    </div>
  )
}

export default Home;
