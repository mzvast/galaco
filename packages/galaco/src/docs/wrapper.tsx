import * as React from 'react';
import {StyleSheetManager, styled, Box, getPx2vw} from '..';
import ThemeProvider from '../theme-provider';

const TestObj = styled(Box)`
    width:640px;
    height:1px;
    background-color: red;
`;
type Props = {
    children: React.ReactNode;
};
type State = {};
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
            <StyleSheetManager stylisPlugins={[getPx2vw(1280)]}>
                <ThemeProvider theme={theme}>
                    {/*<TestObj>11</TestObj>*/}
                    {/* <React.Fragment>
                    <Box backgroundColor="primary" color="white" padding="major-3">
                        This is a box
                    </Box>

                    <div
                        style={{
                            backgroundColor: theme.rubik.error
                        }}
                    >
                        This is a box
                    </div>
                </React.Fragment> */}

                    {children}
                </ThemeProvider>
            </StyleSheetManager>
        );
    }
}

export default Wrapper;
