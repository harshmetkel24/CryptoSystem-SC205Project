let arrTemp1;
let arrTemp2;
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
