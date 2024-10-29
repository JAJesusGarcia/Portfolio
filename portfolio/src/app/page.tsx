'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Mail,
  ExternalLink,
  Linkedin,
  Monitor,
  Github,
  Send,
  MapPin,
} from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import Navbar from '@/components/Navbar/Navbar';
import { projects } from '@/data/projects';

interface Project {
  title: string;
  description: string;
  url: string;
  githubUrl: string;
  technologies: string[];
  image: string; // Añadido campo de imagen
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <main>
        {/* Sección About */}
        <section id="about" className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-8">Sobre Mí</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Image
                src="https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/397476874_2605561982933524_3092439653296046069_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mr7-OMXNBWAQ7kNvgGyqvJM&_nc_zt=23&_nc_ht=scontent-eze1-1.xx&_nc_gid=AKOOiL2uxQ2SHVOmY6dOlNW&oh=00_AYBuKjeHtkiApNWutHzWIbskRn_yNvQbJai4JnIdWGCANg&oe=6725EDD9"
                alt="Perfil"
                width={256}
                height={256}
                className="rounded-full mx-auto object-cover"
                priority
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

        {/* Sección Proyectos Mejorada */}
        <section id="projects" className="py-20 bg-quinary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
              Mis Proyectos
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Una selección de mis trabajos más recientes en desarrollo web y
              aplicaciones
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project: Project, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                    {hoveredIndex === index && (
                      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center space-x-4 transition-opacity duration-300">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                          title="Ver demo"
                        >
                          <Monitor className="w-6 h-6 text-gray-800" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                          title="Ver código"
                        >
                          <Github className="w-6 h-6 text-gray-800" />
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Ver Proyecto
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección Contacto */}
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
                      rows={4}
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
