module.exports = function (config) {
  config.set({
    coverageReporter: {
      reporters: [
          { type: 'html' },
          { type: 'text-summary' }
      ]
    },

    preprocessors: {
      './build/build.js': ['coverage']
    },

    // plugins: ['karma-systemjs'],
    basePath: '',

    frameworks: ['systemjs', 'jasmine'],

    files: [
      './build/build.js'
    ],

    reporters: ['progress', 'coverage'],
    // port: 9876,
    // colors: true,
    // logLevel: config.LOG_DEBUG,
    // autoWatch: false,

    browsers: ['Chrome']
  });
};
