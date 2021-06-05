// import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { babel } from '@rollup/plugin-babel';

export default {
    input: './src/renderer/renderer.ts',
    output: {
        file: './dist/bundle.js',
        format: 'cjs',
    },
    plugins: [
        typescript(), babel({ babelHelpers: 'bundled' })
        // typescript({sourceMap: true}), nodeResolve()
    ]
}