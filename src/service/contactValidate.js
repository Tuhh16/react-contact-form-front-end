import * as yup from 'yup';

export let schema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório!'),
    email: yup.string().email('E-mail Invalido!').required('E-mail obrigatório!'),
    subject: yup.string().oneOf(['Crítica', 'Dúvida', 'Elogio', 'Sugestões'], 'Selecione um assunto'),
    message: yup.string().required('Mensagem é obrigatório!')
});