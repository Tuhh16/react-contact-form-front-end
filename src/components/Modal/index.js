import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ModalBg = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.75);
`;

ModalBg.ModalBody = styled(motion.div)`
    position: fixed;
    left: 40%;
    top: 0%;
    max-width: 400px;
    width: 100%;
    @media(max-width:500px){
        width: 90%;
    }
    height: 100px;
    z-index: 99999;
    background-color: #fff;
    border-radius: 5px;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    &::before{
        content:"";
        position: absolute;
        top: 0;
        border-radius: 4px 4px 0 0;
        width: 100%;
        height: 30px;
    }
    &.success{
        color: #3cb371;
        &::before{
            background-color: #3cb371;
        }
    }
    &.error{
        color: #ff5555;
        &::before{
            background-color: #ff5555;
        }
    }

`;

const CloseModal = styled.b`
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
`;

const Message = styled.p`
    font-weight: bold;
    font-size: 16px;
    padding: 50px 0 0 0;
    margin: 0;
    text-align: center;
`;

export function Modal ({ showModal, setShowModal, typeModal, msgModal }) {
    return(
        <>
        {showModal ?
        <ModalBg>
            <ModalBg.ModalBody 
                className={typeModal}
                animate={{ y: '250%', x: 0 }}
                transition={{ delay: 0, duration: 0.5 }}
            >
                <CloseModal onClick={() => setShowModal(!showModal)}>X</CloseModal>
                <Message>{msgModal}</Message>
            </ModalBg.ModalBody>
        </ModalBg>
        : null }
        </>
   )
}
