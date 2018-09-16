const webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      'src/**/*.spec.ts'
    ],

    preprocessors: {
      'src/**/*.spec.ts': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    reporters: ['spec'],

    browsers: ['Chrome']
  })
};