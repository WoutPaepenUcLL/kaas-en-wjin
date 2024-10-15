import React from 'react';

interface Wine {
  name: string;
  description: string;
}

interface WineSectionProps {
  wines: Wine[];
}

const WineSection: React.FC<WineSectionProps> = ({ wines }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:">
      {wines.map((wine, index) => (
        <div 
          key={index} 
          className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-lg wine-card"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-2">{wine.name}</h2>
          <p className="text-gray-600">{wine.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WineSection;