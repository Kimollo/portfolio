import { ExternalLink } from 'lucide-react'
import type { Project } from '../data'
import { GitHubIcon } from './BrandIcons'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-ink-raised transition-[border-color,transform] duration-300 hover:border-accent/50 motion-safe:hover:-translate-y-0.5">
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-soft">
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={`Screenshot of ${project.name}`}
            className="size-full object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div
            className="flex size-full flex-col items-center justify-center gap-2 px-6 text-center"
            role="img"
            aria-label={`Screenshot placeholder for ${project.name}`}
          >
            <div className="h-px w-16 bg-line" />
            <p className="font-display text-sm font-medium tracking-wide text-fog uppercase">
              Screenshot coming soon
            </p>
            <div className="h-px w-16 bg-line" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <div>
          <h3 className="font-display text-xl font-semibold text-paper">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-paper-muted md:text-[0.95rem]">
            {project.blurb}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded border border-line bg-ink px-2 py-1 text-xs font-medium text-fog"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-medium text-paper transition-colors hover:border-accent hover:text-accent"
          >
            <GitHubIcon className="size-4" />
            Code
          </a>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              <ExternalLink className="size-4" aria-hidden />
              Live demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
