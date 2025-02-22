import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Desenvolvedor Full Stack | React | Next.js | Tailwind",
  keywords: "React, Next.js, Tailwind, Front-end, Web Development",
  openGraph: {
    title: "Meu Portfólio",
    description: "Confira meus projetos e habilidades.",
    siteName: "Meu Portfólio",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">
      <body className="font-sans text-gray-900 bg-gray-900 flex flex-col">
        <main className="backintroduction flex-grow">
        <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
