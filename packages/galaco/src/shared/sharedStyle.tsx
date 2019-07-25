/**
 * @file [SharedStyle]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-07-16 16:08
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
import {styled} from '../styled';
import {Box} from '../primitives';
/**
 * 多行省略
 * @param row
 */
export const Ellipsis = (row: number = 1) => styled(Box)`
    overflow: hidden;
     text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${row};
`;
