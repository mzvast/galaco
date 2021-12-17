/**
 * @file [StylisPluginManager]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2021-12-17 10:46:30
 */
import React, {useState} from 'react';
import {StyleSheetManager} from 'styled-components';
import {StylisContextProvider} from './StylisContext';
type Props = {
    stylisPlugins: any[]; //插件数组
};
const StylisPluginManager: React.FC<Props> = ({stylisPlugins, children}) => {
    // todo: 会有更新性能问题么
    return (
        <StylisContextProvider value={stylisPlugins}>
            <StyleSheetManager stylisPlugins={stylisPlugins}>
                <>{children}</>
            </StyleSheetManager>
        </StylisContextProvider>
    );
};
export default StylisPluginManager;
