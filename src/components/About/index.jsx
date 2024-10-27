import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Sobre Mim
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          {/* Imagem */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://via.placeholder.com/400x400" 
              alt="Minha Foto"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

     
          <div className="w-full md:w-1/2 md:pl-8">
            <p className="text-lg text-gray-600 mb-4">
              Olá! Meu nome é <strong>Eduardo Araújo</strong> e sou desenvolvedor(a) de software. Com uma paixão por tecnologia e inovação, venho trabalhando para criar soluções digitais que facilitam a vida das pessoas e empresas.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Minha experiência inclui o desenvolvimento de aplicações web modernas utilizando tecnologias como <strong>React</strong>, <strong>Node.js</strong>, e <strong>Tailwind CSS</strong>. Tenho interesse em aprender e explorar novas tecnologias que ajudem a melhorar a experiência do usuário e a performance das aplicações.
            </p>
            <p className="text-lg text-gray-600">
              Atualmente, estou buscando novas oportunidades onde eu possa aplicar minhas habilidades e colaborar com equipes inovadoras para criar produtos incríveis. Sinta-se à vontade para explorar meus projetos e entrar em contato!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
