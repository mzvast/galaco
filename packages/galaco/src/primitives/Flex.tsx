import styled, {use, theme} from "../styled";
import Box, {BoxProps} from "./Box";


const Flex = styled(Box)<BoxProps>`
    display: flex;
    ${theme('Flex')};
`;
export default use(Flex, "div")