'use client';

import React, { useState, useEffect } from 'react';
import {
  Code2,
  Server,
  FileCode,
  Database,
  Cpu,
  Brackets,
  Rocket,
  Box,
  LucideIcon,
} from 'lucide-react';

interface Skill {
  name: string;
  icon: LucideIcon;
  color: string;
  category: string;
  level: string;
  experience: string;
  description: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
  total: number;
}

const TechStack = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [rotation, setRotation] = useState<number>(0);

  const skills: Skill[] = [
    {
      name: 'React',
      icon: Code2,
      color: '#61DAFB',
      category: 'Frontend',
      level: 'Avanzado',
      experience: '4 años',
      description: 'Desarrollo de aplicaciones SPA complejas',
    },
    {
      name: 'Node.js',
      icon: Server,
      color: '#339933',
      category: 'Backend',
      level: 'Avanzado',
      experience: '3 años',
      description: 'APIs RESTful y microservicios',
    },
    {
      name: 'TypeScript',
      icon: FileCode,
      color: '#3178C6',
      category: 'Lenguaje',
      level: 'Intermedio',
      experience: '2 años',
      description: 'Desarrollo tipado y seguro',
    },
    {
      name: 'MongoDB',
      icon: Database,
      color: '#47A248',
      category: 'Base de Datos',
      level: 'Avanzado',
      experience: '3 años',
      description: 'Diseño de esquemas y consultas complejas',
    },
    // {
    //   name: 'Python',
    //   icon: Cpu,
    //   color: '#3776AB',
    //   category: 'Lenguaje',
    //   level: 'Intermedio',
    //   experience: '2 años',
    //   description: 'Automatización y análisis de datos',
    // },
    {
      name: 'JavaScript',
      icon: Brackets,
      color: '#F7DF1E',
      category: 'Lenguaje',
      level: 'Experto',
      experience: '5 años',
      description: 'ES6+, Async/Await, Promises',
    },
    {
      name: 'Next.js',
      icon: Rocket,
      color: '#000000',
      category: 'Frontend',
      level: 'Avanzado',
      experience: '2 años',
      description: 'SSR y aplicaciones fullstack',
    },
    {
      name: 'Redux',
      icon: Box,
      color: '#764ABC',
      category: 'Frontend',
      level: 'Avanzado',
      experience: '3 años',
      description: 'Gestión de estado global',
    },
  ];

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if (autoRotate && !selectedSkill) {
      intervalId = setInterval(() => {
        setRotation((prev) => (prev + 0.5) % 360);
      }, 30);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoRotate, selectedSkill]);

  const calculatePosition = (index: number, total: number) => {
    const angle = (index * (360 / total) + rotation) * (Math.PI / 180);
    const radius = 180;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const scale = (Math.sin(angle) + 2) / 2.5;

    return { x, y, scale };
  };

  const SkillCard: React.FC<SkillCardProps> = ({ skill, index, total }) => {
    const { x, y, scale } = calculatePosition(index, total);
    const isSelected = selectedSkill?.name === skill.name;
    const Icon = skill.icon;

    return (
      <div
        className={`absolute transform transition-all duration-300 ${
          isSelected ? 'z-50' : ''
        }`}
        style={{
          left: `calc(50% + ${x}px)`,
          top: `calc(50% + ${y}px)`,
          transform: `translate(-50%, -50%) scale(${isSelected ? 1.5 : scale})`,
          opacity: selectedSkill ? (isSelected ? 1 : 0.3) : 1,
        }}
      >
        <div
          className="cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={() => setSelectedSkill(isSelected ? null : skill)}
        >
          <div
            className={`
            p-4 rounded-xl backdrop-blur-md
            ${isSelected ? 'bg-white bg-opacity-20' : 'bg-white bg-opacity-10'}
            transition-all duration-300 hover:shadow-lg
            flex flex-col items-center space-y-2
          `}
          >
            <Icon className="w-20 h-20" style={{ color: skill.color }} />
            <span className="text-white font-medium text-sm whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    // <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
    //   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2),transparent_70%)]" />
    <div className="relative mt-20 h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2),transparent_50%)]" />

      {/* <button
        className="absolute top-4 right-4 px-4 py-2 bg-white bg-opacity-10 rounded-lg text-white text-sm hover:bg-opacity-20 transition-all"
        onClick={() => setAutoRotate(!autoRotate)}
      >
        {autoRotate ? '⏸ Pausar' : '▶️ Rotar'}
      </button> */}

      <div className="relative w-full h-full flex items-center justify-center">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
            total={skills.length}
          />
        ))}
      </div>

      {selectedSkill && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 text-white transition-all duration-300">
          <div className="flex items-center space-x-4 mb-4">
            <selectedSkill.icon
              className="w-10 h-10"
              style={{ color: selectedSkill.color }}
            />
            <div>
              <h3 className="text-xl font-bold">{selectedSkill.name}</h3>
              <p className="text-sm opacity-80">{selectedSkill.category}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm opacity-70">Nivel</p>
              <p className="font-medium">{selectedSkill.level}</p>
            </div>
            <div>
              <p className="text-sm opacity-70">Experiencia</p>
              <p className="font-medium">{selectedSkill.experience}</p>
            </div>
          </div>
          <p className="text-sm opacity-90">{selectedSkill.description}</p>
        </div>
      )}
    </div>
  );
};

export default TechStack;
