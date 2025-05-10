/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {  // ✅ Correct way to define keyframes
        spinDot: {   // ✅ Name should not contain spaces or hyphens
          "0%": { transform: "rotate(0deg) translateY(-8px)" },
          "100%": { transform: "rotate(360deg) translateY(-8px)" },
        },
      },
      animation: {  // ✅ Add animation utility
        spinDot: "spinDot 1s linear infinite",
      },
      colors: {
        customOrange: {
          50: '#fee9e6',
          100: '#fdd5cf',
          200: '#faaa9b',
          300: '#f57f67',
          400: '#f14c2e', // Base shade
          500: '#da4529',
          600: '#be3a22',
          700: '#9a2e1b',
          800: '#742214',
          900: '#4e160d',
        },
        night_dark: '#1D1D1D', // ✅ Custom color
      },
      boxShadow: {
        custom: '3px 2px 20px 5px rgba(0, 0, 0, 0.2), 0px -2px 10px 1px rgba(0, 0, 0, 0.14), -2px -1px 14px 2px rgba(0, 0, 0, 0.12)',
        custombox: '6px 5px 5px 0px rgba(72, 77, 77, 0.3)',
        custombox2: '6px 5px 5px 0px rgb(10 223 223 / 30%)',
        custombox3: '-1px -1px #0000, -1px -1px #0000, 0px 0px 0px 4px #1976d2',
        admin: '-1px -1px #0000, -1px -1px #0000, 0px 0px 0px 4px #ff0000',
      },
    },
  },
  plugins: [],
};
