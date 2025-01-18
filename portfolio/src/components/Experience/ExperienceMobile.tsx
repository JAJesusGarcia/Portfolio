import { experiences } from "../../data/experience";

const ExperienceMobile = () => {
  return (
    <section id="experience-mobile" className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary">
          Mi Trayectoria Profesional
        </h2>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-xl bg-quaternary p-4 shadow-lg"
            >
              <div className="mb-3">
                <span className="inline-block rounded-full border border-primary px-3 py-0.5 text-xs font-medium text-primary">
                  {exp.period}
                </span>
              </div>
              <h3 className="mb-1 text-xl font-bold text-primary">
                {exp.title}
              </h3>
              <p className="mb-3 font-medium text-tertiary">{exp.company}</p>
              <ul className="space-y-2 text-sm text-quinary">
                {exp.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              {/* Mostrar logros destacados si existen */}
              {exp.highlights && (
                <>
                  <h4 className="mt-4 text-lg font-semibold text-primary">
                    Logros destacados:
                  </h4>
                  <ul className="space-y-2 text-sm text-quinary">
                    {exp.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 text-primary">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceMobile;
