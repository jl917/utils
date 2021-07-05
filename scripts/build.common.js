const buildOptions = require('./buildOptions');

require('esbuild').buildSync({
  ...buildOptions,
  define: {
    BROWSER: false,
    NODE: true,
  },
  entryPoints: ['./src/index.ts'],
  bundle: true,
  platform: 'node',
  target: ['node10.4'],
  outfile: 'lib/index.js',
})