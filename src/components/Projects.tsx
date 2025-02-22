import {
    FaCode,
    FaDatabase,
    FaLaptopCode,
    FaReact,
    FaPython,
    FaCss3Alt,
    FaServer,
} from "react-icons/fa";
import Image from "next/image";

const Projects = () => {
    return (
        <>
            <Image
                src="/images/hero-devices.svg"
                width={1050}
                height={150}
                alt="PC"
                className="relative z-10 mt-32 mx-auto block"
            />
            <section className="w-full bg-white text-mpurple py-28 relative z-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-center px-6">
                    {/* Lado Esquerdo (Ícones representando habilidades) */}
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
                                <span className="text-sm text-gray-700 mt-2">
                                    Banco de Dados
                                </span>
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
                                <span className="text-sm text-gray-700 mt-2">
                                    CSS / Tailwind
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaServer className="text-4xl text-green-600" />
                                <span className="text-sm text-gray-700 mt-2">
                                    Node.js / APIs
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Lado Direito (Texto) */}
                    <div className="text-right">
                        <h2 className="text-3xl md:text-4xl enfasegradientpurple">
                            Minhas Habilidades e Tecnologias
                        </h2>
                        <p className="mt-4 text-base md:text-lg text-gray-700">
                            Sou um desenvolvedor full-stack com experiência em diversas
                            tecnologias. Ao longo da minha trajetória, aprimorei minhas
                            habilidades tanto na parte de front-end quanto back-end, sempre
                            buscando soluções inovadoras e eficientes. Tenho trabalhado com{" "}
                            <span className="enfasegradientpurple">JavaScript</span> no front-end e
                            com <span className="enfasegradientpurple">Node.js</span> para
                            desenvolvimento de APIs e servidores.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
