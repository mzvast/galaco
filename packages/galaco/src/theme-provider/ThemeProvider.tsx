import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import {ThemeProvider} from 'styled-components';
// @ts-ignore

import {ThemeConfig} from '../utils/types';

import defaultTheme from '../themes/default';
import boxTheme from '../themes/boxTheme';

type DerivedTheme = {
    palette: ThemeConfig['palette'];
};

export type LocalThemeProviderProps = {
    children: React.ReactNode;
    isStandalone?: boolean;
    theme?: ThemeConfig;
};
export type State = {
    theme: DerivedTheme;
};

const loadTheme = ({
    theme: _theme,
    isStandalone
}: {
    theme: LocalThemeProviderProps['theme'];
    isStandalone: LocalThemeProviderProps['isStandalone'];
}): DerivedTheme => {
    let theme = defaultTheme(_theme);
    if (isStandalone && _theme) {
        theme = _theme;
    }

    return {
        ...boxTheme,
        palette: theme && theme.palette ? theme.palette : {}
    };
};

class Provider extends React.Component<LocalThemeProviderProps, State> {
    static propTypes = {
        children: PropTypes.node.isRequired,
        isStandalone: PropTypes.bool,
        theme: PropTypes.object
    };
    static defaultProps = {
        isStandalone: false,
        theme: {}
    };

    state = {
        theme: loadTheme({
            theme: this.props.theme,
            isStandalone: this.props.isStandalone
        })
    };

    render = () => {
        const {children} = this.props;
        const {theme} = this.state;
        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>{children}</React.Fragment>
            </ThemeProvider>
        );
    };
}

export default Provider;
