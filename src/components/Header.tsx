import React from "react";

export default function Header() {
    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="w-full py-4 relative z-10 text-white">
            <div className="max-w-screen-lg mx-auto flex justify-between items-center px-6">
                <h1
                    className="text-xl md:text-base font-bold"
                    onClick={() => handleScroll("hero")}
                >
                    Pedro H. S.
                </h1>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6 flex-wrap">
                        <li>
                            <button
                                onClick={() => handleScroll("about")}
                                className="hover:text-gray-400 text-sm md:text-base"
                            >
                                Sobre
                            </button>
                        </li>
                         <li>
                            <button
                                onClick={() => handleScroll("skills")}
                                className="hover:text-gray-400 text-sm md:text-base"
                            >
                                Skills
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleScroll("projects-all")}
                                className="hover:text-gray-400 text-sm md:text-base"
                            >
                                Projetos
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleScroll("contact")}
                                className="hover:text-gray-400 text-sm md:text-base"
                            >
                                Contato
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
