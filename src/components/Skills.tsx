import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaReact,
  FaPython,
  FaCss3Alt,
  FaServer,
} from "react-icons/fa";

const Skills = () => {
  return (
    <section className="w-full bg-white text-mblackgray py-28 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-center px-6">
        {/* Lado Esquerdo (Ícones representando habilidades) */}
        <div className="md:flex flex-col items-center space-y-6 hidden">
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <FaCode className="text-4xl text-purple-600" />
              <span className="text-sm text-gray-700 mt-2">HTML</span>
            </div>
            <div className="flex flex-col items-center">
              <FaDatabase className="text-4xl text-indigo-600" />
              <span className="text-sm text-gray-700 mt-2">MySQL</span>
            </div>
            <div className="flex flex-col items-center">
              <FaLaptopCode className="text-4xl text-blue-600" />
              <span className="text-sm text-gray-700 mt-2">Web</span>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-4xl text-cyan-600" />
              <span className="text-sm text-gray-700 mt-2">
                React / Next.js
              </span>
            </div>
            <div className="flex flex-col items-center">
              <FaPython className="text-4xl text-yellow-500" />
              <span className="text-sm text-gray-700 mt-2">Python</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-4xl text-blue-500" />
              <span className="text-sm text-gray-700 mt-2">CSS / Tailwind</span>
            </div>
            <div className="flex flex-col items-center">
              <FaServer className="text-4xl text-green-600" />
              <span className="text-sm text-gray-700 mt-2">Node.js / APIs</span>
            </div>
          </div>
        </div>

        {/* Lado Direito (Texto) */}
        <div className="text-right">
          <h2 className="text-3xl md:text-4xl enfasegradientcian">
            Minhas Habilidades e Tecnologias
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-700">
            Como desenvolvedor full-stack, trabalho com tecnologias modernas
            para criar aplicações eficientes e escaláveis. No front-end, utilizo{" "}
            <span className="enfasegradientcian">React</span> e{" "}
            <span className="enfasegradientcian">Tailwind CSS</span>, enquanto
            no back-end desenvolvo APIs robustas com{" "}
            <span className="enfasegradientcian">Node.js</span> e banco de dados{" "}
            <span className="enfasegradientcian">MySQL</span>.
          </p>
        </div>
      </div>
    </section>

    /* 
      return (
          <section className="w-full bg-[#13132A] py-28 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Habilidades</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "MySQL", "Tailwind CSS"].map((skill, index) => (
                  <div key={index} className="bg-[#1C1C3A] p-4 rounded-xl shadow-md text-white font-semibold text-lg">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </section>
      */
  );
};

export default Skills;
