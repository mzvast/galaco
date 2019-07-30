/**
 * @file [ModalState]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-07-30 13:07
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
import {useHiddenState} from '../hidden/useHiddenState';

export function useModalState() {
    return useHiddenState();
}
