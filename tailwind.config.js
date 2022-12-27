/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-mobile": "url('/home/background-home-mobile.jpg')",
        "home-tablet": "url('/home/background-home-tablet.jpg')",
        "home-desktop": "url('/home/background-home-desktop.jpg')",
      },
      colors: {
        "dark-blue": "#0B0D17",
        "light-gray": "#D0D6F9",
      },
    },
    fontFamily: {
      // barlow: "url('/assets/fonts/Barlow/BarlowCondensed-Regular.ttf')",
      barlow: "barlow",
      bellefair: "bellefair",
    },
  },
  variants: {},
  plugins: [],
};
