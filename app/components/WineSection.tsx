import React from 'react';

interface Wine {
  name: string;
  description: string;
  kroonjuweel?: boolean;
}

interface WineSectionProps {
  wines: Wine[];
}

const WineSection: React.FC<WineSectionProps> = ({ wines }) => {
  const [expandedIndexes, setExpandedIndexes] = React.useState<number[]>([]);
  const toggleDescription = (index: number) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((i) => i !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };
  return (
    <div className="grid md:grid-cols-2 gap-8 md:">
      {wines.map((wine, index) => (
      <div 
        key={index} 
        className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-lg wine-card"
      >
        <h2 className="text-2xl font-semibold text-green-800 mb-2 flex justify-between items-center">
        {wine.name}
        <button onClick={() => toggleDescription(index)} className="focus:outline-none">
          <svg
          className={`w-6 h-6 transition-transform duration-300 ${expandedIndexes.includes(index) ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        </h2>
        {wine.kroonjuweel && (
          <p className="text-gray-800 font-semibold">(Kroonjuweel)</p>
        )}
        <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${expandedIndexes.includes(index) ? 'max-h-96' : 'max-h-0'}`}
        >
        <p className="text-gray-600">{wine.description}</p>
        </div>
      </div>
      ))}
    </div>
      )}
  
  


export default WineSection;