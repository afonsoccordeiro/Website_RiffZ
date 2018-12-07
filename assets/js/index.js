function sendEmail() {

    // obter valores das caixas de texto
    const name = document.querySelector("#txtEmail").value

//inicializar o componente JS
    emailjs.init("user_mHocsQuny57tTbEGkEeCI");

    const template_params = {
        "reply_to": "reply_to_value"
    }
     
     const service_id = "default_service"
     const template_id = "template_GKj2xKpO"
     emailjs.send(service_id,template_id,template_params)
     

     alert("All set! An email was sent to your Inbox.")
    
}