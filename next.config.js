const withPlugins = require("next-compose-plugins");
const withTypescript = require("@zeit/next-typescript");
const withTM = require("next-transpile-modules");
const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

module.exports = withTypescript(
  withImages(
    withCSS(
      withTM({
        transpileModules: ["bootstrap"],
        webpack(config, options) {
          config.module.rules.push({
            test: /\.(eot|ttf|woff|woff2)$/,
            use: {
              loader: "url-loader",
              options: {
                limit: 100000
              }
            }
          });
          return config;
        }
      })
    )
  )
);