import Image from "next/image";
import {
    FaReact,
    FaJsSquare,
    FaGithub,
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaDatabase,
} from "react-icons/fa";
import { SiAxios } from "react-icons/si";

const Projects = () => {
    return (
        <>
            <div className="bg-white ">
                <Image
                    src="/images/hero-devices.svg"
                    width={1050}
                    height={150}
                    alt="PC"
                    className="relative z-10 pt-12 mx-auto block"
                />
            </div>
            <div id="projects">
                <section className="w-full bg-[#0A0A1E] py-28 px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-white mb-12">
                            Projetos
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-[#13132A] rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
                                <Image
                                    src="/images/AgendaLab.PNG"
                                    width={400}
                                    height={200}
                                    alt="Smart Campus"
                                    className="rounded-t-lg mb-8 h-60 w-full object-cover"
                                />

                                <h3 className="text-4xl font-semibold text-cyan-400">
                                    Smart Campus
                                </h3>
                                <p className="text-gray-300 mt-2 px-8">
                                    Sistema para otimização do uso do
                                    laboratório de informática da UFRRJ,
                                    permitindo que os alunos agendem
                                    computadores com antecedência e visualizem a
                                    disponibilidade em tempo real.
                                </p>
                                <div className="flex justify-center items-center space-x-4 mt-4 text-2xl">
                                    <FaHtml5 className="text-blue-500" />
                                    <FaCss3 className="text-yellow-500" />
                                    <FaJsSquare className="text-yellow-500" />
                                    <FaNodeJs className="text-green-500" />
                                    <FaDatabase className="text-indigo-500" />
                                    <FaGithub className="text-white" />
                                </div>

                                <div className="flex flex-col justify-center items-center my-6">
                                    <a
                                        href="https://www.dcc.ufrrj.br/agendalab/agendamento"
                                        className="enfasegradientcian mt-4 inline-block hover:underline"
                                    >
                                        Acessar Site
                                    </a>
                                    <a
                                        href="https://github.com/Dropez7/Agendamento-Lab"
                                        className="text-purple-500 mt-4 inline-block hover:underline"
                                    >
                                        Ver mais
                                    </a>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#13132A] rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
                                <Image
                                    src="/images/consumer.PNG"
                                    width={400}
                                    height={200}
                                    alt="Consumer API"
                                    className="rounded-t-lg mb-8 h-60 w-full object-cover"
                                />
                                <h3 className="text-4xl font-semibold text-cyan-400">
                                    React Web API Consumer
                                </h3>
                                <p className="text-gray-300 mt-2">
                                    Projeto desenvolvido em React para consumir
                                    APIs RESTfull criada por mim de forma
                                    simples e eficiente. A aplicação permite a
                                    interação com dados externos de maneira
                                    dinâmica e moderna.
                                </p>
                                <div className="flex justify-center items-center space-x-4 mt-4 text-2xl">
                                    <FaHtml5 className="text-blue-500" />
                                    <FaReact className="text-blue-500" />
                                    <FaJsSquare className="text-yellow-500" />
                                    <FaDatabase className="text-indigo-500" />
                                    <SiAxios className="text-gray-500" />
                                    <FaGithub className="text-white" />
                                </div>
                                <div className="flex flex-col justify-center items-center my-6">
                                    <a
                                        href="https://github.com/Dropez7/React-SIMPLE-API-Consumer/tree/main"
                                        className="text-purple-500 mt-4 inline-block hover:underline"
                                    >
                                        Ver mais
                                    </a>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-[#13132A] rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
                                <Image
                                    src="/images/api.png"
                                    width={400}
                                    height={200}
                                    alt="API RESTful"
                                    className="rounded-t-lg mb-8 h-60 w-full object-cover"
                                />
                                <h3 className="text-4xl font-semibold text-cyan-400">
                                    RESTfull API Implementation
                                </h3>
                                <p className="text-gray-300 mt-2 px-8">
                                    API RESTfull simples construída com Node.js
                                    e Express. Ela oferece uma implementação
                                    básica de métodos como GET, POST, PUT e
                                    DELETE para gerenciamento de dados.
                                </p>
                                <div className="flex justify-center items-center space-x-4 mt-4 text-2xl">
                                    <FaNodeJs className="text-green-500" />
                                    <FaGithub className="text-white" />
                                </div>
                                <div className="flex flex-col justify-center items-center my-6">
                                    <a
                                        href="https://github.com/Dropez7/Simple-REST-API-Implementation"
                                        className="text-purple-500 mt-4 inline-block hover:underline"
                                    >
                                        Ver mais
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Projects;
