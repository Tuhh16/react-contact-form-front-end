import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

import { schema } from '../../service/contactValidate';
import { sendMail }  from '../../service/api';

import { Title } from '../../components/Title';
import { Input } from '../../components/Input';
import { Select, Option } from '../../components/Select';
import { TexArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';

const Form = styled(motion.form)`
    max-width: 600px;
    width: 100%;
    margin: 30px auto 0 auto;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 8px 20px 0px rgb(0 0 0 / 15%);
    -o-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
    -ms-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0px 8px 20px 0px rgb(0 0 0 / 15%);
`;

const P = styled(motion.p)`
    max-width: 400px;
    margin: 10px auto 0 auto;
    padding: 10px;
    border-radius: 5px;
    display: block;
    color: #3786bd;
    background: #fff;
`;

export function Contato (){
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "Selecione um assunto",
        message: ""     
    })

    const [showModal, setShowModal] = useState(false);

    const [msgModal, setMsgModal] = useState([]);

    const [typeModal, setTypeModal] = useState('error');

    const openModal = () => {
        setShowModal(!showModal);
    }

    function handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        setForm({
          ...form,
            [name]: value
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        const { name, email, subject, message } = form;
        let body = { 
            name: name, 
            email: email,
            subject: subject,
            message: message
        }
        schema.validate({
            name: name,
            email: email,
            subject: subject,
            message: message
        },
        { abortEarly: false }
        ).then(function () {
            sendMail(process.env.REACT_APP_API_URL, body, openModal, setTypeModal, setMsgModal, setForm);
        })
        .catch(function (err) {
            setTypeModal('error');
            setMsgModal(err.errors);
            openModal();
        });
    }
    return(
        <>
            <Title 
                 transition={{ delay: 0, duration: 0.4 }}
                 variants={{
                   show: { opacity: 1, x: '0', right: 50 },
                   hidden: { opacity: 0, x: '-100%', right: 0 },
                 }}
                 initial="hidden"
                 animate="show"
            >Formulario de contato</Title>
            <P
                 transition={{ delay: 0, duration: 0.6 }}
                 variants={{
                   show: { opacity: 1, x: '0', right: 50 },
                   hidden: { opacity: 0, x: '100%', right: 0 },
                 }}
                 initial="hidden"
                 animate="show"
            >Obs: O email informado no campo será usado para receber o email, apenas para mostrar o como a mensagem chega no e-mail.</P>
            <Form
                 transition={{ delay: 0, duration: 0.8 }}
                 variants={{
                   show: { opacity: 1, y: '0' },
                   hidden: { opacity: 0, y: '100%' },
                 }}
                 initial="hidden"
                 animate="show"
                onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="Nome" value={form.name} onChange={handleChange} />
                <Input type="text" name="email" placeholder="E-mail" value={form.email} onChange={handleChange} />
                <Select name="subject" onChange={handleChange} value={form.subject}>
                    <Option value="selecione" name="Selecione um assunto" />
                    <Option value="Crítica" name="Crítica" />
                    <Option value="Dúvida" name="Dúvida" />
                    <Option value="Elogio" name="Elogio" />
                    <Option value="Sugestões" name="Sugestões" />
                </Select>
                <TexArea name="message" placeholder="Mensagem" onChange={handleChange} value={form.message} />
                <Button type="submit">Enviar</Button>
            </Form>
            <Modal showModal={showModal} setShowModal={setShowModal} msgModal={msgModal[0]} typeModal={typeModal} />
        </>
    )
}