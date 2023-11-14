((win, doc) => {

    //this reps the button allows selection of a file
    const upload = doc.getElementById('fileId')

    //this reps the div where the data will be displayed
    const content = doc.getElementById('contentId')

    let af = null

    const readFile = (file) => {

        let fr = new FileReader()

        return new Promise((res, rej) => {

            fr.onloadend = (event) => {
                res(event.target.result)
            }

            fr.readAsArrayBuffer(file)
        })
    }

    // const determinePrintableAscii

    const showData = () => {

        let view = new DataView(af)

        let result = ''

        let realVals = ''

        let lastByte = ''

        let finalContent = ''

        for (let i = 0; i < view.byteLength; i++) {

            //store the character value of the current byte or a '.'
            if(view.getUint8(i) >= 32 && view.getUint8(i) <= 126){
                realVals += String.fromCharCode(view.getUint8(i).toString())
            }
            else{
                realVals += '.'
            }
            
            
            // if(i >= view.byteLength - 16 - 1){
            //     finalContent += realVals
            // }
            
            // console.log(typeof(view.getUint8(i))) //number
            
            //print the input offset in hex
            if (i % 16 == 0) {
                result += i.toString(16).padStart(8, '0') + '  '
            }

            //compute the hex representation of the current character
            let value = view.getUint8(i).toString(16).padStart(2, '0')

            //add the hex value to the result
            result += value + ' '

            //if we have reached the 16th byte then start a new line
            //result += ((i - 15) % 16 === 0) ? '<br/>' : '';
            if((i - 15) % 16 === 0){
                // result += '<br/>'
                result += ' ' + '|' + realVals + '|' + '<br/>'
                if(i !== view.byteLength - 1){
                    realVals = ''
                }
                
            }

            //get the offset of the last byte in the file
            if(i === view.byteLength - 1){
                lastByte = '<br/>' + (i+1).toString(16).padStart(8, '0')
            }

        }

        //result += finalContent 

        result += lastByte

        content.innerHTML = result

    }

    //when a file has been selected,
    //this will execute
    upload.onchange = (event) => {

        readFile(event.target.files[0])
            .then(fileBuffer => { af = fileBuffer })
            .then(() => showData())
    }

})(window, document)