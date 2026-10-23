import { Mail, Phone } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

const channels: {
  label: string
  value: string
  href: string
  icon: IconComponent
  external?: boolean
}[] = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail as IconComponent,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    icon: Phone as IconComponent,
  },
  {
    label: 'GitHub',
    value: 'github.com/Kimollo',
    href: profile.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'kimollo-hlakola',
    href: profile.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line bg-ink-raised/60" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk"
          description="Reach out directly. Email or phone is fine for opportunities and collaboration."
        />
        <h3 id="contact-heading" className="sr-only">
          Contact details
        </h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          {channels.map((channel) => {
            const Icon = channel.icon
            return (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...('external' in channel && channel.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="flex items-start gap-4 rounded-xl border border-line bg-ink p-5 transition-[border-color,transform] duration-300 hover:border-accent/50 motion-safe:hover:-translate-y-0.5"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-lg border border-line bg-ink-raised text-accent">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold tracking-[0.16em] text-fog uppercase">
                      {channel.label}
                    </span>
                    <span className="mt-1 block font-medium text-paper">{channel.value}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
