function sendEmail() {
    (function(){
        emailjs.init("cS5LRX1AyVqdlqEMa");
    })();

    let params = {
        nome: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    }

    let serviceID = 'service_dmagpgd';
    let templateID = 'template_g7k2zar';

    emailjs.send(serviceID, templateID, params)
    .then (res => {
        alert('Email enviado com sucesso!');
    })
    .catch((error)=>{
        alert('Falha ao enviar o email. Tente novamente mais tarde.');
    });
}