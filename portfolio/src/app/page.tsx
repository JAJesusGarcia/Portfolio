"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Mail,
  ExternalLink,
  Linkedin,
  Monitor,
  Github,
  Send,
  MapPin,
  MessageCircleMore,
} from "lucide-react";
import "leaflet/dist/leaflet.css";
import Navbar from "@/components/Navbar/Navbar";
import { projects } from "@/data/projects";
import ScrollButton from "@/components/ScrollButton/ScrollButton";
import "./globals.css";
import Hero from "@/components/Hero/Hero";
import TechStack from "@/components/TechStack/TechStack";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Experience from "@/components/Experience/Experiencie";
import ExperienceMobile from "@/components/Experience/ExperienceMobile";
import Footer from "@/components/Footer/Footer";
import TechStack2 from "@/components/TechStack/TechStack2";
// import AnimatedCounter from "@/components/counted/animatedCounted";

const MySwal = withReactContent(Swal);

const showAlert = (
  message: string | React.ReactNode,
  icon: "success" | "error" | "warning" | "info",
  callback?: () => void,
) => {
  MySwal.fire({
    html: <p>{message}</p>,
    icon: icon,
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
    willClose: () => {
      if (callback) {
        callback();
      }
    },
  });
};

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
    name: "",
    email: "",
    message: "",
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

    // Validar que formData tenga la información necesaria
    if (!formData.name || !formData.email || !formData.message) {
      showAlert("Por favor completa todos los campos", "error");
      return;
    }

    try {
      // Verifica que la URL de la API esté configurada
      if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error("La URL de la API no está configurada");
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      console.log("Formulario enviado con éxito");
      showAlert("Mensaje enviado exitosamente", "success");

      // Limpia el formulario después de enviarlo
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      showAlert(
        "Hubo un problema al enviar el mensaje. Inténtalo de nuevo",
        "error",
      );
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // o el breakpoint que prefieras
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        {/* Sección About */}
        <section id="about" className="bg-secondary py-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-4xl font-bold text-primary">Sobre Mí</h2>
            <div className="grid items-center gap-8 md:grid-cols-2">
              <Image
                src="/imge/profilePhoto.webp"
                alt="Perfil"
                width={300}
                height={300}
                className="mx-auto rounded-full object-cover"
                priority
              />
              <div className="text-quinary">
                <p className="mb-4 text-xl">
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
                {/* <br />
                <br />
                <br /> */}
                {/* <div className="mt-8 flex items-center justify-center gap-4 text-2xl font-semibold text-primary">
                  <Github size={32} className="text-primary" />
                  <AnimatedCounter targetNumber={990} />
                  <span className="ml-2 text-quinary">
                    Contributions in the last year
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <hr className="mx-auto my-20 border-primary" style={{ width: "90%" }} />

        {/* Sección Experiencia */}
        <section>{isMobile ? <ExperienceMobile /> : <Experience />}</section>

        {/* Sección Proyectos Mejorada */}
        <section id="projects" className="bg-quinary/10 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold text-primary">
              Mis Proyectos
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-xl text-quinary">
              Una selección de mis trabajos más recientes en desarrollo web y
              aplicaciones
            </p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project: Project, index: number) => (
                <div
                  key={index}
                  className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
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
                    <div
                      className={`absolute inset-0 flex items-center justify-center space-x-4 bg-black/60 transition-opacity duration-300 ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white p-2 transition-colors hover:bg-gray-100"
                        title="Ver demo"
                      >
                        <Monitor className="size-6 text-gray-800" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white p-2 transition-colors hover:bg-gray-100"
                        title="Ver código"
                      >
                        <Github className="size-6 text-gray-800" />
                      </a>
                    </div>
                  </div>

                  <div className="flex grow flex-col p-6">
                    <div className="grow">
                      <h3 className="mb-2 text-xl font-bold text-gray-800">
                        {project.title}
                      </h3>
                      <p className="mb-4 text-gray-600">
                        {project.description}
                      </p>
                      <div className="mb-4 mt-auto flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
                      >
                        Ver Proyecto
                        <ExternalLink className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          {/* <TechStack /> */}
          <TechStack2 />
        </section>

        {/* Sección Contacto */}
        <section id="contact" className="bg-secondary px-10 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-4xl font-bold text-primary">Contacto</h2>
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl text-primary">
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
                      className="w-full rounded bg-quaternary p-3 text-quinary focus:outline-none"
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
                      className="w-full rounded bg-quaternary p-3 text-quinary"
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
                      className="w-full rounded bg-quaternary p-3 text-quinary"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="hover:bg-opacity/90 flex items-center gap-2 rounded bg-primary px-6 py-3 text-secondary transition-colors"
                  >
                    Enviar Mensaje
                    <Send size={20} />
                  </button>
                </form>
              </div>

              <div>
                <h3 className="mb-6 text-2xl text-primary">Ubicación</h3>
                <div className="mb-8">
                  <div className="mb-2 flex items-center gap-2 text-tertiary">
                    <MapPin className="text-primary" />
                    <span>Rosario, Santa Fe, Argentina</span>
                  </div>
                </div>

                <h3 className="mb-4 text-2xl text-primary">Redes Sociales</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/jesusjagarcia/"
                    className="text-tertiary transition-colors hover:text-primary"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={32} />
                  </a>
                  <a
                    href="https://github.com/JAJesusGarcia"
                    className="text-tertiary transition-colors hover:text-primary"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={32} />
                  </a>
                  <a
                    href="mailto:jesusjagarcia98@gmail.com"
                    className="text-tertiary transition-colors hover:text-primary"
                    aria-label="Email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail size={32} />
                  </a>
                  <a
                    href="https://wa.me/3416153479"
                    className="text-tertiary transition-colors hover:text-primary"
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
      <Footer />
    </div>
  );
};

export default Portfolio;

//comentario de commit
