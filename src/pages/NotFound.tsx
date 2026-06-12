import { Link } from 'react-router-dom';
import { seo } from '../data/seo';
import { usePageMeta } from '../hooks/usePageMeta';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export function NotFound() {
  usePageMeta(seo.notFound);
  return (
    <main className="pt-24">
      <section className="section-padding bg-obsidian text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-8xl text-champagne/70">404</p>
          <h1 className="mt-4 font-arabic text-4xl font-semibold text-ivory">الصفحة غير موجودة</h1>
          <p dir="ltr" className="mt-2 font-display text-3xl text-champagne/90">Page Not Found</p>
          <p className="mt-6 leading-8 text-silver">يمكنك العودة إلى الصفحة الرئيسية أو التواصل معنا عبر واتساب لتنسيق رحلتك.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" className="inline-flex min-h-11 items-center justify-center rounded-full border border-champagne/40 px-6 py-3 text-sm font-semibold text-ivory hover:bg-champagne/10">العودة للرئيسية</Link>
            <WhatsAppButton trackingEvent="whatsapp_click_hero">تواصل عبر واتساب</WhatsAppButton>
          </div>
        </div>
      </section>
    </main>
  );
}
