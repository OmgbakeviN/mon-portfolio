import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-purple-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo et liens principaux */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                MonPortfolio
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-purple-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Accueil
                </Link>
                <Link
                  to="/projets"
                  className="text-gray-300 hover:bg-purple-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Projets
                </Link>
                <Link
                  to="/a-propos"
                  className="text-gray-300 hover:bg-purple-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  À propos
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:bg-purple-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Bouton pour mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-800 focus:outline-none transition duration-300"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-300 hover:bg-purple-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Accueil
            </Link>
            <Link
              to="/projets"
              className="text-gray-300 hover:bg-purple-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Projets
            </Link>
            <Link
              to="/a-propos"
              className="text-gray-300 hover:bg-purple-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              À propos
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:bg-purple-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;