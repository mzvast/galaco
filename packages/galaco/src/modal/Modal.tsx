/**
 * @file [Modal]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-07-30 11:00
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {styled, css} from '../styled';
import {Box} from '../primitives';
import {HiddenStateReturn} from '../hidden/useHiddenState';

const Mask = styled(Box)`
    z-index: 1000;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
`;
const Content = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1001;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
// API 借鉴 https://ant.design/components/modal-cn/

export type Props = {
    maskClosable: boolean; // 点击蒙层是否允许关闭
    maskStyle: object; // 遮罩样式
    mask: boolean; // 是否展示遮罩
} & HiddenStateReturn;
interface State {}

class Modal extends Component<Props, State> {
    state: State;

    static defaultProps = {
        maskClosable: true,
        maskStyle: {},
        mask: true
    };

    render() {
        const {visible, children, maskStyle, mask} = this.props;
        return (
            <>
                {visible &&
                    ReactDOM.createPortal(
                        <>
                            {mask && (
                                <Mask
                                    className={'galaco-modal-mask'}
                                    onClick={this.onMaskClick}
                                    {...maskStyle}
                                />
                            )}

                            <Content>{children}</Content>
                        </>,
                        document.body
                    )}
            </>
        );
    }

    onMaskClick = e => {
        const {maskClosable} = this.props;
        if (!maskClosable) return;
        // console.log('e::e', e.target.classList);
        if (e.target.classList.contains('galaco-modal-mask')) {
            this.props.hide && this.props.hide();
        }
    };
}

export default Modal;
