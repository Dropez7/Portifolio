import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário (ex.: integração com API)
    console.log(formData);
    alert("Mensagem enviada!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="w-full bg-[#0A0A1E] py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Contato</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-6 max-w-md mx-auto"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
            className="w-full p-3 rounded-lg bg-[#13132A] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-mcian"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu email"
            className="w-full p-3 rounded-lg bg-[#13132A] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-mcian"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Sua mensagem"
            className="w-full p-3 rounded-lg bg-[#13132A] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-mcian"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="mt-4 px-8 py-3 bg-mcian text-black font-semibold rounded-lg hover:bg-opacity-90 transition"
          >
            Enviar Mensagem
          </button>
        </form>
        <div className="mt-12">
          <p className="text-gray-400">Você também pode me encontrar em:</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com/Dropez7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-mcian transition"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-mcian transition"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
