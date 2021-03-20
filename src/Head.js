import React from 'react';
import MetaTags from 'react-meta-tags';

function Head(){
    return(
        <MetaTags>
            <title>Contato</title>
            <meta property="og:title" content="Contato" content="Contato" key="Contato" />
            <meta name="description" content="Formulários de Contato." />
            <meta property="og:image" content={`${process.env.PUBLIC_URL}/img/image-app.jpg`}/>
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://react-contact-form-front-end.vercel.app" />
        </MetaTags>
    )
}

export default Head