import React from "react";

export default function Header() {
  return (
    <header className="w-full py-4 relative z-10 text-white">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">Meu Portfólio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Projetos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
