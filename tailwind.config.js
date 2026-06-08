/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1F3B',
        gold:'#D4AF37',
         roseGold: {
          50: '#FDF5F6',
          100: '#F9E6E8',
          200: '#F0C9CD',
          300: '#E7ACB2',
          400: '#D58A92',
          500: '#B76E79',      // Main rose gold
          600: '#A35C66',
          700: '#8F4A53',
          800: '#7B3840',
          900: '#67262D',
        },
        lightGray: '#F5F7FA',
        darkText: '#1A1A1A',
        mutedText: '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}