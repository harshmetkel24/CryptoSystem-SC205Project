let arrTemp1;
document.getElementById('encryptShift').addEventListener('input', () => {
    let text1 = document.getElementById('encryptShift').value;
    let len1 = text1.length;
    let smaller = false;
    let incrementer1 = document.getElementById('incrementerShift').value;
    arrTemp1 = text1.split('');
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
            smaller = true;
            continue;
        }
        arrTemp1[i] = parseInt(text1.charCodeAt(i)) - 65;
        arrTemp1[i] = (parseInt(arrTemp1[i]) + parseInt(incrementer1)) % 26;
        console.log(arrTemp1);
    }
    // function to add the html of cncrypted text
    let text2 = '';
    document.getElementById('encryptShiftBtn').addEventListener('click', () => {
        for (let i = 0; i < len1; i++) {
            if (arrTemp1[i] == 32) {
                text2 += String.fromCharCode(arrTemp1[i]);
                continue;
            }
            if (smaller) {
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
            if (smaller) {
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
