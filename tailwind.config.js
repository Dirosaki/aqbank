/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          50: '#EEFFF1',
          100: '#D7FFE0',
          200: '#B2FFC3',
          DEFAULT: '#53FF7A',
          400: '#33F560',
          500: '#09DE3A',
          600: '#01B82B',
          700: '#059026',
          800: '#0A7123',
          900: '#0A5D20',
          950: '#00340E',
        },
        secondary: {
          50: '#F2FBFA',
          100: '#D2F5F0',
          200: '#A4EBE2',
          300: '#6FD9D0',
          400: '#41C0B9',
          500: '#28A49F',
          600: '#1E8381',
          DEFAULT: '#1C6968',
          800: '#1A5555',
          900: '#1A4747',
          950: '#0C3436',
        },
        neutral: {
          50: '#F7F7F7',
          100: '#EDEDED',
          200: '#DADADA',
          300: '#C8C8C8',
          400: '#ADADAD',
          500: '#999999',
          600: '#888888',
          700: '#7B7B7B',
          800: '#676767',
          900: '#545454',
          950: '#363636',
        },
        success: {
          50: '#ECFDF4',
          200: '#9AF4C3',
          500: '#0BBE74',
          800: '#03623F',
        },
        info: {
          100: '#E2EBFD',
          200: '#CAD9FB',
          800: '#373C9C',
        },
        warning: {
          200: '#FADFA8',
          400: '#F7CB7A',
          800: '#944818',
        },
        error: {
          50: '#FDF4F3',
          100: '#FBE6E5',
          200: '#F7C3C0',
          500: '#DE5C55',
          800: '#8D2D27',
        },
        'off-white': '#F9F9F9',
        title: '#1A1A1A',
      },
      backgroundImage: {
        login: "url('@/assets/images/login-bg.png')",
        register: "url('@/assets/images/register-bg.png')",
        banner: "url('@/assets/images/dashboard-banner.png')",
      },
      fontFamily: {
        inter: '"Inter", sans-serif',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.scrollbar-webkit': {
          '&::-webkit-scrollbar': {
            width: '5px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#EDEDED',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#999999',
            borderRadius: '99px',
          },
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }),
  ],
}
