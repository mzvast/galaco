/**
 * @file [getUnixTimestamp]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-02-26 15:02:02
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
export default function getUnixTimestamp() {
    const dateTime = Date.now();
    const timestamp = Math.floor(dateTime / 1000);
    return timestamp;
}
