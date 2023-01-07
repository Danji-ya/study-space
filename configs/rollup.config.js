import fs from 'fs';
import path from 'path';
import readPkgUp from 'read-pkg-up';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const { packageJson } = readPkgUp.sync({
	cwd: fs.realpathSync(process.cwd()),
});

const getExternals = (pkg) => {
	const defaultExternal = [/@babel\/runtime/];
	const pkgDependencies = Object.keys(pkg.dependencies || {});
	const pkgPeerDependencies = Object.keys(pkg.peerDependencies || {});
	
	const externals = [...defaultExternal, ...pkgDependencies, ...pkgPeerDependencies];

	return externals;
} 

const input = process.env.INPUT_FILE; // 각 workspace의 entry

function getRollupConfig(input, output, format) {
  const defaultOutputConfig = {
    format, exports: 'named', sourcemap: true,
  };

  const esOutputConfig = {
    ...defaultOutputConfig,
    dir: output,
  };
  const cjsOutputConfig = {
    ...defaultOutputConfig,
    file: output,
  };

  const config = {
    input,
    external: getExternals(packageJson),
    output: [
      format === 'es' ? esOutputConfig : cjsOutputConfig,
    ],
    plugins: [
      postcss({
        extensions: ['.scss', '.css'],
        modules: {
          generateScopedName: "[name]__[local]___[hash:base64:5]",
		      hashPrefix: "prefix",
          exportGlobals: true,
        },
        autoModules: false,
        minimize: true,
      }),
      resolve({ // Node resolve 알고리즘 을 사용하여 써드파티 모듈을 사용 가능하게 해주는 플러그인
        preferBuiltins: false,
        extensions,
      }),
      commonjs({
        ignoreGlobal: true,
        include: /\/node_modules\//,
      }),
      babel({ // rollup에서 babel 을 사용 할 수 있게 해주는 플러그인
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
        plugins: [
          '@babel/plugin-transform-runtime',
        ],
        babelHelpers: 'runtime',
        exclude: path.join(__dirname, 'node_modules/**'),
        extensions,
      }),
      terser({
        maxWorkers: 4
      }),
    ],
    preserveModules: format === 'es',
  };

  return config;
}

export default [
  getRollupConfig(input, packageJson.main, 'cjs'),
  getRollupConfig(input, 'dist/esm', 'es'),
];