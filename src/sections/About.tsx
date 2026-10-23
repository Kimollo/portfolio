import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line bg-ink-raised/60" aria-labelledby="about-title">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="About"
          title="Practical software, real problems"
        />
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-paper-muted md:text-lg">
            <p id="about-title" className="sr-only">
              About {profile.name}
            </p>
            <p>{profile.summary}</p>
            <p>
              Based in {profile.location}, I bring hands-on IT support experience alongside coursework and
              personal projects in Java/Spring, React, and data tools — including Microsoft Power Platform
              (PL-900) and Power BI (PL-300).
            </p>
          </div>
          <aside className="rounded-xl border border-line bg-ink p-6">
            <h3 className="font-display text-sm font-semibold tracking-[0.18em] text-accent uppercase">
              Focus
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-paper-muted">
              <li>Full-stack web apps with clear architecture</li>
              <li>Support-minded troubleshooting and reliable delivery</li>
              <li>APIs, databases, and practical UI</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
