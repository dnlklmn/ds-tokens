const { filterTokensByType } = require("./fns");
const tokens = require("./output/global.json");

const colors = filterTokensByType("color", tokens);
const fontFamily = filterTokensByType("fontFamily", tokens);

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
    fontFamily,
  },
  variants: {},
  plugins: [],
};
