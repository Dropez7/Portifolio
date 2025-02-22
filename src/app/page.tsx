import React from "react";
import About from "../components/About";

export default function Home() {
  return (
    <>
      {/* Seção “hero” que ocupa a tela toda */}
      <section className="flex flex-col items-center pt-48 w-full h-screen relative z-10">
        <img
          src="/images/PedroH.png"
          alt="Foto de Pedro Henrique"
          className="w-52 h-52 rounded-full mx-auto mb-6 shadow-lg transition-transform duration-300 hover:scale-110"
        />
        <h1 className="text-8xl font-mono text-white">Pedro Henrique</h1>
        <h2 className="text-4xl font-mono text-white">
          Desenvolvedor Full Stack
        </h2>
      </section>

      {/* Seção “Sobre mim” logo abaixo, sem espaçamento lateral */}
      <About />
    </>
  );
}
