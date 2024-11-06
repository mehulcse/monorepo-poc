import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/react-number-format.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/react-number-format.es.js',
      format: 'es',
      sourcemap: true
    }
  ],
  external: ['react'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
      sourceMap: true,
      inlineSources: true
    }),
    nodeResolve(),
    commonjs()
  ]
};
