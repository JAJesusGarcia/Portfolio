const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-8">Sobre Mí</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/api/placeholder/400/400"
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
  );
};

export default About;
