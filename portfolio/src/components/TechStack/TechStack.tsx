"use client";

import React, { useState, useEffect } from "react";
import {
  Code2,
  Server,
  FileCode,
  Database,
  Brackets,
  Rocket,
  Box,
  Container,
  TestTube,
  GitBranch,
  Palette,
  Table,
  type LucideIcon,
} from "lucide-react";

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
      name: "React",
      icon: Code2,
      color: "#61DAFB",
      category: "Frontend",
      level: "Avanzado",
      experience: "4 años",
      description: "Desarrollo de aplicaciones SPA complejas",
    },
    {
      name: "Node.js",
      icon: Server,
      color: "#339933",
      category: "Backend",
      level: "Avanzado",
      experience: "3 años",
      description: "APIs RESTful y microservicios",
    },
    {
      name: "TypeScript",
      icon: FileCode,
      color: "#3178C6",
      category: "Lenguaje",
      level: "Intermedio",
      experience: "2 años",
      description: "Desarrollo tipado y seguro",
    },
    {
      name: "MongoDB",
      icon: Database,
      color: "#47A248",
      category: "Base de Datos",
      level: "Avanzado",
      experience: "3 años",
      description: "Diseño de esquemas y consultas complejas",
    },
    {
      name: "JavaScript",
      icon: Brackets,
      color: "#F7DF1E",
      category: "Lenguaje",
      level: "Experto",
      experience: "5 años",
      description: "ES6+, Async/Await, Promises",
    },
    {
      name: "Next.js",
      icon: Rocket,
      color: "#000000",
      category: "Frontend",
      level: "Avanzado",
      experience: "2 años",
      description: "SSR y aplicaciones fullstack",
    },
    {
      name: "Redux",
      icon: Box,
      color: "#764ABC",
      category: "Frontend",
      level: "Avanzado",
      experience: "3 años",
      description: "Gestión de estado global",
    },
    // Nuevas tecnologías
    {
      name: "Docker",
      icon: Container,
      color: "#2496ED",
      category: "DevOps",
      level: "Intermedio",
      experience: "2 años",
      description: "Containerización y despliegue de aplicaciones",
    },
    {
      name: "Testing",
      icon: TestTube,
      color: "#C21325",
      category: "Calidad",
      level: "Avanzado",
      experience: "3 años",
      description: "Jest, Jasmine, pruebas unitarias y de integración",
    },
    {
      name: "Git",
      icon: GitBranch,
      color: "#F05032",
      category: "DevOps",
      level: "Avanzado",
      experience: "4 años",
      description: "Control de versiones, flujos de trabajo colaborativos",
    },
    {
      name: "CSS",
      icon: Palette,
      color: "#1572B6",
      category: "Frontend",
      level: "Avanzado",
      experience: "4 años",
      description: "Tailwind, Bootstrap, CSS moderno y responsive",
    },
    {
      name: "PostgreSQL",
      icon: Table,
      color: "#336791",
      category: "Base de Datos",
      level: "Intermedio",
      experience: "2 años",
      description: "Diseño de bases relacionales y consultas SQL",
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
    const radius = 200; // Aumentado para dar más espacio
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
        className={`absolute transition-all duration-300 ${
          isSelected ? "z-50" : ""
        }`}
        style={{
          left: `calc(50% + ${x}px)`,
          top: `calc(50% + ${y}px)`,
          transform: `translate(-50%, -50%) scale(${isSelected ? 1.5 : scale})`,
          opacity: selectedSkill ? (isSelected ? 1 : 0.3) : 1,
        }}
      >
        <div
          className="cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={() => setSelectedSkill(isSelected ? null : skill)}
        >
          <div
            className={`rounded-xl p-4 backdrop-blur-md ${
              isSelected ? "bg-white/20" : "bg-white/10"
            } flex flex-col items-center space-y-2 transition-all duration-300 hover:shadow-lg`}
          >
            <Icon className="size-16" style={{ color: skill.color }} />
            <span className="whitespace-nowrap text-sm font-medium text-white">
              {skill.name}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative mt-20 flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2),transparent_50%)]" />

      <div className="relative flex size-full items-center justify-center">
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
        <div className="absolute bottom-8 left-1/2 w-full max-w-md -translate-x-1/2 rounded-xl bg-white/10 p-6 text-white backdrop-blur-md transition-all duration-300">
          <div className="mb-4 flex items-center space-x-4">
            <selectedSkill.icon
              className="size-10"
              style={{ color: selectedSkill.color }}
            />
            <div>
              <h3 className="text-xl font-bold">{selectedSkill.name}</h3>
              <p className="text-sm opacity-80">{selectedSkill.category}</p>
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
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
