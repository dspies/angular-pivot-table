module.exports = function (config) {
  config.set({

    basePath: './',

    files: [
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/jquery-ui/jquery-ui.js',
      'app/bower_components/pivottable/dist/pivot.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
