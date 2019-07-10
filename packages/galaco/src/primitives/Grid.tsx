import styled, {use, theme} from "../styled";
import Box, {BoxProps} from './Box';

const Grid = styled(Box)<BoxProps>`
    display: grid;
    ${theme('Grid')};
`;
export default use(Grid, "div")