import {darken, lighten, shade} from 'polished';
// @ts-ignore
import _get from 'lodash/get';
import generateColorVariants from '../../utils/generateColorVariants';
import generateTextVariants from '../../utils/generateTextVariants';
const defaultPalette: {[key: string]: string} = {
    text: '#435a6f',
    primary: '#444bc9',
    secondary: '#793fb2',
    info: '#35709e',
    success: '#2c8453',
    danger: '#c9444d',
    warning: '#f2a100'
};

export default (overrides: any) => ({
    ...defaultPalette,

    ...generateTextVariants(
        _get(overrides, 'palette.text') || defaultPalette.text
    ),

    black: 'black',
    black500: 'black',

    white: 'white',
    white500: 'white',
    white600: darken(0.03, 'white'),
    white700: darken(0.05, 'white'),
    white800: darken(0.1, 'white'),
    white900: darken(0.15, 'white'),

    gray100: lighten(0.2, 'gray'),
    gray200: lighten(0.15, 'gray'),
    gray300: lighten(0.1, 'gray'),
    gray400: lighten(0.05, 'gray'),
    gray: 'gray',
    gray500: 'gray',
    gray600: darken(0.05, 'gray'),
    gray700: darken(0.1, 'gray'),
    gray800: darken(0.15, 'gray'),
    gray900: darken(0.2, 'gray'),

    default: darken(0.01, 'white'),
    defaultInverted: '#435a6f',

    ...generateColorVariants({
        paletteKey: 'primary',
        color: _get(overrides, `palette.primary`) || defaultPalette.primary
    }),
    ...generateColorVariants({
        paletteKey: 'secondary',
        color: _get(overrides, `palette.secondary`) || defaultPalette.secondary
    }),
    ...generateColorVariants({
        paletteKey: 'info',
        color: _get(overrides, `palette.info`) || defaultPalette.info
    }),
    ...generateColorVariants({
        paletteKey: 'success',
        color: _get(overrides, `palette.success`) || defaultPalette.success
    }),
    ...generateColorVariants({
        paletteKey: 'danger',
        color: _get(overrides, `palette.danger`) || defaultPalette.danger
    }),
    ...generateColorVariants({
        paletteKey: 'warning',
        color: _get(overrides, `palette.warning`) || defaultPalette.warning,
        paletteOverrides: ({color}) => ({
            warningTintInverted: shade(0.7, color)
        })
    }),
    ..._get(overrides, 'palette', {})
});
