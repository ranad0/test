import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileStickyCTA } from './MobileStickyCTA';

export function Layout() {
  return (
    <div className="min-h-screen bg-obsidian text-ivory">
      <Header />
      <Outlet />
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
