import esbuild from 'esbuild';
import { readdirSync } from 'fs';
import path from 'path';

import pkg from '../package.json' assert { type: 'json' };
import tsconfig from '../tsconfig.build.json' assert { type: 'json' };

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const {
  compilerOptions: { outDir },
} = tsconfig;

// Root resources folder
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const srcPath = path.resolve(outDir);

/**
 * @type {{absolutePathAliases: Object<string, string>, filters: Array<string>}}
 */
const { absolutePathAliases, filters } = readdirSync(srcPath, { withFileTypes: true }).reduce(
  ({ filters, absolutePathAliases }, { name: directory }) => {
    filters.push(`(^${directory})`);
    absolutePathAliases[directory] = path.join(srcPath, directory);

    return { absolutePathAliases, filters };
  },
  { filters: [], absolutePathAliases: {} },
);
const filter = new RegExp(filters.join('|'));

/**
 * @type {esbuild.Plugin}
 */
const baseUrlPlugin = {
  name: 'base-url-plugin',
  setup(build) {
    build.onResolve({ filter }, ({ path: filePath }) => {
      const [basePath, ...subPath] = filePath.split('/');
      let abs = `${absolutePathAliases[basePath]}/${subPath.join('/')}`;

      if (!abs.endsWith('.js')) {
        abs += '.js';
      }

      return { path: abs };
    });
  },
};

esbuild
  .build({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    entryPoints: [path.join(outDir, 'index.js')],
    bundle: true,
    minify: true,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    outfile: pkg.main,
    plugins: [baseUrlPlugin],
  })
  .catch(() => process.exit(1));
