import React from "react";

const ExperienceMobile = () => {
  return (
    <section id="experience-mobile" className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary">
          Mi Trayectoria Profesional
        </h2>

        <div className="space-y-6">
          {/* Teaching Assistant */}
          <div className="rounded-xl bg-quaternary p-4 shadow-lg">
            <div className="mb-3">
              <span className="inline-block rounded-full border border-primary px-3 py-0.5 text-xs font-medium text-primary">
                Agosto 2024 - Actualidad
              </span>
            </div>
            <h3 className="mb-1 text-xl font-bold text-primary">
              Teaching Assistant
            </h3>
            <p className="mb-3 font-medium text-tertiary">Henry Bootcamp</p>
            <ul className="space-y-2 text-sm text-quinary">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>
                  Coordinar grupos de estudiantes para su adaptación al programa
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>
                  Orientación y resolución de inquietudes en primeras etapas
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>
                  Facilitación de Pair Programming y resolución de ejercicios
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>Mejora continua de procesos del Bootcamp</span>
              </li>
            </ul>
          </div>

          {/* Desarrollador de herramientas */}
          <div className="rounded-xl bg-quaternary p-4 shadow-lg">
            <div className="mb-3">
              <span className="inline-block rounded-full border border-primary px-3 py-0.5 text-xs font-medium text-primary">
                Proyecto Personal
              </span>
            </div>
            <h3 className="mb-1 text-xl font-bold text-primary">
              Desarrollador de herramientas
            </h3>
            <p className="mb-3 font-medium text-tertiary">netepscript</p>
            <ul className="space-y-2 text-sm text-quinary">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>
                  Creación de herramienta de configuración automatizada
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>Integración de ExpressJS, NodeJS y TypeScript</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>Optimización de tiempos de configuración</span>
              </li>
            </ul>
          </div>

          {/* Auxiliar de logística */}
          <div className="rounded-xl bg-quaternary p-4 shadow-lg">
            <div className="mb-3">
              <span className="inline-block rounded-full border border-primary px-3 py-0.5 text-xs font-medium text-primary">
                Abril 2023 - Actualidad
              </span>
            </div>
            <h3 className="mb-1 text-xl font-bold text-primary">
              Auxiliar de logística
            </h3>
            <p className="mb-3 font-medium text-tertiary">Bitao - Santini</p>
            <ul className="space-y-2 text-sm text-quinary">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>Gestión de recepción de mercadería</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>Control de almacenamiento e inventario</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>Mantenimiento de instalaciones</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceMobile;
