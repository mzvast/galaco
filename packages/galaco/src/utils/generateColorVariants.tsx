/**
 * @file [generateColorVariants]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-02-23 13:49:00
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */

import {lighten, tint, readableColor, shade} from 'polished';

export default function generateColorVariants({
    color,
    paletteKey,
    paletteOverrides
}: {
    color: string;
    paletteKey: string;
    paletteOverrides?: ({color}: {color: string}) => {};
}) {
    return {
        [`${paletteKey}100`]: tint(0.7, color),
        [`${paletteKey}200`]: tint(0.5, color),
        [`${paletteKey}300`]: tint(0.3, color),
        [`${paletteKey}400`]: tint(0.1, color),
        [paletteKey]: color,
        [`${paletteKey}500`]: color,
        [`${paletteKey}600`]: shade(0.1, color),
        [`${paletteKey}700`]: shade(0.3, color),
        [`${paletteKey}800`]: shade(0.5, color),
        [`${paletteKey}900`]: shade(0.7, color),
        [`${paletteKey}Tint`]: tint(0.7, color),
        [`${paletteKey}Inverted`]: readableColor(color),
        [`${paletteKey}TintInverted`]: shade(0.5, color),
        ...(paletteOverrides ? paletteOverrides({color}) : {})
    };
}
