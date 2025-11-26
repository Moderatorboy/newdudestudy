// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#7c3aed',
          600: '#6d28d9',
        },
      },
      animation: {
        'hue': 'hue 6s linear infinite',
        'float': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        hue: { '0%': { filter: 'hue-rotate(0deg)' }, '100%': { filter: 'hue-rotate(360deg)' } },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
}
