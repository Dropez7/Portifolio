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
          <div className="flex flex-col items-center space-y-6">
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: FaCode, label: "HTML", color: "text-purple-600" },
                { icon: FaDatabase, label: "MySQL", color: "text-indigo-600" },
                { icon: FaLaptopCode, label: "Web", color: "text-blue-600" },
                { icon: FaReact, label: "React / Next.js", color: "text-cyan-600" },
                { icon: FaPython, label: "Python", color: "text-yellow-500" },
                { icon: FaCss3Alt, label: "CSS / Tailwind", color: "text-blue-500" },
                { icon: FaServer, label: "Node.js / APIs", color: "text-green-600" },
              ].map(({ icon: Icon, label, color }, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Icon className={`text-4xl ${color}`} />
                  <span className="text-sm text-gray-700 mt-2">{label}</span>
                </div>
              ))}
            </div>
          </div>
  
          {/* Lado Direito (Texto) */}
          <div className="text-right">
            <h2 className="text-3xl md:text-4xl enfasegradientcian">
              Minhas Habilidades e Tecnologias
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-700">
              Como desenvolvedor full-stack, trabalho com tecnologias modernas para criar aplicações eficientes e escaláveis. 
              No front-end, utilizo <span className="enfasegradientcian">React</span> e <span className="enfasegradientcian">Tailwind CSS</span>, enquanto no back-end desenvolvo APIs robustas com <span className="enfasegradientcian">Node.js</span> e banco de dados <span className="enfasegradientcian">MySQL</span>.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  