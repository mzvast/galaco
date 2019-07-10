import styled, {use, theme} from "../styled";
import Box, {BoxProps} from "./Box";

const InlineFlex = styled(Box)<BoxProps>`
    display: inline-flex;
    ${theme("InlineFlex")};
`;
export default use(InlineFlex, 'div')