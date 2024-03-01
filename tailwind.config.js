module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths as needed
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "2rem",
      Large:"6rem",
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".25em",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
    colors: {
      'blue': '#3E3CF5',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white':'#fff',
      'black' : '#000',
      'purple' : '#B13EF8'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
