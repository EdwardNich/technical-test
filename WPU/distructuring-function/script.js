// Destructuring function
// dengan return array
// function operator(a, b) {
//     return [
//         a + b,
//         a - b,
//         a * b,
//         Math.floor(a / b),
//         a % b,
//     ]
// }

// const [ tambah, kurang, kali, bagi, sisa ] = operator(2, 3); // karena array berurut menurut index jadi di pecahkan nya juga berurut
// console.log(tambah)



// atau dengan destructuring 



// dengan return objek
// function operator(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: Math.floor(a / b),
//         sisa: a % b,
//     }
// }

// const { kurang, tambah, kali, bagi, modulus } = operator(2, 3); // dengan objek karena properti nya sudah dibuat jadi tinggal di pecahkan dan dipanggil
// console.log(kurang)



// Destructuring function arguments
const mhs = {
    nama: 'Doltons Edward Nicholas',
    umur: 18
};



function panggilMhs({ nama, umur }) {
    return `Halo nama saya ${nama}, saya ${umur} tahun`
}

console.log(panggilMhs(mhs))