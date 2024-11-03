"use client";

import React from "react";
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
}

const TechStack = () => {
  const skills: Skill[] = [
    { name: "React", icon: Code2, color: "#61DAFB" },
    { name: "Node.js", icon: Server, color: "#339933" },
    { name: "TypeScript", icon: FileCode, color: "#3178C6" },
    { name: "MongoDB", icon: Database, color: "#47A248" },
    { name: "JavaScript", icon: Brackets, color: "#F7DF1E" },
    { name: "Next.js", icon: Rocket, color: "#000000" },
    { name: "Redux", icon: Box, color: "#764ABC" },
    { name: "Docker", icon: Container, color: "#2496ED" },
    { name: "Testing", icon: TestTube, color: "#C21325" },
    { name: "Git", icon: GitBranch, color: "#F05032" },
    { name: "CSS", icon: Palette, color: "#1572B6" },
    { name: "PostgreSQL", icon: Table, color: "#336791" },
  ];

  // Duplicamos el array para crear el efecto infinito
  const doubledSkills = [...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br py-10">
      <div className="absolute inset-0 bg-transparent" />

      <div className="relative">
        <div className="infinite-scroll flex gap-12">
          {doubledSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={`${skill.name}-${index}`}
                className="flex flex-col items-center justify-center space-y-3 transition-transform hover:scale-110"
              >
                <div className="flex size-16 items-center justify-center">
                  <Icon className="size-12" style={{ color: skill.color }} />
                </div>
                <span className="text-sm font-medium text-white/90">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TechStack;
