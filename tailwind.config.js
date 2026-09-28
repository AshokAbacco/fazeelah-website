/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Heritage theme — forest green, ivory paper, terracotta accent
        forest: {
          DEFAULT: '#173F35',
          950: '#0B211B',
          900: '#0F2B24',
          800: '#143830',
          700: '#1F5446',
          600: '#2E6B5A',
          100: '#DCE8E1',
        },
        sage: { DEFAULT: '#E7EEE9', dark: '#D3E0D7' },
        ivory: { DEFAULT: '#FBF9F4', deep: '#F3EEE3' },
        clay: { DEFAULT: '#B95F3A', dark: '#9C4B2B', light: '#F2DDD0' },
        ink: { DEFAULT: '#18221F', soft: '#55625E' },
        whatsapp: '#25D366',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: { site: '1240px' },
      boxShadow: {
        card: '0 1px 2px rgba(24,34,31,0.04), 0 8px 24px -12px rgba(24,34,31,0.12)',
        lift: '0 24px 48px -20px rgba(15,43,36,0.35)',
        ring: '0 0 0 1px rgba(23,63,53,0.08)',
      },
      keyframes: {
        radar: {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '100%': { transform: 'scale(1.9)', opacity: '0' },
        },
        ping2: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        radar: 'radar 2.2s cubic-bezier(0.2, 0.6, 0.35, 1) infinite',
        blink: 'ping2 1.8s ease-in-out infinite',
        bob: 'bob 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
