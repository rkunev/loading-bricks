import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
    output: {
        file: 'docs/bundle.js',
        format: 'iife',
    },
    plugins: [
        resolve(),
        commonjs(),
        production && uglify(), // minify, but only in production
    ],
};
