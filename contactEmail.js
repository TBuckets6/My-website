const email = document.getElementById('email')
const namee = document.getElementById('namee')
const tel = document.getElementById('tel')
const subject = document.getElementById('subject')
const message = document.getElementById('message')
const submit = document.getElementsByClassName('form-contact')[0]

//const body = 'Name: ' + namee.value + '<br>' + 'Email: ' + email.value + '<br>' + 'Phone: ' + tel.value + '<br>' + 'Content: ' + message.value



submit.addEventListener('submit', (e) => {
  e.preventDefault()

  const body = `
  Name: ${namee.value}
  <br>
  Email: ${email.value}
  <br>
  Phone: ${tel.value} 
  <br>
  Content: ${message.value}
`

  Email.send({
    SecureToken: "f1b49bfd-531e-45ea-a31d-962c043ae1d3",
    To: 'tbushey236@gmail.com',
    From: 'tbushey236@gmail.com',
    Subject: subject.value,
    Body: body
  }).then(
    message => alert(message)
  );
})
