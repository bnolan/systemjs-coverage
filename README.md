# systemjs-coverage

Minimal app using typescript, systemjs, karma and istanbul to generate test coverage

## Bug with systemjs-builder and typescript

If you run `gulp`, it will output the compiled source and source map. It seems that you cannot generate a typescript sourcemap using systemjs-builder. :'(

Sourcemap output:

    {"version":3,"sources":[],"names":[],"mappings":"","file":"undefined"}
