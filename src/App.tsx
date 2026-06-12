import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Fleet } from './pages/Fleet';
import { CarDetail } from './pages/CarDetail';
import { ServiceLanding } from './pages/ServiceLanding';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="fleet" element={<Fleet />} />
        <Route path="fleet/:slug" element={<CarDetail />} />
        <Route path="self-drive" element={<ServiceLanding serviceId="self-drive" />} />
        <Route path="chauffeur" element={<ServiceLanding serviceId="chauffeur" />} />
        <Route path="airport-transfer" element={<ServiceLanding serviceId="airport-transfer" />} />
        <Route path="weddings-events" element={<ServiceLanding serviceId="weddings-events" />} />
        <Route path="corporate-monthly" element={<ServiceLanding serviceId="corporate-monthly" />} />
        <Route path="hotel-delivery" element={<ServiceLanding serviceId="hotel-delivery" />} />
        <Route path="vip-reception" element={<ServiceLanding serviceId="vip-reception" />} />
        <Route path="monthly-rental" element={<Navigate to="/corporate-monthly" replace />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="terms-requirements" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
