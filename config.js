System.config({
  baseURL: '.',
  defaultJSExtensions: false,
  transpiler: 'typescript',
  typescriptOptions: {
    'noImplicitAny': false,
    'typeCheck': true,
    'tsconfig': true,
    'target': 'ES6'
  },
  map: {
    'typescript': 'node_modules/typescript/lib/typescript.js',
    'systemjs': 'node_modules/systemjs/dist/system.js',
    'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
    'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js'
  }
});
