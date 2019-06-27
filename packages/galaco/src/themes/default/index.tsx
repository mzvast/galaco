/**
 * @file [default]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-02-21 11:36:28
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
import {ThemeConfig} from '../../utils/types';
import palette from './palette';
function theme(overrides: ThemeConfig = {}): ThemeConfig {
    console.log(overrides);
    return {
        ...overrides,

        // global: global(overrides),
        palette: palette(overrides)
        // layout: layout(overrides),
        // fontSizes: fontSizes(overrides),
        // fontWeights: fontWeights(overrides),

        // Container: Container(overrides),
        // FieldSet: FieldSet(overrides),
        // Icon: Icon(overrides),
        // LayoutSet: LayoutSet(overrides),
        // Pane: Pane(overrides),
        // Table: Table(overrides)
    };
}
export default theme;
