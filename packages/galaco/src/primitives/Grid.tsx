import styled, {use, theme} from "../styled";
import Box, {BoxProps} from './Box';

export interface GridProps extends BoxProps {

}

const Grid = styled(Box)<GridProps>`
    display: grid;
    ${theme('Grid')};
`;
export default use(Grid, "div")