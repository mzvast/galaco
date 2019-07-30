/**
 * @file [useModalState]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-07-30 12:59
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
//抽象自 https://github.com/reakit/reakit/blob/master/packages/reakit/src/Hidden/HiddenState.ts

import {useState, useCallback} from 'react';

export interface HiddenState {
    visible: boolean;
}

export interface HiddenActions {
    show: () => void;
    hide: () => void;
    toggle: () => void;
}

export type HiddenStateReturn = HiddenState & HiddenActions;

export function useHiddenState(): HiddenStateReturn {
    const [visible, setVisible] = useState(false);

    const show = useCallback(() => {
        setVisible(true);
    }, []);

    const hide = useCallback(() => {
        setVisible(false);
    }, []);

    const toggle = useCallback(() => {
        setVisible(v => !v);
    }, []);

    return {
        visible,
        show,
        hide,
        toggle
    };
}
