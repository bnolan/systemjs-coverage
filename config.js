System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    'sourceMap': true
  },
  packages: {
    'src': {
      'defaultExtension': 'ts'
    }
  },
  map: {
    'typescript': 'node_modules/typescript/lib/typescript.js',
    'systemjs': 'node_modules/systemjs/dist/system.js',
    'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
    'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js'
  }
});
