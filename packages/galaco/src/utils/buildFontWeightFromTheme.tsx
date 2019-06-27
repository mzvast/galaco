// @ts-ignore
import _camelCase from 'lodash/camelCase';

import {ThemeConfig} from './/types';

export const buildFontWeightFromTheme = (
    property: string,
    {theme, ...props}: {theme: {rubik: ThemeConfig}}
) => {
    // @ts-ignore
    let weight = theme.rubik.fontWeights[props[_camelCase(property)]];
    if (!weight) return;
    return `${property}: ${weight} !important;`;
};

export default buildFontWeightFromTheme;
