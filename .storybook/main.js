const path = require("path");
module.exports = {
  stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "node_modules",
    ]

    return config;
  }
};
