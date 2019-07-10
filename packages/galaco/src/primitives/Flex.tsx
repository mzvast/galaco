import styled, {use, theme} from "../styled";
import Box, {BoxProps} from "./Box";

export interface FlexProps extends BoxProps {
}

const Flex = styled(Box)<FlexProps>`
    display: flex;
    ${theme('Flex')};
`;
export default use(Flex, "div")