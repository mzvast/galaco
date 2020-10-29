/**
 * @file [test1px]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-06-25 21:24
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
import window from '../utils/window';

export default function() {
    if (window.devicePixelRatio && devicePixelRatio >= 2) {
        var testElem = document.createElement('div');
        testElem.style.border = '.5px solid transparent';
        document.body.appendChild(testElem);
        if (testElem.offsetHeight == 1) {
            document.querySelector('html').classList.add('hairlines');
        }
        document.body.removeChild(testElem);
    }
}
