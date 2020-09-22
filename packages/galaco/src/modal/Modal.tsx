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
const Wrap: any = styled(Box)`
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
`;
const Mask = styled(Box)`
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
`;
const ModalWrap: any = styled(Box)`
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    outline: 0;
    ::before {
        display: inline-block;
        width: 0;
        height: 100%;
        vertical-align: middle;
        content: '';
    }
    /* pointer-events: none; */
`;
const ContentOutter = styled(Box)`
    position: relative;
    top: 0;
    left: 50%;
    display: inline-block;
    text-align: left;
    vertical-align: middle;
    transform: translate(-50%, 0);
    pointer-events: none;
`;
const ContentInner: any = styled(Box)`
    position: relative;
    pointer-events: auto;
`;
// API 借鉴 https://ant.design/components/modal-cn/
function ModalContent({children}: {children: any}) {
    useLockBodyScroll();
    return (
        <ContentOutter className="galaco-modal-content">
            <ContentInner>{children}</ContentInner>
        </ContentOutter>
    );
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
        if (!e.target.classList.contains('galaco-modal-wrap')) return;
        hide && hide();
    };
    return (
        <>
            {visible &&
                ReactDOM.createPortal(
                    <Wrap className="galaco-modal-root">
                        {mask && (
                            <Mask
                                className="galaco-modal-mask"
                                {...maskStyle}
                            />
                        )}
                        <ModalWrap
                            className="galaco-modal-wrap"
                            onClick={onMaskClick}
                        >
                            <ModalContent>{children}</ModalContent>
                        </ModalWrap>
                    </Wrap>,
                    document.body
                )}
        </>
    );
}

export default Modal;
