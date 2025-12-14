/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fbf8f1',
          100: '#f5edd9',
          200: '#ead8b5',
          300: '#dec28e',
          400: '#d2ab66',
          500: '#c6964a',
          600: '#aa7839',
          700: '#885c30',
          800: '#6f4a2d',
          900: '#5b3d28',
        },
        primary: {
          900: '#1a1a1a', 
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    }
  },
  plugins: [],
}
