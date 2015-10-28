System.config({
  defaultJSExtensions: false,
  transpiler: 'typescript',
  typescriptOptions: {
    'noImplicitAny': false,
    'typeCheck': true,
    'tsconfig': true
  },
  // packages: {
  //   'app': {
  //     'defaultExtension': 'ts'
  //   }
  // },
  map: {
    'typescript': 'node_modules/typescript/lib/typescript.js',
    'systemjs': 'node_modules/systemjs/dist/system.js',
    'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
    'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js'
  }
});
