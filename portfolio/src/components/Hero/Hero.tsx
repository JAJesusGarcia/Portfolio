import style from "./Hero.module.css";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`relative flex h-screen flex-col items-center justify-center bg-secondary ${style["hero-background"]}`}
    >
      <div
        className={`absolute bottom-8 flex flex-col items-center transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="mb-2 animate-pulse text-sm text-white/70">
          Scroll down
        </span>
        <div className="flex flex-col">
          <ChevronDown className="animate-bounce text-white/70" size={24} />
          <ChevronDown
            className="-mt-4 animate-bounce text-white/70"
            size={24}
            style={{
              animationDelay: "0.2s",
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
