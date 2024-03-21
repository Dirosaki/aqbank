/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
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
          200: '#9AF4C3',
          800: '#03623F',
        },
        info: {
          200: '#CAD9FB',
          800: '#373C9C',
        },
        warning: {
          200: '#FADFA8',
          800: '#944818',
        },
        error: {
          200: '#F7C3C0',
          800: '#8D2D27',
        },
        'off-white': '#F9F9F9',
      },
    },
  },
  plugins: [],
}
