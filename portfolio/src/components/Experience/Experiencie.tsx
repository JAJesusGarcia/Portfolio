const Experience = () => {
  return (
    <section id="experience" className="bg-secondary py-10">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-primary">
          Mi Trayectoria Profesional
        </h2>

        <div className="relative">
          {/* Línea vertical central */}
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-primary/20"></div>

          {/* Teaching Assistant */}
          <div className="group mb-16">
            <div className="relative flex items-center">
              {/* Círculo en la línea de tiempo */}
              <div className="seze-4 absolute left-1/2 translate-x-1/2 rounded-full bg-primary transition duration-300 group-hover:scale-150"></div>

              {/* Contenido */}
              <div className="w-1/2 pr-16 text-right opacity-70 transition-transform duration-300 hover:-translate-x-3 group-hover:opacity-100">
                <span className="mb-2 inline-block rounded-full border border-primary px-4 py-1 text-sm font-medium text-primary">
                  Agosto 2024 - Actualidad
                </span>
              </div>

              <div className="w-1/2 pl-16 transition-transform duration-300 hover:translate-x-3">
                <div className="rounded-xl border-l-4 border-primary bg-quaternary p-6 shadow-lg transition-all duration-300 hover:-rotate-1 hover:shadow-2xl">
                  <h3 className="mb-2 text-2xl font-bold text-primary">
                    Teaching Assistant
                  </h3>
                  <p className="mb-4 font-medium text-tertiary">
                    Henry Bootcamp
                  </p>
                  <ul className="space-y-2 text-quinary">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>
                        Coordinar grupos de estudiantes para su adaptación al
                        programa
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>
                        Orientación y resolución de inquietudes en primeras
                        etapas
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>
                        Facilitación de Pair Programming y resolución de
                        ejercicios
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-primary">•</span>
                      <span>Mejora continua de procesos del Bootcamp</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Desarrollador de herramientas */}
          <div className="group mb-16">
            <div className="relative flex items-center">
              <div className="absolute left-1/2 size-4 -translate-x-1/2 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150"></div>

              <div className="w-1/2 pr-16 text-right">
                <div className="rounded-xl border-r-4 border-primary bg-quaternary p-6 shadow-lg transition-all duration-300 hover:rotate-1 hover:shadow-2xl">
                  <h3 className="mb-2 text-2xl font-bold text-primary">
                    Desarrollador de herramientas
                  </h3>
                  <p className="mb-4 font-medium text-tertiary">netepscript</p>
                  <ul className="space-y-2 text-quinary">
                    <li className="flex items-start justify-end gap-2">
                      <span>
                        Creación de herramienta de configuración automatizada
                      </span>
                      <span className="mt-1 text-primary">•</span>
                    </li>
                    <li className="flex items-start justify-end gap-2">
                      <span>Integración de ExpressJS, NodeJS y TypeScript</span>
                      <span className="mt-1 text-primary">•</span>
                    </li>
                    <li className="flex items-start justify-end gap-2">
                      <span>Optimización de tiempos de configuración</span>
                      <span className="mt-1 text-primary">•</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-1/2 pl-16 opacity-70 transition-transform duration-300 hover:translate-x-3 group-hover:opacity-100">
                <span className="mb-2 inline-block rounded-full border border-primary px-4 py-1 text-sm font-medium text-primary">
                  Proyecto Personal
                </span>
              </div>
            </div>
          </div>

          {/* Auxiliar de logística */}
          <div className="group mb-16">
            <div className="relative flex items-center">
              <div className="absolute left-1/2 size-4 -translate-x-1/2 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150"></div>

              <div className="w-1/2 pr-16 text-right opacity-70 transition-transform duration-300 hover:-translate-x-3 group-hover:opacity-100">
                <span className="mb-2 inline-block rounded-full border border-primary px-4 py-1 text-sm font-medium text-primary">
                  Abril 2023 - Actualidad
                </span>
              </div>

              <div className="w-1/2 pl-16">
                <div className="rounded-xl border-l-4 border-primary bg-quaternary p-6 shadow-lg transition-all duration-300 hover:-rotate-1 hover:shadow-2xl">
                  <h3 className="mb-2 text-2xl font-bold text-primary">
                    Auxiliar de logística
                  </h3>
                  <p className="mb-4 font-medium text-tertiary">
                    Bitao - Santini
                  </p>
                  <ul className="space-y-2 text-quinary">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
