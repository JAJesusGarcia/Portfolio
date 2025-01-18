const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-[110px] flex-1 border-t bg-secondary p-5 text-quinary">
      <div className="container my-5 text-center">
        <h4 className="flex items-center justify-center text-tertiary">
          My Portfolio
        </h4>
        <p className="text-tertiary">
          <span className="text-primary/50">©</span> {currentYear} Jesús Garcia{" "}
          <span className="text-primary/50">|</span> All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
