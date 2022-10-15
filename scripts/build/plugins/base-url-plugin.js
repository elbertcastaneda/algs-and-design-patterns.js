import { readdirSync } from 'fs';
import path from 'path';

/**
 *
 * @param {string} srcPath
 * @returns
 */
const getAliasesAndFilter = srcPath => {
  /**
   * @type {{aliases: Object<string, string>, filters: Array<string>}}
   */
  const { aliases, filters } = readdirSync(srcPath, { withFileTypes: true }).reduce(
    ({ filters, aliases }, { name: directory }) => {
      filters.push(`(^${directory})`);
      aliases[directory] = path.join(srcPath, directory);

      return { aliases, filters };
    },
    { filters: [], aliases: {} },
  );
  const filter = new RegExp(filters.join('|'));

  return { aliases, filter };
};

/**
 *
 * @param {{ baseUrl: string }} options
 */
export const createBaseUrlPlugin = ({ baseUrl }) => {
  const srcPath = path.resolve(baseUrl);
  const { aliases, filter } = getAliasesAndFilter(srcPath);

  /**
   * @type {import('esbuild').Plugin}
   */
  const baseUrlPlugin = {
    name: 'base-url-plugin',
    setup(build) {
      build.onResolve({ filter }, ({ path: filePath }) => {
        const [basePath, ...subPath] = filePath.split('/');
        let abs = `${aliases[basePath]}/${subPath.join('/')}`;

        if (!abs.endsWith('.ts') && !abs.endsWith('.js')) {
          abs += '.ts';
        }

        return { path: abs };
      });
    },
  };

  return Object.freeze(baseUrlPlugin);
};
