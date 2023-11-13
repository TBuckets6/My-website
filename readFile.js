const upload = document.getElementById('myFile')

const content = document.getElementById('content')


upload.addEventListener('change', () => {
    
    const fr = new FileReader()

    for(let i = 0; i < 5; i++){
        fr.readAsBinaryString(upload.files[0].slice(i,i+1))

    
    
    

    fr.onload = () => {
        console.log(fr.result)

    }
})