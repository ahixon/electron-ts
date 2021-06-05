import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

// might be needed for tsx support
// import { babel } from '@rollup/plugin-babel';
//
// babel({
//   presets: ["@babel/preset-react"],
// }),
//
// in that case use https://babeljs.io/docs/en/babel-plugin-transform-inline-environment-variables/
// instaead of replace :)

export default {
    input: './src/renderer/renderer.ts',
    output: {
        file: './dist/bundle.js',
        format: 'iife',
    },
    plugins: [
        nodeResolve(), typescript(), commonjs({ include: 'node_modules/**' }), replace({
            /* react's main index.js entrypoint has this:
             *   if (process.env.NODE_ENV === 'production') {
             *     module.exports = require('./cjs/react.production.min.js');
             * 
             * but we don't have process inside the renderer process
             * let's replace it with production here
             */

            'process.env.NODE_ENV': process.env.NODE_ENV || JSON.stringify('production')
        })
    ],
}