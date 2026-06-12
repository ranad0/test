import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#070706',
        graphite: '#141414',
        charcoal: '#20201E',
        ivory: '#F4EFE6',
        champagne: '#C8A45D',
        bronze: '#8A6A3D',
        silver: '#B8B8B8',
        mist: '#FAF7F0',
        whatsapp: '#25D366'
      },
      fontFamily: {
        arabic: ['"IBM Plex Sans Arabic"', '"Noto Kufi Arabic"', 'Tahoma', 'Arial', 'sans-serif'],
        latin: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif']
      },
      boxShadow: {
        luxury: '0 24px 80px rgba(0, 0, 0, 0.38)',
        gold: '0 0 0 1px rgba(200,164,93,0.18), 0 20px 60px rgba(0,0,0,0.28)'
      },
      backgroundImage: {
        'gold-radial': 'radial-gradient(circle at 50% 0%, rgba(200,164,93,0.18), rgba(7,7,6,0) 48%)',
        'section-glow': 'radial-gradient(circle at 80% 20%, rgba(200,164,93,0.12), transparent 34%), radial-gradient(circle at 20% 80%, rgba(138,106,61,0.12), transparent 32%)'
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        reveal: 'reveal 700ms ease both',
        floatSlow: 'floatSlow 7s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
