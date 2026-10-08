/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          crimson: '#F0535C',
          coral: '#F0535C',
          blue: {
            DEFAULT: '#4B70F5',
            light: '#3B82F6',
            hover: '#2563EB',
          },
          amber: {
            DEFAULT: '#EBC307',
            dark: '#B57309',
          },
          purple: {
            glow: '#7030EF',
            magenta: '#DB1FFF',
          },
        },
        light: {
          bg: '#F3F4F6',
          surface: '#FFFFFF',
          input: '#F8FAFC',
          text: '#0F172A',
          muted: '#64748B',
          subtle: '#A4A4A4',
          border: '#E5E7EB',
          divider: '#DBE3EE',
        },
        dark: {
          bg: '#111315',
          splash: '#000000',
          surface: '#202020',
          surfaceAlt: '#2C2C2C',
          input: '#202020',
          text: '#FFFFFF',
          muted: '#A4A4A4',
          secondary: '#C8C2E8',
          border: 'rgba(255, 255, 255, 0.10)',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'light-card': '0 20px 40px rgba(15, 23, 42, 0.08)',
        'dark-card': '0 20px 40px rgba(0, 0, 0, 0.45)',
        'glow-purple': '0 0 25px rgba(112, 48, 239, 0.4)',
        'glow-blue': '0 0 25px rgba(75, 112, 245, 0.35)',
        'glow-crimson': '0 0 25px rgba(240, 83, 92, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
