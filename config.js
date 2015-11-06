System.config({
  transpiler: 'typescript',

  packages: {
    'src': {
      'defaultExtension': 'ts'
    }
  },

  map: {
    'typescript': 'node_modules/typescript/lib/typescript.js'
  }
  // map: {
  //   'babel': 'node_modules/babel-core/lib/api/browser.js',
  //   'typescript': 'node_modules/typescript/lib/typescript.js',
  //   'systemjs': 'node_modules/systemjs/dist/system.js',
  //   'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
  //   'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js'
  // }
});
