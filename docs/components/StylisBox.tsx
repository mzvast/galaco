import React from 'react';
import {styled, css, keyframes, Box, palette, Flex} from 'galaco';
import {getPx2vw, StyleSheetManager} from 'galaco';
import {GalacoStyleSheetManager} from 'galaco';
interface Props {}
const StylisBox: React.FC<Props> = () => {
    return (
        <GalacoStyleSheetManager stylisPlugins={[getPx2vw(750)]}>
            <Box border="solid red 1px" width="325px">
                This is a box
            </Box>
        </GalacoStyleSheetManager>
    );
};
export default StylisBox;

// backup
// import React from 'react';
// import {styled, css, keyframes, Box, palette, Flex} from '../../';
// import {getPx2vw, StyleSheetManager} from '../..';
// type Props = {};
// const StylisBox: React.FC<Props> = () => {
//     const cssPlugin = React.useMemo(() => {
//         return [getPx2vw(750)];
//     }, []);
//     return (
//         <StyleSheetManager stylisPlugins={cssPlugin}>
//             <>
//                 <Box border="solid red 1px" width="325px">This is a box</Box>
//             </>
//         </StyleSheetManager>
//     );
// };
// export default StylisBox;
