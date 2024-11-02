import style from './Hero.module.css';

const Hero = () => {
  return (
    <header
      className={`relative flex h-[100vh] flex-col items-center justify-center bg-secondary ${style['hero-background']}`}
    ></header>
  );
};

export default Hero;
