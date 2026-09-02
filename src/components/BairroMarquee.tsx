const BAIRROS = 'Canaã · Jaqueline · Juliana · Barreiro · Almenara'
const COPIES = 6

export function BairroMarquee() {
  const group = Array.from({ length: COPIES }, (_, i) => (
    <span key={i} className="marquee-item">
      {BAIRROS}
    </span>
  ))

  return (
    <div className="marquee" role="presentation">
      <p className="sr-only">Empreendimentos em Canaã, Jaqueline, Juliana, Barreiro e Almenara.</p>
      <div className="marquee-track">
        <div className="marquee-group">{group}</div>
        <div className="marquee-group" aria-hidden="true">
          {group}
        </div>
      </div>
    </div>
  )
}
