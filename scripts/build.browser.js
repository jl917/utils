const buildOptions = require('./buildOptions');

require('esbuild').buildSync({
  ...buildOptions,
  define: {
    BROWSER: true,
    NODE: false,
  },
  entryPoints: ['./src/index.ts'],
  bundle: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  outfile: 'dist/jutils.min.js',
  format: 'iife',
  globalName: 'jutil',
})