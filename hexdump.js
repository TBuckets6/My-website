//import hex from 'hex'

const upload = document.getElementById('myFile')

const content = document.getElementById('content')

upload.addEventListener('change', () => {

    const fr = new FileReader()

    fr.readAsText(upload.files[0])
    
    fr.onload = () => {

        let start = 0
        let end = 16

        for(let i = 0; i < fr.result.length; i++){
            if(i % 16 == 0){
                
                //print the hex offset with leading zeros
                content.innerHTML += i.toString(16).padStart(8,'0') + '  '
                let line = 0;               
                for(let j = start; j < end; j++){
                    line++
                    if(fr.result[j] == undefined){
                        for(let k = 0; k < 58 - (line * 2) - 6 - line - 1; k++){
                            content.innerHTML += ' '                       
                        }
                        break
                    }
                    content.innerHTML += fr.result.charCodeAt(j).toString(16).toUpperCase().padStart(2,'0') + ' '
                    
                }
                content.innerHTML += '|' + fr.result.substring(start,end) + '|'
                content.innerHTML += '<br/>'
                start = start + 16
                end = end + 16
            }
            if(i == fr.result.length - 1){
                let lastByteOffset = i + 1
                content.innerHTML += lastByteOffset.toString(16).padStart(8,'0')
            }
        }
    }
})