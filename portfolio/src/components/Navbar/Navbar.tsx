'use client';

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    const aboutSection = document.getElementById('about');

    // Callback para manejar la intersección, con tipo de parámetro específico
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target.id === 'hero') {
          setIsVisible(entry.isIntersecting);
        } else if (entry.target.id === 'about' && entry.isIntersecting) {
          setIsVisible(false);
        }
      });
    };

    // Crear el IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    // Observar las secciones 'hero' y 'about'
    if (heroSection) observer.observe(heroSection);
    if (aboutSection) observer.observe(aboutSection);

    // Limpiar el observer al desmontar el componente
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${
        !isVisible ? styles.hidden : ''
      } bg-quaternary p-4`}
    >
      {/* <nav className="bg-quaternary p-4"> */}
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-primary/80 text-2xl font-bold">My Portfolio</h1>
        <div className="space-x-6">
          <a href="#about" className="text-quinary hover:text-primary">
            About
          </a>
          <a href="#experience" className="text-quinary hover:text-primary">
            Experience
          </a>
          <a href="#projects" className="text-quinary hover:text-primary">
            Projects
          </a>
          <a href="#contact" className="text-quinary hover:text-primary">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
