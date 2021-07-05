const execa = require('execa');

const buildLib = [
  {
    title: 'remove lib folder',
    task: () => execa('rm', ['-rf', 'lib'])
  },
  {
  	title: 'generator commonjs version',
  	task: () => execa('node', ['./scripts/build.common.js'])
  },
]

const buildEs6 = [
  {
    title: 'remove es folder',
    task: () => execa('rm', ['-rf', 'es'])
  },
  {
  	title: 'generator es version',
  	task: () => execa('node', ['./scripts/build.es.js'])
  },
]

const buildBrowser = [
  {
    title: 'remove browser folder',
    task: () => execa('rm', ['-rf', 'dist'])
  },
  {
  	title: 'generator browser version',
  	task: () => execa('node', ['./scripts/build.browser.js'])
  },
]

const buildApi = [
  {
    title: 'remove docs folder',
    task: () => execa('rm', ['-rf', 'docs'])
  },
  {
  	title: 'generator api',
  	task: () => execa('npx', ['typedoc'])
  },
]

const buildAllTasks = [
  ...buildLib,
  ...buildEs6,
  ...buildBrowser,
  ...buildApi,
];

module.exports = {
  buildLib,
  buildEs6,
  buildBrowser,
  buildApi,
  buildAllTasks,
}