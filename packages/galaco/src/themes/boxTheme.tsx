// @ts-ignore

import {css} from '../styled';
import buildColorFromPalette from '../utils/buildColorFromPalette';

export default {
    Box: css`
        /* If the color is one from the palette, use it. E.g. background-color="primary" */
        ${buildColorFromPalette('color')};
        ${buildColorFromPalette('background-color')};
        ${buildColorFromPalette('border-block-end-color')};
        ${buildColorFromPalette('border-block-start-color')};
        ${buildColorFromPalette('border-bottom-color')};
        ${buildColorFromPalette('border-color')};
        ${buildColorFromPalette('border-inline-end-color')};
        ${buildColorFromPalette('border-inline-start-color')};
        ${buildColorFromPalette('border-left-color')};
        ${buildColorFromPalette('border-right-color')};
        ${buildColorFromPalette('border-top-color')};
        ${buildColorFromPalette('border-bottom-color')};
        ${buildColorFromPalette('caret-color')};
        ${buildColorFromPalette('column-rule-color')};
        ${buildColorFromPalette('outline-color')};
        ${buildColorFromPalette('text-decoration-color')};
        ${buildColorFromPalette('text-emphasis-color')};
    `
};
//  ${props => buildSpacingFromTheme('margin', props)};
//         ${props => buildSpacingFromTheme('margin-left', props)};
//         ${props => buildSpacingFromTheme('margin-right', props)};
//         ${props => buildSpacingFromTheme('margin-top', props)};
//         ${props => buildSpacingFromTheme('margin-bottom', props)};
//         ${props => buildSpacingFromTheme('padding', props)};
//         ${props => buildSpacingFromTheme('padding-left', props)};
//         ${props => buildSpacingFromTheme('padding-right', props)};
//         ${props => buildSpacingFromTheme('padding-top', props)};
//         ${props => buildSpacingFromTheme('padding-bottom', props)};

//         ${props => buildFontSizeFromTheme('font-size', props)};

//         ${props => buildFontWeightFromTheme('font-weight', props)};
