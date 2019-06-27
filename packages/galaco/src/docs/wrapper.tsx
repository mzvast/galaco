import * as React from 'react';

import ThemeProvider from '../theme-provider';
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
            <ThemeProvider theme={theme}>
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
        );
    }
}

export default Wrapper;
