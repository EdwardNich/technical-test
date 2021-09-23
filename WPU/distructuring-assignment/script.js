// Distructuring assingment
/*
    merupakan expression dalam javascript yang dapat membuat kita dapat membongkar nilai array
    atau properti dari object ke dalam variable terpisah
*/

// example dengan array
// const angka = [1, 2, 3];

// const [a, b, c] = angka;
// console.log(a)
// console.log(b)
// console.log(c)



// kode diatas kalau dulunya menggunakan cara seperti ini
// const angka = [1, 2, 3];

// const a = angka[0];
// const b = angka[1];
// const c = angka[2];

// console.log(a)
// console.log(b)
// console.log(c)



// Skipping Items
// const angka = [1, 2, 3];

// const [a, , c] = angka;
// console.log(`${a} ${c}`)



// Swap Items atau pertukaran item
// let a = 'a';
// let b = 'b';

// [a, b] = [b, a]; 



// return array pada function
// const coba = () => [1, 2, 3];

// let [a, b, c] = coba();
// console.log(a)

// atau

// function coba() {
//     return [1, 2, 3];
// }

// let [a, b, c] = coba();
// console.log(a)



// Rest Parameter
// penggunaan normal
// const [a, b, c] = [1, 2, 3];
// console.log(a);
// console.log(b);
// console.log(c);

// dengan rest parameter
// const [a, ...values] = [1, 2, 3]; // dengan rest parameter semua nilai setelah nilai pertama akan masuk ke values
// console.log(a);
// console.log(values);







// example dengan object
// const mhs = {
//     nama: 'Doltons Edward Nicholas',
//     umur: 18
// }

// const { nama, umur } = mhs;
// console.log(nama)



// Assignment tanpa deklarasi object

// ({ nama, umur } = {
//     nama: 'Doltons Edward Nicholas',
//     umur: 18
// });

// atau 

// ({ nama, umur } = { nama: 'Doltons Edward Nicholas', umur: 18 });
// console.log(nama)



// Assign ke variable baru
// const mhs = {
//     nama: 'Doltons Edward Nicholas',
//     umur: 18
// }

// const { nama: n, umur: u } = mhs;
// console.log(n)



// Memberi nilai default 
// const mhs = {
//     nama: 'Doltons Edward Nicholas',
//     umur: 18,
//     email: 'edwarddoltons@cyber.id' // email pada objek mhs yang di prioritaskan
// }

// const { nama, umur, email = 'edwarddoltos@gmail.com' } = mhs;
// console.log(email)



// Memberi nilai default + Assign variable baru
// const mhs = {
//     nama: 'Doltons Edward Nicholas',
//     umur: 18,
//     email: 'edwarddoltons@cyber.id' // email pada objek mhs yang di prioritaskan
// }

// const { nama: n, umur: u, email: e = 'edwarddoltos@gmail.com' } = mhs;
// console.log(email); // email tidak akan dikenali karena sudah di assign ke variable e
// console.log(e);



// Rest parameter
// const mhs = {
//     nama: 'Doltons Edward Nicholas',
//     umur: 18,
//     email: 'edwarddoltons@cyber.id' // email pada objek mhs yang di prioritaskan
// }

// const { nama, ...values} = mhs;
// console.log(values);



// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//     id: 123,
//     nama: 'Doltons Edward Nicholas',
//     umur: 18,
//     email: 'edwarddoltons@cyber.id' // email pada objek mhs yang di prioritaskan
// }

// function getValueMhs({ id, nama }) {
//     return `nama: ${nama} dan id: ${id}`;
// }

// console.log(getValueMhs(mhs));