'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import WineSection from './WineSection';
import { wines } from '../public/wines';

const WineEvening: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('white');

  //get wines from ./public/data/wines.json

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8 animate-fade-in">
          Welcome to Our Cheese & Wine Evening
        </h1>
        <WineSection wines={wines[activeSection as keyof typeof wines]} />
      </main>
    </div>
  );
};

export default WineEvening;