import { SectionHeading } from '../components/SectionHeading'
import { certifications, education, experience } from '../data'

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-line"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Experience"
          title="Work, education, and certifications"
        />
        <h3 id="experience-heading" className="sr-only">
          Experience and education
        </h3>

        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h4 className="mb-6 font-display text-lg font-semibold text-paper">Roles</h4>
            <ol className="space-y-8 border-l border-line pl-6">
              {experience.map((role) => (
                <li key={`${role.organization}-${role.title}`} className="relative">
                  <span
                    className="absolute top-1.5 -left-[1.9rem] size-3 rounded-full border-2 border-accent bg-ink"
                    aria-hidden
                  />
                  <p className="text-sm font-medium text-accent">{role.dates}</p>
                  <h5 className="mt-1 font-display text-xl font-semibold text-paper">{role.title}</h5>
                  <p className="text-paper-muted">{role.organization}</p>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-fog">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-10">
            <div>
              <h4 className="mb-4 font-display text-lg font-semibold text-paper">Education</h4>
              <ul className="space-y-4">
                {education.map((item) => (
                  <li key={item.credential} className="rounded-xl border border-line bg-ink-raised p-4">
                    <p className="font-medium text-paper">{item.credential}</p>
                    <p className="mt-1 text-sm text-paper-muted">{item.institution}</p>
                    {item.year ? (
                      <p className="mt-2 text-sm text-fog">{item.year}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-display text-lg font-semibold text-paper">Certifications</h4>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-start justify-between gap-4 rounded-xl border border-line bg-ink-raised p-4"
                  >
                    <span className="text-sm text-paper">{cert.name}</span>
                    <span className="shrink-0 text-sm font-medium text-accent">{cert.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
