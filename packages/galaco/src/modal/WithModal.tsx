/**
 * @file [WithModal]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-07-30 13:50
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
import {useModalState} from './ModalState';

export function WithModal({children}) {
    let modal = useModalState();
    return children(modal);
}
