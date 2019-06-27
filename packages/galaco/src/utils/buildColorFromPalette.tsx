// @ts-ignore
import _camelCase from 'lodash/camelCase';

import {ThemeConfig} from './types';

export const buildColorFromPalette = (property: string) => ({
    theme,
    ...props
}: {
    theme: ThemeConfig;
}) => {
    // @ts-ignore
    let color = theme.palette[props[_camelCase(property)]];
    if (typeof color === 'function') {
        color = color(props);
    }
    if (!color) return;
    return `${property}: ${color} !important;`;
};

export default buildColorFromPalette;
