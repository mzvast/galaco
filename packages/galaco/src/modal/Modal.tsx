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
import useLockBodyScroll from './useLockBodyScroll';

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
function ModalContent({children}: {children: any}) {
    useLockBodyScroll();
    return <Content>{children}</Content>;
}
export type Props = {
    maskClosable?: boolean; // 点击蒙层是否允许关闭
    maskStyle?: object; // 遮罩样式
    mask?: boolean; // 是否展示遮罩
    children?: any;
} & HiddenStateReturn;

function Modal({
    visible,
    maskClosable = false,
    maskStyle = {},
    mask = true,
    hide,
    show,
    toggle,
    children
}: Props) {
    const onMaskClick = e => {
        if (!maskClosable) return;
        hide && hide();
    };
    return (
        <>
            {visible &&
                ReactDOM.createPortal(
                    <>
                        {mask && <Mask onClick={onMaskClick} {...maskStyle} />}
                        <ModalContent>{children}</ModalContent>
                    </>,
                    document.body
                )}
        </>
    );
}

export default Modal;
