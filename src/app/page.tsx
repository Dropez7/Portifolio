"use client";
import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
    return (
        <>

            {/* Seção “Hero” */}
            <div className="h-screen w-full backintroduction" id="hero">
                <Header />
                <Hero />
            </div>

            {/* Seção “Sobre mim” */}
            <div id="about">
                <About />
            </div>

            {/* Seção “Habilidades” */}
            <div id="skills">
                <Skills />
            </div>

            {/* Seção “Projetos” */}
            <div id="projects-all">
                <Projects />
            </div>

            {/* Seção “Contato” */}
            <div id="contact">
                <Contact />
            </div>
        </>
    );
}
