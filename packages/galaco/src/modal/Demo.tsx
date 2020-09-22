/**
 * @file [Demo]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-02-26 13:51:45
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
import React, {Component} from 'react';
import {styled, css, WithModal, Box, Modal, palette} from '../index';

const CardWrapper = styled(Box)`
    width: 400px;
    height: 200px;
    box-shadow: 0 5px 20px 0 rgba(25, 46, 99, 0.1),
        0 10px 40px 0 rgba(52, 65, 126, 0.1);
    border-radius: 20px;
    border: solid red 1px;
    background-color: pink;
`;
interface Props {}
interface State {}
class Demo extends Component<Props, State> {
    state: State;
    static defaultProps = {};
    modal1 = null;
    render() {
        return (
            <WithModal>
                {modal => (
                    <React.Fragment>
                        <button onClick={modal.show}>show</button>
                        <Modal {...modal} maskClosable>
                            <CardWrapper>
                                <button onClick={modal.hide}>close</button>
                            </CardWrapper>
                        </Modal>
                    </React.Fragment>
                )}
            </WithModal>
        );
    }
}
export default Demo;
