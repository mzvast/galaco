/**
 * @file [useLockBodyScroll]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2020-09-22 15:29:32
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */

import React, {useLayoutEffect} from 'react';

function useLockBodyScroll() {
    //@ts-ignore
    useLayoutEffect(() => {
        // Get original body overflow
        const originalStyle = window.getComputedStyle(document.body).overflow;
        // Prevent scrolling on mount
        document.body.style.overflow = 'hidden';
        // Re-enable scrolling when component unmounts
        return () => (document.body.style.overflow = originalStyle);
    }, []); // Empty array ensures effect is only run on mount and unmount
}

export default useLockBodyScroll;
