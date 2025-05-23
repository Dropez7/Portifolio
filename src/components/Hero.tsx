import React from "react";
import Image from "next/image";

export default function Hero() {

    return (
        <section className="flex flex-col items-center justify-center min-h-screen w-full">
            <div className="relative z-10 text-center">
                <Image
                    src="/images/PedroH.png"
                    alt="Foto de Pedro Henrique"
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full mx-auto mb-6 shadow-lg transition-transform duration-300 hover:scale-110"
                    width={208}
                    height={208}
                    priority
                />
                <h1 className="md:text-8xl text-4xl font-mono text-white">
                    Pedro Henrique
                </h1>
                <h2 className="md:text-4xl text-xl font-mono text-white">
                    Desenvolvedor FullStack
                </h2>
            </div>
        </section>
    );
}
