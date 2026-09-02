import { useNavigate } from 'react-router'
import { cities, statuses } from '../data/site'

export function HeroSearch() {
  const navigate = useNavigate()

  return (
    <form
      className="hero-search"
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const params = new URLSearchParams()
        const cidade = String(data.get('cidade') ?? '')
        const status = String(data.get('status') ?? '')
        if (cidade) params.set('cidade', cidade)
        if (status) params.set('status', status)
        const query = params.toString()
        navigate(query ? `/empreendimentos?${query}` : '/empreendimentos')
      }}
    >
      <div className="hero-search-bar" aria-hidden="true" />
      <div className="hero-search-fields">
        <label>
          <span className="label">Cidade</span>
          <select name="cidade" defaultValue="">
            <option value="">Todas</option>
            {cities.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="label">Status</span>
          <select name="status" defaultValue="">
            <option value="">Todos</option>
            {statuses.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className="cta-primary">
          Ver Recantos
        </button>
      </div>
    </form>
  )
}
