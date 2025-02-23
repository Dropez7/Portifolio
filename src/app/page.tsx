import React from "react";
import About from "../components/About";
import Image from "next/image";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full backintroduction">
        <Header />

        <section className="flex flex-col items-center pt-48 w-full">
          <div className="relative z-10 h-screen text-center">
            <Image
              src="/images/PedroH.png"
              alt="Foto de Pedro Henrique"
              className="w-52 h-52 rounded-full mx-auto mb-6 shadow-lg transition-transform duration-300 hover:scale-110"
              width={208}
              height={208}
            />
            <h1 className="text-8xl font-mono text-white">Pedro Henrique</h1>
            <h2 className="text-4xl font-mono text-white">
              Desenvolvedor Full Stack
            </h2>
          </div>
        </section>
      </div>

      {/* Seção “Sobre mim” */}
      <div className="hidden" id="about"></div> 
      <About />

      {/* Seção “Habilidades” */}
      <div className="hidden" id="skills"></div> 
      <Skills />

      {/* Seção “Projetos” */}
      <div className="hidden" id="projects"></div> 
      <Projects />
    </>
  );
}
