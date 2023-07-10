

const txtInput = document.getElementById('heightFt');

txtInput.style.backgroundColor = 'red'

txtInput.addEventListener('keyup', () => {
    console.log('hi')
    let y = document.getElementById('textOut')
    y.innerHTML = txtInput.value
    let z = txtInput.value
    console.log(z)
})

let x = txtInput.value;


