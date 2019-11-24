const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");
const withAssetsImport = require("next-assets-import");

module.exports = withAssetsImport({
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
});
