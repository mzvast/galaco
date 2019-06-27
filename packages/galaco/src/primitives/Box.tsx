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

type CSSProperties = {[K in keyof typeof CSSProps]?: string | number};

export type BoxProps = Omit<React.HTMLProps<any>, 'as'> &
    CSSProperties & {
        use?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
        children?: React.ReactNode;
        static?: boolean;
        absolute?: boolean;
        fixed?: boolean;
        relative?: boolean;
        sticky?: boolean;
        opaque?: boolean;
        palette?: string;
        tone?: number;
        elementRef?: React.Ref<any>;
    };

const BoxComponent = React.forwardRef<HTMLElement, BoxProps>(
    ({use: T, ...props}, ref) => {
        if (!T) return null;

        const style = pickCSSProps(props);

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

const positions = ['static', 'absolute', 'fixed', 'relative', 'sticky'];

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
    &&& {
        ${bool('position', positions)};
    }
`;

const useTypes = [PropTypes.func, PropTypes.string, PropTypes.object];

// @ts-ignore
Box.propTypes = {
    use: PropTypes.oneOfType([
        ...useTypes,
        PropTypes.arrayOf(PropTypes.oneOfType(useTypes))
    ]),
    opaque: PropTypes.bool,
    palette: PropTypes.string,
    tone: PropTypes.number,
    static: PropTypes.bool,
    absolute: PropTypes.bool,
    fixed: PropTypes.bool,
    relative: PropTypes.bool,
    sticky: PropTypes.bool
};

export default use(Box, 'div');
