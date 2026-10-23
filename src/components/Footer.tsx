import { profile } from '../data'

const SITE_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-raised">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-fog md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          <span className="font-medium text-paper-muted">{profile.name}</span>
          <span aria-hidden="true"> · </span>
          Software developer
        </p>
        <p>
          <span aria-hidden="true">© </span>
          {SITE_YEAR}
        </p>
      </div>
    </footer>
  )
}
