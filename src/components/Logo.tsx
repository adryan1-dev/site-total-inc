import { Link } from 'react-router'

type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="Total Incorporações">
      <img
        src="/assets/logo/logo-total-incorporacoes.png"
        alt=""
        width={220}
        height={81}
        fetchPriority="high"
        decoding="async"
        className="h-10 w-auto md:h-12"
      />
    </Link>
  )
}
