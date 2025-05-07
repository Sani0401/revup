/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2463',
          dark: '#071a4a',
          light: '#2e4c91'
        },
        secondary: {
          DEFAULT: '#3E92CC',
          dark: '#2778b3',
          light: '#6aabd6'
        },
        accent: {
          DEFAULT: '#44BBA4',
          dark: '#379a86',
          light: '#6ccbb8'
        },
        success: {
          DEFAULT: '#22c55e',
          dark: '#16a34a',
          light: '#4ade80'
        },
        warning: {
          DEFAULT: '#f97316',
          dark: '#ea580c',
          light: '#fb923c'
        },
        error: {
          DEFAULT: '#ef4444',
          dark: '#dc2626',
          light: '#f87171'
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'San Francisco',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif'
        ],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};