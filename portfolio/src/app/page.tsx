'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import DynamicMap from '../components/Map/DynamicMap';
import Navbar from '@/components/Navbar/Navbar';
import { projects } from '@/data/projects';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Portfolio = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica para enviar los datos o realizar otras acciones
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <main>
        <section id="about" className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-8">Sobre Mí</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Image
                src="https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/304970106_2285404571615935_6407519061097785495_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=ss--6N68wGkQ7kNvgF3dWGN&_nc_zt=23&_nc_ht=scontent-eze1-1.xx&_nc_gid=ALBgcKTZKglHSi4mea4Mi0W&oh=00_AYA680cyN74d4OY2zlo5OTLnmBjFbDvGB7Y3NPsUtoggcw&oe=671DCD36"
                alt="Profile"
                width={256}
                height={256}
                className="rounded-full mx-auto object-cover"
              />
              <div className="text-quinary">
                <p className="text-lg mb-4">
                  Soy un desarrollador web apasionado por crear soluciones
                  innovadoras y experiencias digitales únicas. Con experiencia
                  en tecnologías modernas como React, Next.js y Tailwind CSS, me
                  especializo en construir aplicaciones web responsivas y
                  eficientes.
                </p>
                <p className="text-lg">
                  Ubicado en Rosario, Santa Fe, Argentina, siempre estoy
                  buscando nuevos desafíos y oportunidades para crecer
                  profesionalmente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-quaternary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-12">
              Mis Proyectos
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-tertiary mb-4">{project.description}</p>
                    <a
                      href={project.url}
                      className="inline-block bg-primary text-secondary font-bold py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
                    >
                      Ver Proyecto
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-12">Contacto</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl text-primary mb-6">
                  Envíame un mensaje
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Nombre
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      className="w-full p-3 rounded bg-quaternary text-quinary"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full p-3 rounded bg-quaternary text-quinary"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Mensaje"
                      className="w-full p-3 rounded bg-quaternary text-quinary"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-secondary px-6 py-3 rounded flex items-center gap-2 hover:bg-opacity-90 transition-colors"
                  >
                    Enviar Mensaje
                    <Send size={20} />
                  </button>
                </form>
              </div>

              <div>
                <h3 className="text-2xl text-primary mb-6">Ubicación</h3>
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-tertiary mb-2">
                    <MapPin className="text-primary" />
                    <span>Rosario, Santa Fe, Argentina</span>
                  </div>
                  <DynamicMap />
                </div>

                <h3 className="text-2xl text-primary mb-4">Redes Sociales</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-tertiary hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={32} />
                  </a>
                  <a
                    href="#"
                    className="text-tertiary hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={32} />
                  </a>
                  <a
                    href="mailto:tu@email.com"
                    className="text-tertiary hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
