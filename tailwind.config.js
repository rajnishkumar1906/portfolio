/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f8fafc",
          DEFAULT: "#0F172A",
          dark: "#0F172A"
        },
        secondary: {
          light: "#e2e8f0",
          DEFAULT: "#1E293B",
          dark: "#1E293B"
        },
        accent: {
          light: "#60a5fa",
          DEFAULT: "#3B82F6",
          dark: "#3B82F6"
        },
        text: {
          light: "#334155",
          DEFAULT: "#ffffff",
          dark: "#ffffff"
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
} 