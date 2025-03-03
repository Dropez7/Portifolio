import React from "react";

export default function Header() {
    return (
        <header className="w-full py-4 relative z-10 text-white">
            <div className="max-w-screen-lg mx-auto flex justify-between items-center px-6">
                <h1 className="text-xl md:text-base font-bold">Pedro H. S.</h1>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6 flex-wrap">
                        <li>
                            <a
                                href="#"
                                className="hover:text-gray-400 text-sm md:text-base"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="about"
                                className="hover:text-gray-400 text-sm md:text-base"
                            >
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a
                                href="projects"
                                className="hover:text-gray-400 text-sm md:text-base"
                            >
                                Projetos
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-gray-400 text-sm md:text-base"
                            >
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
