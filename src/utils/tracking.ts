declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export type TrackingEvent =
  | 'whatsapp_click_header'
  | 'whatsapp_click_hero'
  | 'whatsapp_click_fleet_card'
  | 'whatsapp_click_car_detail'
  | 'whatsapp_click_airport'
  | 'whatsapp_click_chauffeur'
  | 'whatsapp_click_event'
  | 'whatsapp_click_corporate'
  | 'whatsapp_click_hotel_delivery'
  | 'whatsapp_click_vip'
  | 'call_click_mobile'
  | 'fleet_filter_used'
  | 'language_switch';

export function trackEvent(eventName: TrackingEvent | string, payload: Record<string, unknown> = {}) {
  const data = {
    event: eventName,
    page_path: typeof window !== 'undefined' ? window.location.hash || window.location.pathname : '',
    ...payload
  };

  // GTM readiness: uncomment/keep when GTM is installed.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);

  // GA4 readiness: calls gtag only if it exists.
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
  }

  if (import.meta.env.DEV) {
    // Console-safe placeholder until analytics IDs are added.
    console.info('[tracking]', data);
  }
}
