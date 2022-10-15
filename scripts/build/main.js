import esbuild from 'esbuild';
import path from 'path';

import pkg from '../../package.json' assert { type: 'json' };
import tsconfigFile from '../../tsconfig.json' assert { type: 'json' };
import { createBaseUrlPlugin } from './plugins/base-url-plugin.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const { baseUrl } = tsconfigFile.compilerOptions;

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const baseUrlPlugin = createBaseUrlPlugin({ baseUrl });
const tsconfig = path.resolve('./tsconfig.build.json');

esbuild
  .build({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    entryPoints: [path.join(baseUrl, 'index.ts')],
    bundle: true,
    minify: true,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    outfile: pkg.main,
    plugins: [baseUrlPlugin],
    tsconfig: tsconfig,
  })
  .catch(() => process.exit(1));
