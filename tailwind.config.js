/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animationDelay: {
        2000: "2000ms",
      },
      animationDuration: {
        2000: "2000ms",
      },
      animationIteration: {
        "10x": "10",
      },
      animationTiming: {
        cubic: "cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  variants: {
    animationDelay: ["responsive"],
    animationDuration: ["responsive"],
    animationIteration: ["responsive"],
    animationTiming: ["responsive"],
    animationDirection: ["responsive"],
    animationFillMode: ["responsive"],
    animationPlayState: ["responsive"],
  },
  
  plugins: [require("tailwindcss-animation")],
};
