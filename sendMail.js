
function sendMail() {
    const params = {
        name: document.getElementById("name").value,
        societe: document.getElementById("societe").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_vudlds5";
    const templateID = "template_nhefzx8";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("societe").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));

}
