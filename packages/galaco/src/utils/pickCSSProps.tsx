import CSSProps from './CSSProps';
import MoGaiCssProps from './MoGaiCssProps';

function pickCSSProps<P extends object>(props: P) {
    let filteredProps: Partial<P> | undefined;

    for (const prop in props) {
        if (prop in CSSProps) {
            if (!filteredProps) {
                filteredProps = {};
            }
            filteredProps[prop] = MoGaiCssProps(props[prop]);
        }
    }

    return filteredProps;
}

export default pickCSSProps;
