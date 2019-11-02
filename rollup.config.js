import nodeResolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript";
import babel from "rollup-plugin-babel";


export default {
  input: "src/index.js",
  external: true,
  output: [
    {
      file: 'es/index.js',
      exports: 'named',
      format: 'esm'
    },
    {
      file: 'lib/index.js',
      exports: 'named',
      format: 'cjs'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    typescript(),
    nodeResolve({
      mainFields: ['module', 'main', "browser"], 
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      modulesOnly: true,
      customResolveOptions: {
        moduleDirectory: 'src'
      }
    }),
  ]
};
