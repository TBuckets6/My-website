((win, doc) => {

    //this reps the button allows selection of a file
    const upload = doc.getElementById('fileId')

    //this reps the div where the data will be displayed
    const content = doc.getElementById('contentId')

    const example = `00000000 48 65 6c 6c 6f 2c 20 74 68 69 73 20 69 73 20 61 |Hello, this is a| 
00000010 6e 20 65 78 61 6d 70 6c 65 20 6f 66 20 68 65 78 |n example of hex| 
00000020 64 75 6d 70 20 6f 75 74 70 75 74 2e 20 54 68 65 |dump output. The| 
00000030 20 6c 65 66 74 20 63 6f 6c 75 6d 6e 20 72 65 70 | left column rep| 
00000040 72 65 73 65 6e 74 73 20 74 68 65 20 6f 66 66 73 |resents the offs| 
00000050 65 74 2e 20 45 61 63 68 20 6c 69 6e 65 20 62 65 |et. Each line be| 
00000060 67 69 6e 73 20 77 69 74 68 20 74 68 65 20 6f 66 |gins with the of| 
00000070 66 73 65 74 2c 20 69 6e 64 69 63 61 74 69 6e 67 |fset, indicating| 
00000080 20 74 68 65 20 70 6f 73 69 74 69 6f 6e 20 6f 66 | the position of| 
00000090 20 74 68 65 20 64 61 74 61 20 69 6e 20 74 68 65 | the data in the| 
000000a0 20 66 69 6c 65 2e 20 46 6f 72 20 65 78 61 6d 70 | file. For examp| 
000000b0 6c 65 2c 20 74 68 65 20 66 69 72 73 74 20 6c 69 |le, the first li| 
000000c0 6e 65 20 72 65 70 72 65 73 65 6e 74 73 20 74 68 |ne represents th| 
000000d0 65 20 64 61 74 61 20 73 74 61 72 74 69 6e 67 20 |e data starting | 
000000e0 61 74 20 6f 66 66 73 65 74 20 30 78 30 30 30 30 |at offset 0x0000| 
000000f0 30 30 30 30 2c 20 74 68 65 20 73 65 63 6f 6e 64 |0000, the second| 
00000100 20 6c 69 6e 65 20 61 74 20 30 78 30 30 30 30 30 | line at 0x00000| 
00000110 30 31 30 2c 20 61 6e 64 20 73 6f 20 6f 6e 2e 20 |010, and so on. | 
00000120 49 74 20 70 72 6f 76 69 64 65 73 20 61 20 77 61 |It provides a wa| 
00000130 79 20 74 6f 20 6c 6f 63 61 74 65 20 61 6e 64 20 |y to locate and | 
00000140 72 65 66 65 72 65 6e 63 65 20 73 70 65 63 69 66 |reference specif| 
00000150 69 63 20 70 6f 73 69 74 69 6f 6e 73 20 69 6e 20 |ic positions in | 
00000160 74 68 65 20 66 69 6c 65 2e 0d 0a 0d 0a 54 68 65 |the file.....The| 
00000170 20 6d 69 64 64 6c 65 20 63 6f 6c 75 6d 6e 20 72 | middle column r| 
00000180 65 70 72 65 73 65 6e 74 73 20 74 68 65 20 68 65 |epresents the he| 
00000190 78 61 64 65 63 69 6d 61 6c 20 72 65 70 72 65 73 |xadecimal repres| 
000001a0 65 6e 74 61 74 69 6f 6e 20 6f 66 20 74 68 65 20 |entation of the | 
000001b0 61 63 74 75 61 6c 20 64 61 74 61 2e 20 45 61 63 |actual data. Eac| 
000001c0 68 20 70 61 69 72 20 6f 66 20 68 65 78 61 64 65 |h pair of hexade| 
000001d0 63 69 6d 61 6c 20 64 69 67 69 74 73 20 63 6f 72 |cimal digits cor| 
000001e0 72 65 73 70 6f 6e 64 73 20 74 6f 20 6f 6e 65 20 |responds to one | 
000001f0 62 79 74 65 20 6f 66 20 64 61 74 61 2e 0d 0a 0d |byte of data....| 
00000200 0a 54 68 65 20 74 68 69 72 64 20 63 6f 6c 75 6d |.The third colum| 
00000210 6e 20 69 73 20 74 68 65 20 61 63 74 75 61 6c 20 |n is the actual | 
00000220 63 6f 6e 74 65 6e 74 20 69 6e 20 74 68 65 20 66 |content in the f| 
00000230 69 6c 65 2e 20 49 66 20 69 74 20 69 73 20 70 72 |ile. If it is pr| 
00000240 69 6e 74 61 62 6c 65 20 61 73 63 69 69 20 28 61 |intable ascii (a| 
00000250 6e 79 20 76 61 6c 75 65 20 74 68 61 74 20 69 73 |ny value that is| 
00000260 20 62 65 74 77 65 65 6e 20 30 78 32 30 20 61 6e | between 0x20 an| 
00000270 64 20 30 78 37 45 2c 20 69 6e 63 6c 75 73 69 76 |d 0x7E, inclusiv| 
00000280 65 29 2c 20 74 68 65 6e 20 69 74 20 77 69 6c 6c |e), then it will| 
00000290 20 62 65 20 64 69 73 70 6c 61 79 65 64 2e 20 4e | be displayed. N| 
000002a0 6f 6e 2d 70 72 69 6e 74 61 62 6c 65 20 61 73 63 |on-printable asc| 
000002b0 69 69 20 68 61 73 20 69 74 73 20 62 79 74 65 20 |ii has its byte | 
000002c0 72 65 70 6c 61 63 65 64 20 77 69 74 68 20 61 20 |replaced with a |
000002d0 27 2e 27 2e                                     |'.'.|
`

    content.innerHTML = `<pre style="font-family: 'Courier New', Courier, monospace; font-size: small;>${example}</pre>`

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

    const showData = () => {

        let view = new DataView(af)

        let result = ''

        let realVals = ''

        let lastByte = ''

        for (let i = 0; i < view.byteLength; i++) {

            //For some reason, when view.getUint8(i) == 60, which is 3c in hex and
            //is < in ascii, it cuts of the rest of the string.
            //store the character value of the current byte or a '.'
            if (view.getUint8(i) != 60 && view.getUint8(i) >= 32 && view.getUint8(i) <= 126) {
                realVals += String.fromCharCode(view.getUint8(i).toString())
            }
            else {
                realVals += '.'
            }

            //print the input offset in hex
            if (i % 16 == 0) {
                result += i.toString(16).padStart(8, '0') + '  '
            }

            //compute the hex representation of the current character
            let value = view.getUint8(i).toString(16).padStart(2, '0')

            //add the hex value to the result
            result += value + ' '

            //if we have reached the 16th byte then start a new line
            if ((i + 1) % 16 == 0) {
                result += ' ' + '|' + realVals + '|' + '<br>'
                if (i !== view.byteLength - 1) {
                    realVals = ''
                }
            }

            //get the offset of the last byte in the file
            if (i === view.byteLength - 1) {
                lastByte = '<br>' + (i + 1).toString(16).padStart(8, '0')
            }

        }

        //add the offset of the last byte to the final line of the output
        result += lastByte

        //add complete output to the content div's innerHTML
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