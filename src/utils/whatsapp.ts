import { site } from '../data/site';
import { whatsappMessages, type WhatsAppParams } from '../data/whatsappMessages';
import type { TrackingEvent } from './tracking';
import { trackEvent } from './tracking';
import type { WhatsAppMessageType } from '../types';

export const WHATSAPP_NUMBER = site.whatsappNumber;

export function getWhatsAppMessage(type: WhatsAppMessageType = 'general', params?: WhatsAppParams) {
  return whatsappMessages[type](params);
}

export function getWhatsAppUrl(type: WhatsAppMessageType = 'general', params?: WhatsAppParams) {
  const message = getWhatsAppMessage(type, params);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(
  type: WhatsAppMessageType = 'general',
  params?: WhatsAppParams,
  trackingEvent?: TrackingEvent,
  trackingPayload: Record<string, unknown> = {}
) {
  if (trackingEvent) {
    trackEvent(trackingEvent, { whatsapp_type: type, ...trackingPayload });
  }
  window.open(getWhatsAppUrl(type, params), '_blank', 'noopener,noreferrer');
}
