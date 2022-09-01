/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",   
        darkgreen: '#21331E',
        lightgreen: '#3D8532',
        yellowgreen:'#A99D30',
        yellow: '#ffc82c',
        gray: '#8492a6',
        footer:'#11260E'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ['Roboto', 'sans-serif'],
        silkscreen:['Silkscreen','cursive']
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
