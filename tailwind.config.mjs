/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    // Mobile-first responsive breakpoints
    screens: {
      'sm': '480px',   // Mobile large / phablets
      'md': '768px',   // Tablets
      'lg': '1024px',  // Laptops
      'xl': '1280px',  // Desktop
      '2xl': '1536px', // Large desktop
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DD5903',
          50: '#FFEEE5',
          100: '#FFDCC9',
          200: '#FFB893',
          300: '#FF955D',
          400: '#FF7127',
          500: '#DD5903',
          600: '#B74802',
          700: '#913902',
          800: '#6B2A01',
          900: '#451B01',
        },
        secondary: {
          DEFAULT: '#111111',
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#C2C2C2',
          300: '#A3A3A3',
          400: '#858585',
          500: '#666666',
          600: '#4D4D4D',
          700: '#333333',
          800: '#1A1A1A',
          900: '#111111',
        },
        body: '#6E777D',
        heading: '#111111',
      },
      fontFamily: {
        primary: ['Arapey', 'serif'],
        secondary: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        // Responsive typography - mobile-first approach
        // Base sizes optimized for mobile (320px-479px)
        'display': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],      // 40px mobile → 80px desktop
        'h1': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],             // 32px mobile → 66px desktop
        'h2': ['1.75rem', { lineHeight: '1.25' }],                                   // 28px mobile → 48px desktop
        'h3': ['1.5rem', { lineHeight: '1.3' }],                                     // 24px mobile → 36px desktop
        'h4': ['1.25rem', { lineHeight: '1.4' }],                                    // 20px mobile → 30px desktop
        'h5': ['1.125rem', { lineHeight: '1.5' }],                                   // 18px mobile → 24px desktop
        'h6': ['1rem', { lineHeight: '1.5' }],                                       // 16px mobile → 20px desktop
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],                              // 18px mobile → 22px desktop
        'body': ['1rem', { lineHeight: '1.7' }],                                     // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],                              // 14px
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '62': '15.5rem',
        '68': '17rem',
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.btn': {
          '@apply inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 font-secondary font-semibold text-sm sm:text-base rounded-full transition-all duration-300 relative overflow-hidden': {},
          '@apply focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/30': {},
          '@apply active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none': {},
        },
        '.btn-primary': {
          '@apply btn bg-primary text-white hover:bg-primary-600 hover:shadow-xl hover:-translate-y-1 hover:scale-105': {},
          '@apply focus-visible:ring-primary/40 active:shadow-lg': {},
        },
        '.btn-secondary': {
          '@apply btn border-2 border-secondary text-secondary hover:bg-secondary hover:text-white hover:shadow-lg hover:-translate-y-0.5': {},
          '@apply focus-visible:ring-secondary/30 active:shadow-md': {},
        },
        '.btn-white': {
          '@apply btn bg-white text-secondary hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5': {},
          '@apply focus-visible:ring-gray-300 active:bg-gray-100': {},
        },
        '.btn-lg': {
          '@apply px-10 py-5 text-lg': {},
        },
        '.btn-sm': {
          '@apply px-6 py-3 text-sm': {},
        },
        '.container-custom': {
          '@apply max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8': {},
        },
        '.container-wide': {
          '@apply max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8': {},
        },
        '.section-padding': {
          '@apply py-12 sm:py-16 md:py-20 lg:py-28 xl:py-36': {},
        },
        '.section-padding-sm': {
          '@apply py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20': {},
        },
        '.card': {
          '@apply bg-white rounded-2xl overflow-hidden transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/20': {},
        },
        '.card-hover': {
          '@apply card hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer': {},
          '@apply active:scale-100 active:translate-y-0': {},
        },
        '.heading-primary': {
          '@apply font-primary font-medium text-heading': {},
        },
        '.heading-secondary': {
          '@apply font-secondary font-bold text-heading': {},
        },
        '.text-body': {
          '@apply font-secondary': {},
          color: '#6E777D',
        },
      });
    },
  ],
};
