import babelPlugin from 'rollup-plugin-babel'
import resolvePlugin from 'rollup-plugin-node-resolve'
import commonjsPlugin from 'rollup-plugin-commonjs'
import rebasePlugin from 'rollup-plugin-rebase'
import jsonPlugin from 'rollup-plugin-json'

import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    rebasePlugin({ verbose: true }),
    resolvePlugin({
      extensions,
    }),
    babelPlugin({
      extensions,
    }),
    jsonPlugin(),
    commonjsPlugin({
      include: [
        'node_modules/prop-types/**',
      ],
    }),
  ],
  external: [
    'react',
    'react-dom',
    'react-collapse',
    'react-select',
    'styled-components',
    'react-spring',
    'react-spring/renderprops',
  ],
  watch: {
    include: 'src/**',
  },
}
