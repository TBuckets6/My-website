//import hex from 'hex'

const upload = document.getElementById('myFile')

const content = document.getElementById('content')

upload.addEventListener('change', () => {
    //Delete the content if a file
    //has already been imported.
    if(content.innerHTML){
        content.innerHTML = ''
    }

    const fr = new FileReader()

    fr.readAsBinaryString(upload.files[0])
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
                    if(fr.result.charCodeAt(j) < 127){
                        //console.log('hi')
                        content.innerHTML += fr.result.charCodeAt(j).toString(16).padStart(2,'0') + ' '    
                    }
                    else{
                        console.log('hi')
                        //content.innerHTML += fr.result.charCodeAt(j).toString(16).toUpperCase() + ' '
                        content.innerHTML += fr.result.charCodeAt(j).toString(16) + ' '
                    }
                     
                }
                content.innerHTML += '|'
                for(let j = start; j < end; j++){
                    if(fr.result[j] == undefined){
                        break
                    }
                    if(fr.result[j].charCodeAt() >= 32 && fr.result[j].charCodeAt() <= 126){
                        content.innerHTML += fr.result[j]
                    }
                    else{
                        content.innerHTML += '.'
                    }
                }
                content.innerHTML += '|'
                //content.innerHTML += '|' + fr.result.substring(start,end) + '|'
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