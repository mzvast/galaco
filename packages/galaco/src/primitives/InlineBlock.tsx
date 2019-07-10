import styled, {use, theme} from "../styled";
import Box, {BoxProps} from "./Box";


const InlineBlock = styled(Box)<BoxProps>`
    display: inline-block;
    ${theme('InlineBlock')};
`;
export default use(InlineBlock, 'div')