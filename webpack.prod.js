const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  output: {
    filename: "[name].[hash].js",
  },
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.((s[ac])|c)ss$/,
          chunks: "all",
          enforce: true,
          // maxSize: 244000
        },
        res: {
          name: "res",
          test: /\.json/,
          chunks: 'all',
          enforce: true,
          maxSize: 244000,
        },
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          // chunks: 'all',
          enforce: true,
          maxSize: 244000,
        },
      },
    },
  },
});
