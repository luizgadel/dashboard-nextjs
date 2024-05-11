import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        halborn: {
          50: "#f2fbe7",
          100: "#e5f7c9",
          200: "#c8ed8f",
          300: "#abdd4e",
          400: "#97d827",
          500: "#c5ff01",
          600: "#a7e603",
          700: "#92d901",
          800: "#6cb400",
          900: "#4f8900",
          950: "#1f3300"
        }
        
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
