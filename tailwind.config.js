module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    // screens: {
    //   sm: "244px",
    //   md: "360px",
    //   lg: "480px",
    //   xl: "640px",
    //   xxl: "1080px",
    // },
    // colors: {
    //   black: "#000000",
    //   red: "#ff3300",
    //   pink: "#ff3399",
    //   purple: " #cc00ff",
    //   blue: " #3333ff",
    //   skyblue: "#00ccff",
    //   darkgray: "#a6a6a6",
    //   lightgray: "#d9d9d9",
    //   white: "#ffffff",
    // },
    colors: {
      blue: {
        light: "#85d7ff",
        DEFAULT: "#1fb6ff",
        dark: "#009eeb",
      },
      pink: {
        light: "#ff7ce5",
        DEFAULT: "#ff49db",
        dark: "#ff16d1",
      },
      gray: {
        darkest: "#1f2d3d",
        dark: "#3c4858",
        DEFAULT: "#c0ccda",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },
    },
  },
  plugins: [],
};
