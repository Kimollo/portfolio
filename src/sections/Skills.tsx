import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-line bg-ink-raised/60" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I work with"
          description="Skills marked Learning are actively in progress — not claimed as production fluency."
        />
        <h3 id="skills-heading" className="sr-only">
          Skill groups
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-line bg-ink p-5 md:p-6">
              <h4 className="font-display text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="inline-flex items-center gap-2 rounded-md border border-line bg-ink-raised px-3 py-1.5 text-sm text-paper"
                  >
                    {item.name}
                    {item.level === 'learning' ? (
                      <span className="rounded bg-accent/15 px-1.5 py-0.5 text-[0.65rem] font-semibold tracking-wide text-accent uppercase">
                        Learning
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
