//import hex from 'hex'

const upload = document.getElementById('myFile')

const content = document.getElementById('content')

upload.addEventListener('change', () => {
    //Delete the content if a file
    //has already been imported.
    if(content.innerHTML[0]){
        content.innerHTML = ''
    }

    const fr = new FileReader()

    fr.readAsBinaryString(upload.files[0])
    fr.onload = () => {

        let start = 0
        let end = 16

        //let data = fr.result
        
        //const hex = fr.result.split('').map((x) => x.charCodeAt().toString(16)).join('') // or .join(' ')

        //function to determine if a character is printable ascii
        const determinePrintableAscii = (d) => {
            let content =''
            for(let i = 0; i < d.length; i++){
                if(d[i].charCodeAt() >= 32 && d[i].charCodeAt() <= 126){
                    content += d[i]
                }
                else{
                    content += '.'
                }
            }
            return content
        }

        const data = determinePrintableAscii(fr.result)
        console.log(data.length)
        let hexLine = ''

        for(let i = 0; i < data.length; i++){
            
            hexLine += data.charCodeAt(i).toString(16).padStart(2,'0') + ' '
            
            if(i % 16 == 0){

                //print the hex offset with leading zeros
                //////content.innerHTML += i.toString(16).padStart(8,'0') + '  '

                //content.innerHTML += hex.slice(i,i+32) + ' '

                // for(let j = i; j < i + 16; j++){
                //     if(data[j]){
                //         //print hex values of data
                //         content.innerHTML += data.charCodeAt(j).toString(16).padStart(2,'0') + ' '
                //     }
                //     else{
                //         console.log(j % 16)
                //         //since the final line doesnt have a full 16 characters this creates
                //         //the necessary whitespace to align the file content with all content 
                //         //above it
                //         content.innerHTML += ' '.repeat(58 - 10 - ((j % 16) * 2) - (j % 16))
                //         break
                //     }
                // }
                    
                //print actual file content in chunks of 16
                content.innerHTML += '|' + data.slice(i,i+16) + '|'

                content.innerHTML += '<br/>'

            }

            //print offset of the last byte in the file
            if(i == data.length - 1){
                let lastByteOffset = i + 1
                content.innerHTML += lastByteOffset.toString(16).padStart(8,'0')
            }   
        }
    }
})