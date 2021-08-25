import {
  version
} from './package.json';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import {
  terser
} from 'rollup-plugin-terser';
export default {
  input: ['./src/main.js'],
  output: [{
    file: './dist/main.js',
    format: 'umd',
    name: 'hubaryPlugin',
    banner: '/* version ' + version + ' | (c) 2021 by hubary */', // banner、footer 字符串以 前置/追加 到文件束(bundle)
    footer: '/* follow me on gitee! hubary */',
  }, ],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
    }),
    terser(),
  ],
};
