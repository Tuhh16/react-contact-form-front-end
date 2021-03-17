export async function sendMail(url, body, openModal, setTypeModal, setMsgModal, setForm, setSendingMail){
    try {
        const response = await fetch(url,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        const json = await response.json();
        setSendingMail(false);
        if(response.status === 200){
            setTypeModal('success');
            setForm({
                name: "",
                email: "",
                subject: "Selecione um assunto",
                message: ""     
            })
        }else{
            setTypeModal('error');
        }
        setMsgModal(json.message);
        openModal();
    } catch (err) {
        setTypeModal('error');
        setMsgModal(['Erro ao tentar enviar']);
        openModal();
    }  
}