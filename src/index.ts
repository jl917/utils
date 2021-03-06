import * as array from './array';
import * as common from './common';
import * as string from './string';
import * as match from './match';
import * as number from './number';
import * as fn from './function';
// browser
import * as browser from './browser';
// node
import * as node from './node';

const index: Index = {
  string,
  match,
  number,
  common,
  array,
  fn,
}

if (BROWSER) {
  index.browser = browser;
}

if (NODE) {
  index.node = node;
}

export default index;
