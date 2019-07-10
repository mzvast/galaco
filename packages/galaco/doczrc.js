/**
 * @file [doczrc]
 * @author [mzvast]
 * @email [mzvast@gmail.com']
 * @create date 2019-02-21 16:29:48
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
import pkg from './package.json';
const libName = pkg.name;
export default {
    typescript: true,
    wrapper: 'src/docs/wrapper',
    codeSandbox: false,
    base: `/${libName}/`,
    ordering: 'ascending',
    description: pkg.description,
};
