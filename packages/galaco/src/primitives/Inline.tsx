import styled, {use, theme} from "../styled";
import Box, {BoxProps} from "./Box";

export interface InlineProps extends BoxProps {
}

const Inline = styled(Box)<InlineProps>`
    display: inline;
    ${theme('Inline')};
`;
export default use(Inline, 'div')