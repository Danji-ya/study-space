import fs from 'fs';
import readPkgUp from 'read-pkg-up';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

const excludePath = 'node_modules/**';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const { packageJson: pkg } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
});

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
    external: ['react'],
    output: [
      format === 'es' ? esOutputConfig : cjsOutputConfig,
    ],
    plugins: [
      peerDepsExternal(), // peerDependency로 설치된 라이브러리의 코드가 번들링된 결과에 포함되지 않고, import 구문으로 불러와서 사용할 수 있게 해주는 플러그인
      commonjs(), // cjs로 작성된 모듈을 ES6로 트랜스파일링 해주는 플러그인
      resolve({ // Node resolve 알고리즘 을 사용하여 써드파티 모듈을 사용 가능하게 해주는 플러그인
        preferBuiltins: false,
        extensions,
      }),
      babel({ // rollup에서 babel 을 사용 할 수 있게 해주는 플러그인
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
        ],
        plugins: [
          '@babel/plugin-transform-runtime',
        ],
        babelHelpers: 'runtime',
        exclude: excludePath,
        extensions,
      }),
    ],
    preserveModules: format === 'es',
  };

  return config;
}

export default [
  getRollupConfig(input, pkg.main, 'cjs'),
  getRollupConfig(input, 'dist/esm', 'es'),
];