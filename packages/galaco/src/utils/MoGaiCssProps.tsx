/**
 * @file [MoGaiCssProps] 魔改CssProps
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-07-11 12:14
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
import window from '../utils/window';
export default function(prop: any) {
    if (typeof prop === 'number') {
        return prop;
    }
    if (typeof prop === 'string') {
        // 兼容plugin
        const plugin = window['galacoMoGaiCssPlugin'];
        if (plugin && typeof plugin === 'function') {
            return plugin(1, prop);
        }
    }
    return prop;
}
