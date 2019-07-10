import styled, {use, theme} from "../styled";
import Box, {BoxProps} from "./Box";


const Block = styled(Box)<BoxProps>`
    display: block;
    ${theme('Block')};
`;
export default use(Block, 'div')
