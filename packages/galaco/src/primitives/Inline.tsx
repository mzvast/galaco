import styled, {use, theme} from "../styled";
import Box, {BoxProps} from "./Box";


const Inline = styled(Box)<BoxProps>`
    display: inline;
    ${theme('Inline')};
`;
export default use(Inline, 'div')