// regular function 
// function greeting(nama) {
//     return `halo ${nama}`;
// }
// console.log(greeting('dollong'));







// function expression
// let greeting = function(nama) {
//     return `halo ${nama}`;
// }
// console.log(greeting('dollong'));







// arrow function 
// let greeting = (nama) => { return `halo ${nama}` }
// console.log(greeting('dollong'))

// with shorthand
// let greeting = (nama) => `halo ${nama}`;
// console.log(greeting('dollong'))

// jika parameter nya hanya satu + shorthand
// implicit return
// let greeting = nama => `halo ${nama}`;
// console.log(greeting('dollong'));

// jika ingin me return object
const arrNama = ['dollong', 'erik', 'edwin']

let jumlahHuruf = arrNama.map(nama => ({ nama, jmlHuruf: nama.length }));
console.table(jumlahHuruf)