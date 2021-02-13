const emailjs= require('emailjs-com');

const submitForm = (e) => {
    e.preventDefault();
    emailjs.sendForm('kamakshi_malhotra', 'template_kzymny7', 'contact-form','user_nWvyITBifA5GAD4hGsrx1')
     .then(result => alert('Your message has been sent. Thanks for contacting. I will be in touch soon!'))
     .catch(err => alert('Oops! Please try again.'))

}

document.querySelector('.submitButton').addEventListener('click', submitForm)
