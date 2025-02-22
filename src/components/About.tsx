import {
  FaCode,
  FaDatabase,
  FaGlobe,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="w-full bg-white text-mpurple py-28 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-center px-6">
        {/* Lado esquerdo (Texto) */}
        <div>
          <h1 className="text-4xl md:text-5xl enfasegradientpurple">
            Desenvolver software não é só sobre código, é sobre criar
            oportunidades e concretizar sonhos.
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700">
            Sou desenvolvedor full-stack, apaixonado por tecnologia e inovação.
            Com uma base sólida em Ciência da Computação e experiência prática
            em tecnologias modernas (JavaScript, TypeScript, React, Next.js,
            entre outras), crio experiências digitais que conectam pessoas e
            ideias.
          </p>
          <p className="mt-4 text-base md:text-lg text-gray-700">
            Acredito que a tecnologia deve servir como ponte entre ideias e
            soluções reais. Meu objetivo é criar softwares que simplificam
            processos, conectam pessoas e tornam o dia a dia mais eficiente.
          </p>
        </div>

        {/* Lado direito (Ícones e imagens) */}
        <div className="flex flex-col items-center space-y-6">
          {/* Ícones representando habilidades */}
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <FaCode className="text-4xl text-purple-600" />
              <span className="text-sm text-gray-700 mt-2">
                Desenvolvimento
              </span>
            </div>
            <div className="flex flex-col items-center">
              <FaDatabase className="text-4xl text-indigo-600" />
              <span className="text-sm text-gray-700 mt-2">Banco de Dados</span>
            </div>
            <div className="flex flex-col items-center">
              <FaGlobe className="text-4xl text-blue-600" />
              <span className="text-sm text-gray-700 mt-2">Web</span>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-4xl text-green-600" />
              <span className="text-sm text-gray-700 mt-2">Conexão</span>
            </div>
            <div className="flex flex-col items-center">
              <FaLightbulb className="text-4xl text-yellow-500" />
              <span className="text-sm text-gray-700 mt-2">Inovação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;