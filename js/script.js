(function(){
    emailjs.init("2yXtxmgOcqOcIRn8d");
})();


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const serviceID = 'service_1c3t32u';
    const templateID = 'template_iavbcam';

    emailjs.sendForm(serviceID, templateID, this)
        .then(function(response) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send message: ' + error.text);
        });
});