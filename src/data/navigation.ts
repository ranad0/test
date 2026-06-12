import type { NavItem } from '../types';

export const navigation: NavItem[] = [
  { label: { ar: 'الرئيسية', en: 'Home' }, path: '/' },
  { label: { ar: 'الأسطول', en: 'Fleet' }, path: '/fleet' },
  { label: { ar: 'استقبال المطار', en: 'Airport' }, path: '/airport-transfer' },
  { label: { ar: 'مع سائق', en: 'Chauffeur' }, path: '/chauffeur' },
  { label: { ar: 'المناسبات', en: 'Events' }, path: '/weddings-events' },
  { label: { ar: 'الشركات', en: 'Corporate' }, path: '/corporate-monthly' },
  { label: { ar: 'من نحن', en: 'About' }, path: '/about' },
  { label: { ar: 'تواصل', en: 'Contact' }, path: '/contact' }
];

export const footerNavigation: NavItem[] = [
  { label: { ar: 'إيجار فاخر', en: 'Luxury Rental' }, path: '/fleet' },
  { label: { ar: 'سيارة مع سائق', en: 'Chauffeur' }, path: '/chauffeur' },
  { label: { ar: 'استقبال المطار', en: 'Airport Transfer' }, path: '/airport-transfer' },
  { label: { ar: 'المناسبات والزفاف', en: 'Weddings & Events' }, path: '/weddings-events' },
  { label: { ar: 'الشركات والإيجار الشهري', en: 'Corporate & Monthly' }, path: '/corporate-monthly' },
  { label: { ar: 'توصيل للفنادق', en: 'Hotel Delivery' }, path: '/hotel-delivery' },
  { label: { ar: 'استقبال VIP', en: 'VIP Reception' }, path: '/vip-reception' },
  { label: { ar: 'الأسئلة الشائعة', en: 'FAQ' }, path: '/faq' },
  { label: { ar: 'الشروط والمتطلبات', en: 'Terms & Requirements' }, path: '/terms-requirements' }
];
