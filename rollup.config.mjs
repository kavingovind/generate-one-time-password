import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const babelConfig = {
  babelHelpers: 'bundled',
  extensions: ['.js'],
  exclude: 'node_modules/**',
};

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      exports: 'named',
    },
    external: ['crypto'],
    plugins: [
      resolve(),
      commonjs(),
      babel(babelConfig),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/esm/index.js',
      format: 'esm',
    },
    plugins: [
      resolve(),
      commonjs(),
      babel(babelConfig),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/umd/generate-one-time-password.js',
      format: 'umd',
      name: 'GenerateOneTimePassword',
      exports: 'named',
    },
    plugins: [
      resolve(),
      commonjs(),
      babel(babelConfig),
    ],
  },
];
