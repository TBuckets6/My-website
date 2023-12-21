const email = document.getElementById('email')
const name = document.getElementById('name')
const phone = document.getElementById('tel')
const subject = document.getElementById('subject')
const message = document.getElementById('message')
const submit = document.getElementsByClassName('form-contact')[0]

submit.addEventListener('submit', (e) => {
  e.preventDefault()
  
  Email.send({
    SecureToken: "f1b49bfd-531e-45ea-a31d-962c043ae1d3",
    To: 'tbushey236@gmail.com',
    From: email.value,
    Subject: subject.value,
    Body: message.value
  }).then(
    message => alert(message)
  );
})
