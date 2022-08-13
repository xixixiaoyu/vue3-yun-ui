module.exports = {
  // Tailwind 应用范围
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      height: {
        header: "72px",
        main: "calc(100vh - 72px)",
      },
      fontSize: {
        xs: ["0.25rem", "0.35rem"],
        sm: ["0.35rem", "0.45rem"],
        base: ["0.42rem", "0.52rem"],
        lg: ["0.55rem", "0.65rem"],
        xl: ["0.65rem", "0.75rem"],
      },
      boxShadow: {
        "l-white": "-10px 0 10px white",
        "l-zinc": "-10px 0 10px #18181b",
      },
      colors: {
        main: "#f44c58",
        "hover-main": "#f32836",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};