// TEMPLATE LITERAL / TEMPLATE STRING
// template literal adalah STRING LITERAL yang memungkinkan adanya expression di dalam string
// template literal hanya bisa dibuat dengan backtick

/*
    dengan template literal kita bisa:

    - Multi line string
    - Embeded expression
    - HTML Fragment
    - Expression interpolation
    - Tag template
*/

// const namaDepan = 'Doltons Edward Nicholas';
// const namaBelakang = 'Pabiaran'
// const umur = 18;


// membuat string pada dasarnya dengan concat atau +
// console.log('Halo, saya ' + namaDepan + ' ' + namaBelakang + ', saya berumur ' + umur); // dengan kutip satu
// console.log("Halo, saya " + namaDepan + " " + namaBelakang + ", saya berumur " + umur); // dengan kutip dua
// console.log('Halo, saya '.concat(namaDepan).concat(' ').concat(namaBelakang).concat(', saya berumur ').concat(umur)); // model chaining dengan menyambung method

// dengan string literal
// console.log(`Halo, saya ${namaDepan} ${namaBelakang}, saya berumur ${umur}`);






// Multi line string
// dengan string biasa
// console.log('1.String satu\n2.String dua');
// dengan STRING LITERAL
// console.log(`1.String satu
// 2.String dua`);







// Multi line string (HTML Fragment)
// const mhs = {
//     nama: 'Doltons Edward Nicholas',
//     umur: 18,
//     email: 'edwarddoltons@gmail.com'
// }

// let el = `
// <div className="mhs">
//     <h2>Nama</h2>
//     <p>${mhs.nama}</p>
// </div>
// `







// Embeded expression
// console.log(`Halo, saya ${mhs.nama}, saya berumur ${mhs.umur}`);







// Expression Interpolation
// let x = 10;
// let y = 12; 

// console.log(`Jika x = 10 dan y = 12, maka jumlah kedua nya adalah ${x + y} bukan ${2 + x + y}`)
