const Navbar = () => {
  return (
    <nav className="bg-quaternary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-primary text-2xl font-bold">Mi Portfolio</h1>
        <div className="space-x-6">
          <a href="#about" className="text-quinary hover:text-primary">
            About
          </a>
          <a href="#projects" className="text-quinary hover:text-primary">
            Proyectos
          </a>
          <a href="#contact" className="text-quinary hover:text-primary">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
