import * as React from 'react';
import {StyleSheetManager, styled, Box, getPx2vw} from '..';
import ThemeProvider from '../theme-provider';

const cssPlugin = getPx2vw(1280);

const TestObj = styled(Box)`
    width: 640px;
    height: 1px;
    background-color: red;
`;
interface Props {
    children: React.ReactNode;
}
interface State {}
const theme = {
    palette: {
        primary: '#444bc9',
        text: '#435a6f'
    }
};

class Wrapper extends React.Component<Props, State> {
    render() {
        const {children} = this.props;
        return (
            //@ts-ignore
            <ThemeProvider theme={theme}>
                {/*<TestObj>11</TestObj>*/}
                {/*<Box width={'200px'} height={'100px'} background={'red'} border={'1px solid blue'}></Box>*/}
                {children}
            </ThemeProvider>
        );
    }
}

export default Wrapper;
