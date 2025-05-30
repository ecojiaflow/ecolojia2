/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'eco': {
          leaf: '#6BDF44',
          text: '#1E3D2B',
          glow: '#A3C75A',
          olive: '#555B1B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'eco-gradient': 'linear-gradient(135deg, #A3C75A 0%, #F5F7F0 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'eco': '0 4px 14px 0 rgba(107, 223, 68, 0.15)',
      },
    },
  },
  plugins: [],
};