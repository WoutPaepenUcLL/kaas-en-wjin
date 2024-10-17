import React from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = ['home','wit', 'rood', 'bubbels'];

  return (
    <nav className="bg-green-700 p-4 shadow-md">
      <ul className="flex flex-row-auto  justify-center space-x-4 md:flex-col-auto">
        {navItems.map((item) => (
          <li key={item}>
            <button
              className={`px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 ${
                activeSection === item
                  ? 'bg-white text-green-800 shadow-lg'
                  : 'text-white hover:bg-green-600'
              }`}
              onClick={() => setActiveSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;