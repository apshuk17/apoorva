const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      boxShadow: {
        "custom-one": "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        "custom-two":
          "inset 21px 21px 19px #181a1d, inset -21px -21px 19px #202225",
        "custom-inner":
          "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
      },
      keyframes: {
        popin: {
          "0%": { opacity: 0, transform: "scale(0.8)" },
          "100%": { opacity: 1, transform: "none" },
        },
        fadein: {
          "0%": { opacity: 0, transform: "rotate(-5deg)" },
          "100%": { opacity: 1, transform: "rotate(0)" },
        },
        sneakin: {
          "0%": { transform: "translateX(1300px)" },
          "100%": { transform: "none" },
        }
      },
      animation: {
        "popin-slow": "popin 1s 0.5s ease-out forwards",
        "popin-slow-sm": "popin 1s 1.5s ease-out forwards",
        "popin-slow-md": "popin 1s 2.5s ease-out forwards",
        "popin-slow-lg": "popin 1s 3s ease-out forwards",
        "popin-slow-xl": "popin 1s 4s ease-out forwards",
        "fadein-no-delay": "fadein 1s ease-out forwards",
        fadein: "fadein 0.5s 0.5s ease-out forwards",
        sneakin: "sneakin 2s ease-out forwards"
      },
      backgroundImage: {
        "gradient-light": "linear-gradient(145deg, #1e2024, #23272b)",
        "gradient-dark": "linear-gradient(to right bottom, #212428, #16181c)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
