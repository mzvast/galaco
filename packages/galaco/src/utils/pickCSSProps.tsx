import CSSProps from './CSSProps';
import MoGaiCssProps from './MoGaiCssProps';

function pickCSSProps<P extends object>(props: P, plugins) {
    let filteredProps: Partial<P> | undefined;

    for (const prop in props) {
        if (prop in CSSProps) {
            if (!filteredProps) {
                filteredProps = {};
            }
            filteredProps[prop] = MoGaiCssProps(props[prop], plugins);
        }
    }

    return filteredProps;
}

export default pickCSSProps;
