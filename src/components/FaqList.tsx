export function ClickTrigger({
  children,
  onDark = false,
  className = '',
}: {
  children: string
  onDark?: boolean
  className?: string
}) {
  return (
    <p
      className={`m-0 max-w-sm font-sans text-xs leading-relaxed ${onDark ? 'click-trigger--on-dark' : 'text-mute'} ${className}`.trim()}
    >
      {children}
    </p>
  )
}

export function FaqList({
  items,
  id,
}: {
  id?: string
  items: readonly { q: string; a: string }[]
}) {
  return (
    <section id={id} className="section-anchor border-t border-line">
      <div className="page-shell section-y">
        <p className="m-0 font-sans text-[0.7rem] font-semibold tracking-[0.18em] text-brick uppercase">
          Perguntas
        </p>
        <h2 className="font-display mt-6 mb-0 max-w-[16ch] text-3xl leading-[0.95] font-bold text-ink md:text-5xl">
          Antes de chamar
        </h2>
        <dl className="mt-10 mb-0 grid border-t border-line md:grid-cols-2">
          {items.map((item) => (
            <div key={item.q} className="border-b border-line py-6 md:odd:pr-10 md:even:pl-10">
              <dt className="m-0 font-sans text-[0.8125rem] font-semibold tracking-[0.06em] text-ink">
                {item.q}
              </dt>
              <dd className="mt-3 mb-0 max-w-md font-sans text-sm leading-relaxed text-pretty text-mute">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}