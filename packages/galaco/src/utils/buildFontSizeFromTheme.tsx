// @ts-ignore
import _camelCase from 'lodash/camelCase';

import {ThemeConfig} from './/types';

export const buildFontSizeFromTheme = (
    property: string,
    {theme, ...props}: {theme: {rubik: ThemeConfig}}
) => {
    // @ts-ignore
    let size = theme.rubik.fontSizes[props[_camelCase(property)]];
    if (!size) return;
    return `${property}: ${size}rem !important;`;
};

export default buildFontSizeFromTheme;
