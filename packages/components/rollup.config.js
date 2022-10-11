import pj from "./package.json";
import swc from "rollup-plugin-swc";
import typescript from '@rollup/plugin-typescript'

export default {
  input: "index.ts",
  output: {
    file: pj.module,
    format: "esm",
  },
  plugins: [
    swc({
      rollup: {
        exclude: "path/to/exclude/",
      },
      jsc: {
        parser: {
          syntax: "typescript",
        },
        target: "es2018",
      },
    }),
    typescript({
        tsconfig: './tsconfig.json'
    }),
  ],
};
