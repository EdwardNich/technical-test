let angka = [-5, 4, 6, -2, 9, 1, -6, -7, 7, 8];

// mencari angka lebih besar dari 2

// for
// let diatasDua = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 2) {
//         diatasDua.push(angka[i])
//     }
// }

// console.log(diatasDua)







// filter
// mencari angka yang lebih besar atau sama dengan dua
// let diatasDua = angka.filter(a => a >= 2)
// console.log(diatasDua)







// map
// mencari angka yang lebih besar atau sama dengan dua
// let newAngka = [];
// let diatasDua = angka.map(a => a >= 2 ? newAngka.push(a) : []);
// console.log(newAngka)

// mencari angka yang lebih besar atau sama dengan dua
// let newAngka = angka.map(a => a * 2);
// console.log(newAngka)







// reduce
let newAngka = angka.reduce((accumulator, currentvalue) => accumulator + currentvalue);
console.log(newAngka)