import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-gray-100 min-h-screen flex items-center justify-center"
    >
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Olá, eu sou <span className="text-blue-600">Eduardo Araújo</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Sou desenvolvedor de software focado em criar experiências digitais
          incríveis. Explore meus projetos e entre em contato para discutirmos
          como posso ajudar em seu próximo projeto.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-900 transition duration-300"
          >
            Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
