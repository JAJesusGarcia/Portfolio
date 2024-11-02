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
  MessageCircleMore,
} from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import Navbar from '@/components/Navbar/Navbar';
import { projects } from '@/data/projects';
import ScrollButton from '@/components/ScrollButton/ScrollButton';
import './globals.css';
import Hero from '@/components/Hero/Hero';

interface Project {
  title: string;
  description: string;
  url: string;
  githubUrl: string;
  technologies: string[];
  image: string;
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      console.log('Formulario enviado con éxito');
      alert('Mensaje enviado exitosamente');

      // Limpia el formulario después de enviarlo
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un problema al enviar el mensaje. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        {/* Sección About */}
        <section id="about" className="py-10 bg-secondary ">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-8">Sobre Mí</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Image
                src="https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/397476874_2605561982933524_3092439653296046069_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mr7-OMXNBWAQ7kNvgGyqvJM&_nc_zt=23&_nc_ht=scontent-eze1-1.xx&_nc_gid=AKOOiL2uxQ2SHVOmY6dOlNW&oh=00_AYBuKjeHtkiApNWutHzWIbskRn_yNvQbJai4JnIdWGCANg&oe=6725EDD9"
                alt="Perfil"
                width={300}
                height={300}
                className="rounded-full mx-auto object-cover"
                priority
              />
              <div className="text-quinary">
                <p className="text-xl mb-4">
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

        <hr className="my-20 mx-auto border-primary" style={{ width: '90%' }} />

        {/* Sección Experiencia */}
        <section id="experience" className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-16 text-center">
              Mi Trayectoria Profesional
            </h2>

            <div className="relative">
              {/* Línea vertical central */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

              {/* Teaching Assistant */}
              <div className="mb-16 group">
                <div className="relative flex items-center">
                  {/* Círculo en la línea de tiempo */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>

                  {/* Contenido */}
                  <div className="w-1/2 pr-16 text-right hover:-translate-x-3 transition-transform duration-300 opacity-70 group-hover:opacity-100">
                    <span className="text-primary font-medium inline-block mb-2 border border-primary px-4 py-1 rounded-full text-sm">
                      Agosto 2024 - Actualidad
                    </span>
                  </div>

                  <div className="w-1/2 pl-16 hover:translate-x-3 transition-transform duration-300">
                    <div className="bg-quaternary p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary transform hover:-rotate-1">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Teaching Assistant
                      </h3>
                      <p className="text-tertiary font-medium mb-4">
                        Henry Bootcamp
                      </p>
                      <ul className="text-quinary space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>
                            Coordinar grupos de estudiantes para su adaptación
                            al programa
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>
                            Orientación y resolución de inquietudes en primeras
                            etapas
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>
                            Facilitación de Pair Programming y resolución de
                            ejercicios
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Mejora continua de procesos del Bootcamp</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desarrollador de herramientas */}
              <div className="mb-16 group">
                <div className="relative flex items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>

                  <div className="w-1/2 pr-16 text-right">
                    <div className="bg-quaternary p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-r-4 border-primary transform hover:rotate-1">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Desarrollador de herramientas
                      </h3>
                      <p className="text-tertiary font-medium mb-4">
                        netepscript
                      </p>
                      <ul className="text-quinary space-y-2">
                        <li className="flex items-start gap-2 justify-end">
                          <span>
                            Creación de herramienta de configuración
                            automatizada
                          </span>
                          <span className="text-primary mt-1">•</span>
                        </li>
                        <li className="flex items-start gap-2 justify-end">
                          <span>
                            Integración de ExpressJS, NodeJS y TypeScript
                          </span>
                          <span className="text-primary mt-1">•</span>
                        </li>
                        <li className="flex items-start gap-2 justify-end">
                          <span>Optimización de tiempos de configuración</span>
                          <span className="text-primary mt-1">•</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="w-1/2 pl-16 hover:translate-x-3 transition-transform duration-300 opacity-70 group-hover:opacity-100">
                    <span className="text-primary font-medium inline-block mb-2 border border-primary px-4 py-1 rounded-full text-sm">
                      Proyecto Personal
                    </span>
                  </div>
                </div>
              </div>

              {/* Auxiliar de logística */}
              <div className="mb-16 group">
                <div className="relative flex items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>

                  <div className="w-1/2 pr-16 text-right hover:-translate-x-3 transition-transform duration-300 opacity-70 group-hover:opacity-100">
                    <span className="text-primary font-medium inline-block mb-2 border border-primary px-4 py-1 rounded-full text-sm">
                      Abril 2023 - Actualidad
                    </span>
                  </div>

                  <div className="w-1/2 pl-16">
                    <div className="bg-quaternary p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary transform hover:-rotate-1">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        Auxiliar de logística
                      </h3>
                      <p className="text-tertiary font-medium mb-4">
                        Bitao - Santini
                      </p>
                      <ul className="text-quinary space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Gestión de recepción de mercadería</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Control de almacenamiento e inventario</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Mantenimiento de instalaciones</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Proyectos Mejorada */}
        <section id="projects" className="py-20 bg-quinary/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">
              Mis Proyectos
            </h2>
            <p className="text-quinary text-xl text-center mb-12 max-w-2xl mx-auto">
              Una selección de mis trabajos más recientes en desarrollo web y
              aplicaciones
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project: Project, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col h-full" // Added flex-col and h-full
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

                  <div className="p-6 flex flex-col flex-grow">
                    {' '}
                    {/* Added flex-col and flex-grow */}
                    <div className="flex-grow">
                      {' '}
                      {/* Added wrapper div with flex-grow */}
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <div className="mb-4 mt-auto flex flex-wrap gap-2">
                        {' '}
                        {/* Added wrapper div with mt-auto */}
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto">
                      {' '}
                      {/* Added wrapper div with mt-auto */}
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección Contacto */}
        <section id="contact" className="py-20 px-10 bg-secondary">
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
                      className="w-full p-3 rounded bg-quaternary text-quinary focus:outline-none"
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
                    href="https://www.linkedin.com/in/jesusjagarcia/"
                    className="text-tertiary hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={32} />
                  </a>
                  <a
                    href="https://github.com/JAJesusGarcia"
                    className="text-tertiary hover:text-primary transition-colors"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={32} />
                  </a>
                  <a
                    href="mailto:jesusjagarcia98@gmail.com"
                    className="text-tertiary hover:text-primary transition-colors"
                    aria-label="Email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail size={32} />
                  </a>
                  <a
                    href="https://wa.me/3416153479"
                    className="text-tertiary hover:text-primary transition-colors"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircleMore size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ScrollButton />
      </main>
    </div>
  );
};

export default Portfolio;
