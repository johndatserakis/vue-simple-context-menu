import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only'
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const config = {
  input: 'src/index.js',
  output: {
    name: 'VueSimpleContextMenu',
    exports: 'named',
    globals: {
      'vue': 'Vue',
      'v-click-outside': 'vClickOutside'
    }
  },
  plugins: [
    commonjs(),
    resolve(),
    vue({
      css: false,
      compileTemplate: true,
    }),
    css({ output: 'dist/vue-simple-context-menu.css' }),
    buble(),
  ],
  external: ['vue', 'v-click-outside']
};

// Only minify browser (iife) version
if (argv.format === 'iife') {
  config.plugins.push(terser());

  // Here we remove our `external` dependency that we have in this project
  // Be careful with the index here - it has to match any dependency that
  // you want to be built into to the iife output
  config.external.splice(1)
}

export default config;
