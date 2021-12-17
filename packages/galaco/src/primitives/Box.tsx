import * as React from 'react';
import * as PropTypes from 'prop-types';
import {theme} from 'styled-tools';
import {bool, bgColorWithProps, textColorWithProps} from '../utils/styledProps';
import CSSProps from '../utils/CSSProps';
import applyAllRefs from '../utils/applyAllRefs';
import pickCSSProps from '../utils/pickCSSProps';
import dedupeClassName from '../utils/dedupeClassName';
import pickHTMLProps from '../utils/pickHTMLProps';
import styled from '../styled';
import use from 'reuse';
import {Omit} from '../utils/types';
import buildColorFromPalette from '../utils/buildColorFromPalette';
import {StylisContext} from '../plugins/StylisContext';
import {useContext} from 'react';
type CSSProperties = {[K in keyof typeof CSSProps]?: string | number};

export type BoxProps = Omit<React.HTMLProps<any>, 'as'> &
    CSSProperties & {
        use?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
        children?: React.ReactNode;
        // opaque?: boolean;
        palette?: string;
        // tone?: number;
        elementRef?: React.Ref<any>;
    };

const BoxComponent = React.forwardRef<HTMLElement, BoxProps>(
    ({use: T, ...props}, ref) => {
        if (!T) return null;

        const plugins = useContext(StylisContext);

        const style = pickCSSProps(props, plugins);

        if (typeof T === 'string') {
            const className = dedupeClassName(props.className);
            const allProps = Object.assign(
                pickHTMLProps(props),
                {className},
                style ? {style} : {}
            );
            return React.createElement(T, {
                ...allProps,
                ref: applyAllRefs(ref, props.elementRef)
            });
        }
        return React.createElement(T, {
            ...props,
            ref: applyAllRefs(ref, props.elementRef),
            style
        });
    }
);

const Box = styled(BoxComponent)<BoxProps>`
    margin: unset;
    padding: unset;
    border: unset;
    background: unset;
    font-family: inherit;
    font-size: 100%;
    box-sizing: border-box;
    &:focus:not(:focus-visible) {
        outline: none;
    }
    ${theme('Box')};
`;

export default use(Box, 'div');
