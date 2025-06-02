/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azulClaro: '#EAF3FB',
        azulFuturo: '#1A73E8',
        azulRoyal: '#2563EB',
        ciano: '#00C9A7',
        cinzaSuave: '#E5EAF1',
        branco: '#F5F7FA',
      },
      backgroundImage: {
        'gradiente-claro': 'linear-gradient(135deg, #EAF3FB 0%, #F5F7FA 100%)',
        'gradiente-azul': 'linear-gradient(135deg, #EAF3FB 0%, #B3D8F7 100%)',
        'gradiente-ciano': 'linear-gradient(135deg, #EAF3FB 0%, #C1FFF7 100%)',
      },
    },
  },
  plugins: [],
} 