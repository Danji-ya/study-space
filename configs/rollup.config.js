import fs from "fs";
import path from "path";
import readPkgUp from "read-pkg-up";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const { packageJson } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
});

const containsPattern = (arr, pkg) => {
  return (
    arr &&
    arr.some((pattern) => {
      if (pattern instanceof RegExp) return pattern.test(pkg);
      return pkg.startsWith(pattern);
    })
  );
};

const external = (pkg) => {
  const defaultExternal = [/@babel\/runtime/];
  const pkgDependencies = Object.keys(packageJson.dependencies || {});
  const pkgPeerDependencies = Object.keys(packageJson.peerDependencies || {});
  const externals = [
    ...defaultExternal,
    ...pkgDependencies,
    ...pkgPeerDependencies,
  ];

  const isExternal = containsPattern(externals, pkg);

  return isExternal;
};

const input = process.env.INPUT_FILE; // 각 workspace의 entry

function getRollupConfig(input, output, format) {
  const defaultOutputConfig = {
    format,
    sourcemap: true,
  };

  const esOutputConfig = {
    ...defaultOutputConfig,
    preserveModules: true,
    preserveModulesRoot: path.dirname(input),
    exports: "auto",
    dir: output,
  };
  const cjsOutputConfig = {
    ...defaultOutputConfig,
    preserveModules: false,
    exports: "named",
    file: output,
  };

  const config = {
    input,
    external,
    output: [format === "es" ? esOutputConfig : cjsOutputConfig],
    plugins: [
      postcss({
        extensions: [".scss", ".css"],
        modules: {
          generateScopedName: "[name]__[local]___[hash:base64:5]",
          hashPrefix: "prefix",
          exportGlobals: true,
        },
        autoModules: false,
        minimize: true,
      }),
      resolve({
        // Node resolve 알고리즘 을 사용하여 써드파티 모듈을 사용 가능하게 해주는 플러그인
        preferBuiltins: false,
        extensions,
      }),
      commonjs({
        ignoreGlobal: true,
        include: /\/node_modules\//,
      }),
      babel({
        // rollup에서 babel 을 사용 할 수 있게 해주는 플러그인
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        plugins: ["@babel/plugin-transform-runtime"],
        babelHelpers: "runtime",
        exclude: path.join(__dirname, "node_modules/**"),
        extensions,
      }),
      terser({
        maxWorkers: 4,
      }),
    ],
    preserveModules: format === "es",
  };

  return config;
}

export default [
  getRollupConfig(input, packageJson.main, "cjs"),
  getRollupConfig(input, "dist/esm", "es"),
];
