import { Outlet } from 'react-router'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { ScrollToTop } from './ScrollToTop'
import { WhatsAppFab } from './WhatsAppFab'

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col bg-paper">
      <ScrollToTop />
      <a href="#conteudo" className="skip-link">
        Ir para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
