/**
 * @file [rollup.config]
 * @author [mzvast]
 * @email [mzvast@gmail.com']
 * @create date 2019-02-26 17:16:18
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
export default {
    input: 'src/index.tsx',
    output: [
        {
            file: pkg.main,
            format: 'cjs'
        },
        {
            file: pkg.module,
            format: 'es'
        }
    ],
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.devDependencies || {}),
        ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
        typescript({
            typescript: require('typescript')
        })
    ]
};
