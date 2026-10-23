interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl md:mb-12">
      <p className="mb-3 font-display text-xs font-semibold tracking-[0.22em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance text-paper md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-paper-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
