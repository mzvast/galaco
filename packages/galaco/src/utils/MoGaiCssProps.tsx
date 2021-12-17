/**
 * @file [MoGaiCssProps] 魔改CssProps
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-07-11 12:14
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
import window from '../utils/window';
export default function(prop: any, plugins?: Function[]) {
    if (typeof prop === 'number') {
        return prop;
    }
    if (typeof prop === 'string') {
        if (plugins) {
            return plugins.reduce((pre, plugin) => plugin(1, pre), prop);
        }
    }
    return prop;
}
