// pages/index.tsx
'use client'
import { useState } from 'react';
import Navbar from './components/Navbar';
import WineSection from './components/WineSection';
import {wines} from './public/wines';


const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8 animate-fade-in">
          Welkom bij onze wijnproeverij
        </h1>
        {
          activeSection !== 'home' ? <WineSection wines={wines[activeSection as keyof typeof wines]} /> : <>
            <h2 className="text-2xl font-semibold text-green-800 mb-2">Start met zoeken door de wijnen:</h2>
            {/* a grid with 3 buttons white wine, red wine and bubbles that when clicked sets activeSection to the respective page and appears with a nice animation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button 
              onClick={() => setActiveSection('white')} 
              className="bg-green-800 text-white p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
              Witte wijn
              </button>
              <button 
              onClick={() => setActiveSection('red')} 
              className="bg-green-800 text-white p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
              Rode wijn
              </button>
              <button 
              onClick={() => setActiveSection('bubbles')} 
              className="bg-green-800 text-white p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
              Bubbels
              </button>
            </div>
          </>
        }
        
      </main>
    </div>
    </>
  );
};

export default Home;



