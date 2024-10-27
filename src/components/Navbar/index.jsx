import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Verifica o localStorage para a preferência de modo escuro
    const savedMode = localStorage.getItem("dark-mode");
    return savedMode === "true";
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    localStorage.setItem("dark-mode", !darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
             Eduardo <spam className="text-blue-600"> Araújo</spam>
            </a>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition duration-300"
            >
              Início
            </a>
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition duration-300"
            >
              Sobre
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition duration-300"
            >
              Projetos
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition duration-300"
            >
              Contato
            </a>
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300  transition duration-300"
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
          </div>
          {/* Menu Mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-200 focus:outline-none"
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
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu para Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <a
            href="/"
            className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Início
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Sobre
          </a>
          <a
            href="#projects"
            className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Projetos
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contato
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
