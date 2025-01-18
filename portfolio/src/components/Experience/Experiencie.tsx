// components/Experience.jsx
import { experiences } from "../../data/experience";

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

          {experiences.map((exp) => (
            <div key={exp.id} className="group mb-16">
              <div className="relative flex items-center">
                {/* Círculo en la línea de tiempo */}
                <div className="absolute left-1/2 size-4 -translate-x-1/2 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150"></div>

                {exp.alignment === "left" ? (
                  <>
                    <div className="w-1/2 pr-16">
                      <div className="rounded-xl border-r-4 border-primary bg-quaternary p-6 shadow-lg transition-all duration-300 hover:rotate-1 hover:shadow-2xl">
                        <h3 className="mb-2 text-2xl font-bold text-primary">
                          {exp.title}
                        </h3>
                        <p className="mb-4 font-medium text-tertiary">
                          {exp.company}
                        </p>
                        <ul className="space-y-2 text-quinary">
                          {exp.achievements.map((achievement, index) => (
                            <li
                              key={index}
                              className="flex items-start justify-end gap-2"
                            >
                              <span>{achievement}</span>
                              <span className="mt-1 text-primary">•</span>
                            </li>
                          ))}
                        </ul>
                        {exp.highlights && (
                          <>
                            <h4 className="mb-2 mt-4 text-right text-lg font-semibold text-primary">
                              Logros destacados:
                            </h4>
                            <ul className="space-y-2 text-quinary">
                              {exp.highlights.map((highlight, index) => (
                                <li
                                  key={index}
                                  className="flex items-start justify-end gap-2"
                                >
                                  <span>{highlight}</span>
                                  <span className="mt-1 text-primary">•</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="w-1/2 pl-16 opacity-70 transition-transform duration-300 hover:translate-x-3 group-hover:opacity-100">
                      <span className="mb-2 inline-block rounded-full border border-primary px-4 py-1 text-sm font-medium text-primary">
                        {exp.period}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 pr-16 text-right opacity-70 transition-transform duration-300 hover:-translate-x-3 group-hover:opacity-100">
                      <span className="mb-2 inline-block rounded-full border border-primary px-4 py-1 text-sm font-medium text-primary">
                        {exp.period}
                      </span>
                    </div>
                    <div className="w-1/2 pl-16">
                      <div className="rounded-xl border-l-4 border-primary bg-quaternary p-6 shadow-lg transition-all duration-300 hover:-rotate-1 hover:shadow-2xl">
                        <h3 className="mb-2 text-2xl font-bold text-primary">
                          {exp.title}
                        </h3>
                        <p className="mb-4 font-medium text-tertiary">
                          {exp.company}
                        </p>
                        <ul className="space-y-2 text-quinary">
                          {exp.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="mt-1 text-primary">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                        {exp.highlights && (
                          <>
                            <h4 className="mb-2 mt-4 text-lg font-semibold text-primary">
                              Logros destacados:
                            </h4>
                            <ul className="space-y-2 text-quinary">
                              {exp.highlights.map((highlight, index) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-2"
                                >
                                  <span className="mt-1 text-primary">•</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
