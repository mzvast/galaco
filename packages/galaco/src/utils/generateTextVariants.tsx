/**
 * @file [generateTextVariants]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-02-23 13:51:52
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */

import {lighten, tint, readableColor, shade} from 'polished';

export default function generateTextVariants(textColor: string) {
    return {
        text100: lighten(0.2, textColor),
        text200: lighten(0.15, textColor),
        text300: lighten(0.1, textColor),
        text400: lighten(0.05, textColor),
        text: textColor,
        textTint: tint(0.8, textColor),
        textInverted: readableColor(textColor),
        textTintInverted: shade(0.3, textColor)
    };
}
