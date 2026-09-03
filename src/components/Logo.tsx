import { Link } from 'react-router'
import { site } from '../data/site'

type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="Total Incorporações">
      <img
        src={site.logo.src}
        alt=""
        width={site.logo.width}
        height={site.logo.height}
        decoding="async"
        className="h-10 w-auto md:h-12"
      />
    </Link>
  )
}
