import styled, {use, theme} from "../styled";
import Box, {BoxProps} from "./Box";

export interface InlineFlexProps extends BoxProps {
}

const InlineFlex = styled(Box)<InlineFlexProps>`
    display: inline-flex;
    ${theme("InlineFlex")};
`;
export default use(InlineFlex, 'div')