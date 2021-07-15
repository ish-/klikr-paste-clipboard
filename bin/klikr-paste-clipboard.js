#!/usr/bin/env node

import { pasteFromToCb } from '../lib/index.js';

(async function main () {
  await pasteFromToCb();
})();