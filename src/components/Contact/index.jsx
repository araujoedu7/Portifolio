import React from "react";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"; // Ícones

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16 h-[100vh]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Meus Contatos
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Fique à vontade para entrar em contato comigo através de qualquer uma das plataformas abaixo.
        </p>
        
        <div className="flex justify-center space-x-8">
          {/* WhatsApp */}
          <a
            href="https://wa.me/85997394310" // Insira seu número com o código do país, ex: https://wa.me/5511999999999
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-500 transition duration-300 text-5xl"
          >
            <FaWhatsapp />
          </a>
          
          {/* E-mail */}
          <a
            href="mailto:ea144027@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-red-500 transition duration-300 text-5xl"
          >
            <FaEnvelope />
          </a>
          
          {/* Instagram */}
          <a
            href="https://www.instagram.com/e.araujo07/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition duration-300 text-5xl"
          >
            <FaInstagram />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/araujoedu7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition duration-300 text-5xl"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/eduardo-araujo-7435441b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition duration-300 text-5xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
