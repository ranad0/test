import type { ButtonHTMLAttributes } from 'react';
import type { WhatsAppMessageType } from '../../types';
import type { WhatsAppParams } from '../../data/whatsappMessages';
import { openWhatsApp } from '../../utils/whatsapp';
import type { TrackingEvent } from '../../utils/tracking';
import { Icon } from './Icon';

type WhatsAppButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  typeName?: WhatsAppMessageType;
  params?: WhatsAppParams;
  trackingEvent?: TrackingEvent;
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
};

export function WhatsAppButton({
  typeName = 'general',
  params,
  trackingEvent,
  variant = 'primary',
  children,
  className = '',
  ...props
}: WhatsAppButtonProps) {
  const styles = {
    primary: 'bg-champagne text-obsidian hover:bg-ivory focus-visible:outline-champagne',
    secondary: 'border border-champagne/45 bg-transparent text-ivory hover:border-champagne hover:bg-champagne/10 focus-visible:outline-champagne',
    ghost: 'bg-transparent text-ivory underline decoration-champagne/60 underline-offset-8 hover:text-champagne focus-visible:outline-champagne'
  };

  return (
    <button
      type="button"
      className={`inline-flex min-h-11 items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${styles[variant]} ${className}`}
      onClick={() => openWhatsApp(typeName, params, trackingEvent)}
      {...props}
    >
      <Icon name="whatsapp" className="h-5 w-5 text-whatsapp" />
      <span>{children}</span>
    </button>
  );
}
