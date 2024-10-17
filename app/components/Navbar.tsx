import React from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = ['home','wit', 'rood', 'bubbels', 'porto'];

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-green-700 p-4 shadow-md md:flex-col-auto">
      <div className="flex justify-between items-center md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row justify-center space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto`}
      >
        {navItems.map((item) => (
          <li key={item} className="flex-shrink-0">
            <button
              className={`px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 ${
                activeSection === item
                  ? "bg-white text-green-800 shadow-lg"
                  : "text-white hover:bg-green-600"
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
}

export default Navbar;