export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#24d4da",
        secondary: "#1b9b9f",
        accent: "#ccff00",
        textDark: "#333333",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-negocio':
          "linear-gradient(to bottom, #24d4da, #24d4da, #24d4da, #24d4da, #24d4da, #0ad9d6, #00ded0, #00e2c9, #00eab1, #19f18e, #5bf560, #8df607)"
      },
      keyframes: {
        waveRise: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        waveWiggle: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        waveRise: "waveRise 0.8s ease-out forwards",
        waveWiggle: "waveWiggle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
