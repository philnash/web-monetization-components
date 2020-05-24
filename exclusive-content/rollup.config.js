// rollup.config.js
import pkg from "./package.json";
import babel from "@rollup/plugin-babel";

export default [
  {
    input: "src/index.js",
    output: [
      {
        name: "WebMonetizationExclusiveContent",
        file: pkg.browser,
        format: "umd",
      },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**", // only transpile our source code
      }),
    ],
  },
  {
    input: "src/index.js",
    output: [
      { file: pkg.module, format: "es" },
      { file: pkg.main, format: "cjs" },
    ],
  },
];
