/**
 * @file [requiredParam]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-07-25 11:33
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
/**
 * 捕获必须参数的缺失
 * @param requiredParam
 */
export default function requiredParam(requiredParam): any {
    const requiredParamError = new Error(
        `Required parameter, "${requiredParam}" is missing.`
    );
    // preserve original stack trace
    if (typeof Error['captureStackTrace'] === 'function') {
        Error['captureStackTrace'](requiredParamError, requiredParam);
    }
    throw requiredParamError;
}
