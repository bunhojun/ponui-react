import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";
import cssVariables from "postcss-css-variables";
import pkg from "./package.json";

export default [
  {
    input: "./src/index.ts",
    output: {
      dir: "lib",
      format: "cjs",
    },
    external: [...Object.keys(pkg.devDependencies || {})],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      postcss({
        extensions: [".css"],
        plugins: [autoprefixer(), postcssImport(), cssVariables()],
      }),
    ],
  },
  {
    input: "./src/assets/css/index.css",
    output: {
      file: "lib/index.css",
      format: "esm",
    },
    plugins: [
      postcss({
        extensions: [".css"],
        extract: true,
        plugins: [autoprefixer(), postcssImport(), cssVariables()],
      }),
    ],
  },
];
