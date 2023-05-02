/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],

  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Classy: ["Classy"],
      Magnificent: "Magnificent"
      
    },
    extend: {
      colors: {
        Teal: "#B68D40",
        TealHover: "#DAA94C",
        HummingBird: "#d1f1ee",
        yellow: "#e4d63b",
        Solitude: "faece6",
        gray: "#4B4B4C",
        blackText: "#0c1c19",
        footer: "#B68D40"

      },

      backgroundImage: {
        'subtle': "url('./assets/subtle1.svg')",
        'bg': "url('./assets/bg.svg')",
        'bg2': "url('./assets/bg2.svg')",
        'blob': "url('./assets/blob2.svg')",
        
      },
      

      animation: {
        slide: "slide 35s linear infinite"
      },
      keyframes: {
        slide: {
          "0%,100%" : {transform: "translateX(50%)"},
          "50%": {transform: "translateX(-50%)"}
        }
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}