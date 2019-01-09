import babel from "rollup-plugin-babel";

import pkg from "./package.json";

export default {
  input: "./src/lib.js",
  output: [
    {
      file: "dist/lib.es.js",
      format: "es"
    },
    {
      file: "dist/lib.cjs.js",
      format: "cjs"
    }
  ],
  plugins: [
    babel({
      exclude: "node_modules/**"
    })
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ]
};
