// @ts-ignore
import _camelCase from 'lodash/camelCase';

import {ThemeConfig} from './/types';

export const buildSpacingFromTheme = (
    property: string,
    props: {theme: {rubik: ThemeConfig}}
) => {
    // @ts-ignore
    let spacing = space(props[_camelCase(property)])(props);
    if (!spacing) return;
    return `${property}: ${spacing}rem !important;`;
};

export default buildSpacingFromTheme;
