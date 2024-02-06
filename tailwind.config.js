/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        //para carregar a fonte inter e caso ela não seja possível carregar qualquer fonte sans-serif do sistema
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

