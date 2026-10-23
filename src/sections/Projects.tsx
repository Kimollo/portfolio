import { useMemo, useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { projectFilters, projects, type ProjectFilter } from '../data'

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('All')

  const visible = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((project) => project.tags.includes(filter))
  }, [filter])

  return (
    <section id="projects" className="scroll-mt-24 border-t border-line" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Projects" title="Featured work" />

        <div
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by focus"
        >
          {projectFilters.map((option) => {
            const active = filter === option
            return (
              <button
                key={option}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(option)}
                className={`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'border-accent bg-accent/15 text-paper'
                    : 'border-line bg-ink-raised text-paper-muted hover:border-accent/50 hover:text-paper'
                }`}
              >
                {option}
              </button>
            )
          })}
        </div>

        <h3 id="projects-heading" className="sr-only">
          Project list
        </h3>

        {visible.length === 0 ? (
          <p className="rounded-xl border border-line bg-ink-raised px-5 py-10 text-center text-paper-muted">
            No projects match this filter.
          </p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2">
            {visible.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
