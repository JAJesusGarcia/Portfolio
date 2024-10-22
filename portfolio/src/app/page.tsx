'use client';

import Navbar from '@/components/Navbar/Navbar';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import React, { useState } from 'react';

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const projects = [
    {
      title: 'Proyecto Integrador M1 - Henry',
      description: 'Java Script',
      image:
        'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010129.jpg?t=st=1729629640~exp=1729633240~hmac=4fb36ac98ee4e0b0973318671044b6e05c6837762d92b0160c0e4127bafb8749&w=826',
      url: '#',
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción breve del proyecto 2',
      image:
        'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010129.jpg?t=st=1729629640~exp=1729633240~hmac=4fb36ac98ee4e0b0973318671044b6e05c6837762d92b0160c0e4127bafb8749&w=826',
      url: '#',
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción breve del proyecto 3',
      image:
        'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010129.jpg?t=st=1729629640~exp=1729633240~hmac=4fb36ac98ee4e0b0973318671044b6e05c6837762d92b0160c0e4127bafb8749&w=826',
      url: '#',
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción breve del proyecto 3',
      image:
        'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010129.jpg?t=st=1729629640~exp=1729633240~hmac=4fb36ac98ee4e0b0973318671044b6e05c6837762d92b0160c0e4127bafb8749&w=826',
      url: '#',
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción breve del proyecto 3',
      image:
        'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010129.jpg?t=st=1729629640~exp=1729633240~hmac=4fb36ac98ee4e0b0973318671044b6e05c6837762d92b0160c0e4127bafb8749&w=826',
      url: '#',
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción breve del proyecto 3',
      image:
        'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010129.jpg?t=st=1729629640~exp=1729633240~hmac=4fb36ac98ee4e0b0973318671044b6e05c6837762d92b0160c0e4127bafb8749&w=826',
      url: '#',
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-8">Sobre Mí</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/304970106_2285404571615935_6407519061097785495_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=ss--6N68wGkQ7kNvgF3dWGN&_nc_zt=23&_nc_ht=scontent-eze1-1.xx&_nc_gid=ALBgcKTZKglHSi4mea4Mi0W&oh=00_AYA680cyN74d4OY2zlo5OTLnmBjFbDvGB7Y3NPsUtoggcw&oe=671DCD36"
              alt="Profile"
              className="rounded-full w-64 h-64 mx-auto object-cover"
            />
            <div className="text-quinary">
              <p className="text-lg mb-4">
                Soy un desarrollador web apasionado por crear soluciones
                innovadoras y experiencias digitales únicas. Con experiencia en
                tecnologías modernas como React, Next.js y Tailwind CSS, me
                especializo en construir aplicaciones web responsivas y
                eficientes.
              </p>
              <p className="text-lg">
                Ubicado en Rosario, Santa Fe, Argentina, siempre estoy buscando
                nuevos desafíos y oportunidades para crecer profesionalmente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
                <img
                  src={project.image}
                  alt={project.title}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-12">Contacto</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl text-primary mb-6">Envíame un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full p-3 rounded bg-quaternary text-quinary"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded bg-quaternary text-quinary"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Mensaje"
                    className="w-full p-3 rounded bg-quaternary text-quinary"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
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
                {/* Aquí iría el componente del mapa */}
                <div className="w-full h-64 bg-quaternary rounded">
                  {/* Placeholder para el mapa */}
                </div>
              </div>

              <h3 className="text-2xl text-primary mb-4">Redes Sociales</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-tertiary hover:text-primary transition-colors"
                >
                  <Linkedin size={32} />
                </a>
                <a
                  href="#"
                  className="text-tertiary hover:text-primary transition-colors"
                >
                  <Github size={32} />
                </a>
                <a
                  href="mailto:tu@email.com"
                  className="text-tertiary hover:text-primary transition-colors"
                >
                  <Mail size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
