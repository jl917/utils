const path = require('path');
const buildOptions = require('./buildOptions');
const walkSync = require('./walkSync');

const entryPoints = [];

walkSync(path.resolve('./src/'), (filePath) => {
  const isFile = /\.(js|ts)$/.test(filePath);
  if (isFile) {
    entryPoints.push(filePath.replace(path.resolve('./'), '.'));
  }
});
require('esbuild').buildSync({
  ...buildOptions,
  define: {
    BROWSER: false,
    NODE: true,
  },
  entryPoints,
  bundle: false,
  platform: 'node',
  target: ['node10.4'],
  outdir: 'es',
})

