// Tagged Template adalah versi kompleks dari String Literal, memungkinkan kita untuk membaca sebuah template literal melalui sebuah function
const nama = 'Doltons Edward Nicholas';
const umur = 18;

function highlight(strings, ...values) {
    // let result = ''
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`
    // })

    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '')
}

let str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun` 

document.getElementsByClassName('output')[0].innerHTML = `<p>${str}</p>`;









// Fungsi menggunakan Tagged Template
/*
    - Escaping HTML Tags // untuk menghindari script atau text yang tidak diinginkan
    - Translation 
    - Style component
*/