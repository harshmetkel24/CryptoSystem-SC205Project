let arrTemp1;
let arrTemp2;

window.addEventListener('scroll', (e) => {
    let scroll = this.scrollY;
    if (scroll >= 200) {
        document.getElementById('heading1').classList.toggle('animation');

        document.getElementById('heading2').classList.toggle('animation');
    }
    console.log(scroll);
});
document.getElementById('encryptShift').addEventListener('input', () => {
    let text1 = document.getElementById('encryptShift').value;
    let len1 = text1.length;
    let smaller = [];
    for (let i = 0; i < len1; i++) smaller[i] = false; // this is a array which will keep a note of lowercase and uppercase alphabets enterd by user.
    let incrementer1 = document.getElementById('incrementerShift').value;
    arrTemp1 = text1.split(''); // split will split the string into array of characters.
    for (let i = 0; i < len1; i++) {
        if (text1[i] == ' ') {
            arrTemp1[i] = parseInt(text1.charCodeAt(i));
            console.log(arrTemp1);
            continue;
        }
        if (text1.charCodeAt(i) >= 97 && text1.charCodeAt(i) <= 122) {
            arrTemp1[i] = parseInt(text1.charCodeAt(i)) - 97;
            arrTemp1[i] = (parseInt(arrTemp1[i]) + parseInt(incrementer1)) % 26;
            console.log(arrTemp1);
            smaller[i] = true;
            continue;
        }
        arrTemp1[i] = parseInt(text1.charCodeAt(i)) - 65;
        arrTemp1[i] = (parseInt(arrTemp1[i]) + parseInt(incrementer1)) % 26;
        console.log(arrTemp1);
    }
    console.table(smaller);
    // function to add the html of cncrypted text
    let text2 = '';
    document.getElementById('encryptShiftBtn').addEventListener('click', () => {
        for (let i = 0; i < len1; i++) {
            if (arrTemp1[i] == 32) {
                text2 += String.fromCharCode(arrTemp1[i]);
                continue;
            }
            if (smaller[i]) {
                text2 += String.fromCharCode(arrTemp1[i] + 97);
                continue;
            }
            text2 += String.fromCharCode(arrTemp1[i] + 65);
            console.log(text2);
        }
        document.getElementById(
            'ecryptedText'
        ).innerHTML = `encrypted text is: ${text2}`;
    });
    document.getElementById('decryptShift').addEventListener('click', () => {
        console.log(text2);
        let decrypt = '';
        let ans = [];
        for (let i = 0; i < len1; i++) {
            if (text2[i] == ' ') {
                decrypt += ' ';
                continue;
            }
            if (smaller[i]) {
                ans[i] = parseInt(text2.charCodeAt(i)) - 97;
                ans[i] = (ans[i] - incrementer1 + 26) % 26;
                decrypt += String.fromCharCode(ans[i] + 97);
                continue;
            }
            ans[i] = parseInt(text2.charCodeAt(i)) - 65;
            ans[i] = (ans[i] - incrementer1 + 26) % 26;
            decrypt += String.fromCharCode(ans[i] + 65);
        }
        console.log(decrypt);
        document.getElementById(
            'decryptedText'
        ).innerHTML = `Decrypted text is: ${decrypt}`;
    });
});

document.getElementById('ecnryptAffine').addEventListener('input', () => {
    let text1 = document.getElementById('ecnryptAffine').value;
    let len1 = text1.length;
    let smaller = [];
    let m = document.getElementById('multiplier').value;
    let x; // inverse no in Z26
    console.log(m); // multiplier
    for (let i = 0; i < len1; i++) smaller[i] = false;
    let incrementer1 = document.getElementById('incrementerAffine').value;

    arrTemp2 = text1.split(''); // split will split the string into array of characters.
    for (let i = 0; i < len1; i++) {
        if (text1[i] == ' ') {
            arrTemp2[i] = parseInt(text1.charCodeAt(i));
            console.log(arrTemp2);
            continue;
        }
        if (text1.charCodeAt(i) >= 97 && text1.charCodeAt(i) <= 122) {
            arrTemp2[i] = parseInt(text1.charCodeAt(i)) - 97;
            arrTemp2[i] =
                (parseInt(arrTemp2[i]) * parseInt(m) + parseInt(incrementer1)) %
                26;
            console.log(arrTemp2);
            smaller[i] = true;
            continue;
        }
        arrTemp2[i] = parseInt(text1.charCodeAt(i)) - 65;
        arrTemp2[i] =
            (parseInt(arrTemp2[i]) * parseInt(m) + parseInt(incrementer1)) % 26;
        console.log(arrTemp2);
        smaller[i] = true;
    }
    console.table(smaller);
    // function to add the html of cncrypted text
    let text2 = '';
    document
        .getElementById('encryptAffineBtn')
        .addEventListener('click', () => {
            // Decider code of the inverse of multiplier
            if (m == 3) x = 9;
            else if (m == 5) x = 21;
            else if (m == 7) x = 15;
            else if (m == 9) x = 3;
            else if (m == 11) x = 19;
            else if (m == 15) x = 7;
            else if (m == 19) x = 11;
            else if (m == 21) x = 5;
            else if (m == 23) x = 17;
            else if (m == 25) x = 25;
            else {
                alert(
                    'Plese check, you have entered the wrong number for incrementer. It must be one of above list.'
                );
                console.log(m);
                return;
            }
            console.log(m);
            for (let i = 0; i < len1; i++) {
                if (arrTemp2[i] == 32) {
                    text2 += String.fromCharCode(arrTemp2[i]);
                    console.log(text2);
                    continue;
                }
                if (smaller[i]) {
                    text2 += String.fromCharCode(arrTemp2[i] + 97);
                    console.log(text2);
                    continue;
                }
                text2 += String.fromCharCode(arrTemp2[i] + 65);
            }
            console.log(text2);
            document.getElementById(
                'encyptedTextAffine'
            ).innerHTML = `${text2}`;
        });
    document
        .getElementById('decryptAffineBtn')
        .addEventListener('click', () => {
            console.log(text2);
            let decrypt = '';
            let ans = [];
            for (let i = 0; i < len1; i++) {
                if (text2[i] == ' ') {
                    decrypt += ' ';
                    continue;
                }
                if (smaller[i]) {
                    ans[i] = parseInt(text2.charCodeAt(i)) - 97;
                    ans[i] = ((ans[i] - incrementer1 + 26) * x) % 26;
                    decrypt += String.fromCharCode(ans[i] + 97);
                    continue;
                }
                ans[i] = parseInt(text2.charCodeAt(i)) - 65;
                ans[i] = ((ans[i] - incrementer1 + 26) * x) % 26;
                decrypt += String.fromCharCode(ans[i] + 65);
            }
            console.log(decrypt);
            document.getElementById(
                'decryptAffine'
            ).innerHTML = `Decrypted text is: ${decrypt}`;
        });
});

// RSA CRYPTO sYSTEM

var p1, p2; // declating global variables.

function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

let E = 2;
document.getElementById('prime1').addEventListener('input', () => {
    p1 = document.getElementById('prime1').value;
    p1 = parseInt(p1);
    console.log(`p1: ${p1}`);
});
document.getElementById('prime2').addEventListener('input', () => {
    p2 = document.getElementById('prime2').value;
    p2 = parseInt(p2);
    console.log(`p2: ${p2}`);
});
document.getElementById('giveKeys').addEventListener('click', () => {
    let N = parseInt(p1) * parseInt(p2);
    console.log(N);
    let phi = (parseInt(p1) - 1) * (parseInt(p2) - 1);
    console.log(phi);
    for (let i = 2; i < phi; i++) {
        if (gcd(E, phi) == 1) break;
        E++;
        console.log(E);
    }
    let temp = document.getElementById('keys');
    temp.innerHTML = `Public keys:<br>N : ${N} and E : ${E}`;
    document.getElementById('keys').style.display = 'block';
    console.log(temp);
    let privateKey;
    privateKey = parseInt((2 * phi + 1) / E);
    console.log(`D = ${privateKey}`);
    let message,
        messageArr = [];
    document.getElementById('message').addEventListener('input', () => {
        message = document.getElementById('message').value;
        messageArr = message.split('');
        for (let i = 0; i < message.length; i++) {
            messageArr[i] = message.charCodeAt(i) - 65;
        }
        console.log(`messageArr = ${messageArr}`);
    });
    var ecnryptedMessageArr = [];
    var ecnryptedMessage = '';

    document.getElementById('encryptbtn').addEventListener('click', () => {
        for (let i = 0; i < messageArr.length; i++) {
            ecnryptedMessageArr[i] =
                (Math.pow(parseInt(messageArr[i]), E) % N) % 26;
            console.log(ecnryptedMessageArr);
            ecnryptedMessage += String.fromCharCode(
                ecnryptedMessageArr[i] + 65
            );
        }
        document.getElementById(
            'encyptedtedtextRSA'
        ).innerHTML = `Encrypted text using public keys is:<br>${ecnryptedMessage}`;
    });
    let decryptedMessageArr = [];
    let decryptedMessage = '';
    document;
    decryptbtn.addEventListener('click', () => {
        for (let i = 0; i < ecnryptedMessageArr.length; i++) {
            console.log(`privateKey: ${privateKey}`);
            decryptedMessageArr[i] =
                Math.pow(
                    parseInt(ecnryptedMessageArr[i]),
                    parseInt(privateKey)
                ) % N;
            console.log(decryptedMessageArr);
            decryptedMessage += String.fromCharCode(
                decryptedMessageArr[i] + 65
            );
            console.log(decryptedMessage);
        }
        document.getElementById(
            'decryptedtextRSA'
        ).innerHTML = `Decrypted text is:<br>
        ${decryptedMessage}`;
    });
});
// on reload the display of keys become none again means hidden
window.addEventListener('load', () => {
    document.getElementsByTagName('textarea').value = '';
    document.getElementsByTagName('text').value = '';
    document.getElementById('keys').style.display = 'none';
    document.getElementById('prime1').innerHTML = `
    <option value="#" selected>select p1</option>
    <option value="3">3</option>
    <option value="11">11</option>
    <option value="17">17</option>`;
    document.getElementById(
        'prime2'
    ).innerHTML = ` <option value="#" selected> select p2</option>
    <option value="5">5</option>
    <option value="7">7</option>
    <option value="13">13</option>`;
});

// Lempel-Ziv Coding:

// events

// function onload() {
//     let textareaToCompress = document.getElementById('textAreaToCompress');
//     textareaToCompress.innerHTML =
//         DeclarationOfIndependece.IntroductionAndPreamble;
// }

// function buttonClearDataCompressed_Click() {
//     let textareaDataCompressed = document.getElementById(
//         'textAreaDataCompressed'
//     );
//     textareaDataCompressed = '';
// }
// function buttonClearTextToCompress_Click() {
//     let textareaTextToCompress = document.getElementById('textAreaToCompress');
//     textareaTextToCompressID.value = '';
// }

// function buttonCompress_Click() {
//     let textareaTextToCompress = document.getElementById('textAreaToCompress');
//     let textareaTextDataCompressed = document.getElementById(
//         'textAreaDataCompressed'
//     );
//     let stringToCompress = textareaTextToCompress.value;
//     let compressor = new CompressorLZW(); // new creates the blank plain javascript object
//     let bytesCompressed = compressor.commpressString(stringToCompress);
//     let bytesCompressedAsString = bytesCompressed.join(','); // separates the array elements by comma
//     textareaDataCompressed.value = bytesCompressedAsString;
// }

// function buttonDecompress_Click() {
//     let textareaTextToCompress = document.getElementById('textAreaToCompress');
//     let textareaDataCompressed = document.getElementById(
//         'textAreaDataCompressed'
//     );
//     let compressor = new CompressorLZW(); // new creates the blank plain javascript object
//     let bytesCompressedAsString = textareaDataCompressed.value;
//     let bytesCompressedAsStrings = bytesCompressedAsString.split('.'); //this will comvert the one single string to compress into sub array around ',
//     let bytesCompressed = [];
//     for (let i = 0; i < bytesCompressedAsStrings.length; i++) {
//         let bytesCompressedAsNumber = parseInt(bytesCompressedAsString[i]);
//         bytesCompressed.push(bytesCompressedAsNumber); // this will push the each string as number into a bytesCompresed Object
//     }
//     let bytesDecompressed = compressor.decompressBytes(bytesDecompressed); // this fucntion will decompress the compressed string and returns it
//     let bytesDecompressedAsString = '';
//     for (let i = 0; i < bytesDecompressed.length; i++) {
//         bytesDecompressedAsString += String.fromCharCode(bytesDecompressed[i]);
//     }
//     textareaDataCompressed.value = bytesDecompressedAsString;
// }

// // classes

// function BitStream(bytes) {
//     if (bytes == null) butes = []; // null object  is created
//     this.bytes = bytes; // as we are in non-strict mode this.bytes gives the reference to object
//     this.byteOffset = 0;
//     this.bitOffsetWithinByteCurrent = 0;
//     this.byteCurrent = 0;
// }

// {
//     // constants
//     BitStream.BitsPerByte = 8;
//     BitStream.NaturalLogaritmOf2 = Math.log(2);

//     //static methods

//     BitStream.convertNumberToString = (numberToConvert) => {
//         let returnValue = '';
//         let numberOfBitsNeeded = Math.ceil(
//             Math.log(numberToConvert + 1) / BitStream.NaturalLogaritmOf2
//         ); // Math.ceil is ceiling function
//         if (numberOfBitsNeeded == 0) numberOfBitsNeeded = 1;
//         for (let j = 0; j < numberOfBitsNeeded; j++) {
//             let bitValue = (numberToConvert >> j) & 1;
//             returnValue = '' + bitValue + returnValue; // this will prepend the bitvalue to return value
//         }
//         return returnValue;
//     };

//     // instance methods

//     Bitstream.prototype.close = () => {
//         if (this.bitOffsetWithinByteCurrent > 0)
//             this.bytes.push(this.byteCurrent);
//     };
//     // if bits legth is more than value of byteIndexCurrent means there are more bits
//     BitStream.prototype.hasMoreBits = () =>
//         this.byteIndexCurrent < this.bytes.length;

//     BitStream.prototype.readBit = () => {
//         this.byteCurrent = this.bytes[this.byteOffset];
//         let returnValue =
//             (this.byteCurrent >> this.bitOffsetWithinByteCurrent) & 1;
//         this.bitOffsetWithinByteCurrent++;
//         if (this.bitOffsetWithinByteCurrent >= BitStream.BitsPerByte) {
//             this.byteOffset++;
//             this.bitOffsetWithinByteCurrent = 0;
//             if (this.byteOffset < this.bytes.length)
//                 this.byteCurrent = this.bytes[this.byteOffset];
//             else this.hasMoreBits = false;
//         }
//         return returnValue;
//     };
// }
