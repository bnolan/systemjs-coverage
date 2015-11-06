module.exports = function (config) {
  config.set({
    coverageReporter: {
      reporters: ['text', 'html']
    },
    
    // {
    //   type : 'json',
    //   subdir : '.',
    //   file : 'coverage-final.json'
    // },

    preprocessors: {
      './build/build.js': ['coverage']
    },

    frameworks: ['jasmine'],

    files: [
      './build/build.js'
    ],

    reporters: ['coverage'],

    browsers: ['Chrome'],

    singleRun: true
  });
};
