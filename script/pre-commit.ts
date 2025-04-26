#!/usr/bin/env zx

import { $ } from 'zx';
import type { ProcessOutput } from 'zx/core';

await $`pnpm lint-staged`.catch((out: ProcessOutput) => {
  throw new Error(out.stdout);
});
