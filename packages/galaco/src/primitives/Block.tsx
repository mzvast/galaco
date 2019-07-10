import styled, {use, theme} from "../styled";
import Box, {BoxProps} from "./Box";

export interface BlockProps extends BoxProps {
}

const Block = styled(Box)<BlockProps>`
    display: block;
    ${theme('Block')};
`;
export default use(Block, 'div')
