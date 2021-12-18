import * as React from 'react';
import {StyleSheetManager, styled, Box, getPx2vw} from 'galaco';
import {ThemeProvider} from 'galaco';

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
    componentDidMount() {
        (function(l) {
            if (l.search) {
                var q = {};
                l.search
                    .slice(1)
                    .split('&')
                    .forEach(function(v) {
                        var a = v.split('=');
                        q[a[0]] = a
                            .slice(1)
                            .join('=')
                            .replace(/~and~/g, '&');
                    });
                //@ts-ignore
                if (q.p !== undefined) {
                    window.history.replaceState(
                        null,
                        null,
                        l.pathname.slice(0, -1) +
                            //@ts-ignore
                            (q.p || '') +
                            //@ts-ignore
                            (q.q ? '?' + q.q : '') +
                            l.hash
                    );
                }
            }
        })(window.location);
    }

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
