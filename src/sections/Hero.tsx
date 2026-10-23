import { ArrowDown, Mail } from 'lucide-react'
import { GitHubIcon } from '../components/BrandIcons'
import { profile } from '../data'

export function Hero() {
  return (
    <section
      id="top"
      className="surface-grid relative min-h-[100svh] overflow-hidden pt-20"
      aria-labelledby="hero-name"
    >
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-8 md:py-16">
        <div className="order-2 md:order-1">
          <p className="animate-fade-up font-display text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            Software developer · South Africa
          </p>
          <h1
            id="hero-name"
            className="animate-fade-up animate-delay-1 mt-4 font-display text-5xl font-bold tracking-tight text-paper sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </h1>
          <p className="animate-fade-up animate-delay-2 mt-6 max-w-xl font-display text-2xl leading-snug font-medium text-balance text-paper-muted sm:text-3xl">
            {profile.headline}
          </p>
          <p className="animate-fade-up animate-delay-2 mt-4 max-w-lg text-base text-fog md:text-lg">
            From support desks and campus labs to shipping full-stack apps — practical software with clear
            purpose.
          </p>

          <div className="animate-fade-up animate-delay-3 mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              <ArrowDown className="size-4" aria-hidden />
              View Projects
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-semibold text-paper transition-colors hover:border-accent hover:text-accent"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-semibold text-paper transition-colors hover:border-accent hover:text-accent"
            >
              <Mail className="size-4" aria-hidden />
              Contact
            </a>
          </div>
        </div>

        <div className="animate-fade-in order-1 md:order-2">
          <div className="relative mx-auto max-w-md md:max-w-none">
            <div
              className="absolute -inset-3 rounded-2xl bg-accent/20 blur-2xl md:-inset-5"
              aria-hidden
            />
            <img
              src={profile.portrait}
              alt={`${profile.name}, software developer`}
              className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-line"
              width={1000}
              height={1500}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
