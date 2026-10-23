import { Download, Menu, X } from 'lucide-react'
import { useEffect, useId, useState } from 'react'
import { profile } from '../data'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? 'border-b border-line/80 bg-ink/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-paper transition-colors hover:text-accent"
          onClick={close}
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-paper-muted transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cv}
              download
              className="ml-2 inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-3 py-2 text-sm font-semibold text-paper transition-colors hover:border-accent hover:bg-accent/20"
            >
              <Download className="size-4" aria-hidden />
              CV
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-line p-2 text-paper md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </nav>

      <div
        id={menuId}
        className={`border-t border-line bg-ink md:hidden ${open ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-md px-3 py-3 text-base font-medium text-paper-muted transition-colors hover:bg-ink-soft hover:text-paper"
                onClick={close}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cv}
              download
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-3 py-3 text-base font-semibold text-paper"
              onClick={close}
            >
              <Download className="size-4" aria-hidden />
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
