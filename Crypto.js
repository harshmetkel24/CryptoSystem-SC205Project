document.getElementById('encryptShift').addEventListener('input', () => {
    let incrementer1 = document.getElementById('incrementerShift').value;
    let text1 = document.getElementById('encryptShift').value;
    let temptext1 = text1;
    let len1 = text1.length;
    temptext1 = text1.split('');
    let arrTemp1 = [];
    for (let i = 0; i < len1; i++) {
        if (text1[i] == ' ') {
            arrTemp1[i] = parseInt(text1.charCodeAt(i));
            console.log(arrTemp1);
            continue;
        }
        arrTemp1[i] = parseInt(text1.charCodeAt(i)) - 65;
        arrTemp1[i] = parseInt(arrTemp1[i]) + parseInt(incrementer1);
        console.log(arrTemp1);
    }
});
