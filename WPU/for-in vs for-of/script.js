// for..of
// Creates a loop iterating over iterable object - MDN
// Yang bisa mengulang atau menelusuri objek2 yang iterable 

// array
// let user = ['Dollong', 'Edward', 'Nicholas']

// menggunakan for
// for (let i = 0; i < user.length; i++) {
//     console.log(user[i]);
// }

// menggunakan forEach
// user.forEach(item => console.log(item))

// menggunakan for of
// for ( const usr of user) { console.log(usr) }






// string
// const nama = 'Doltons';

// menggunakan for
// for (let i = 0; i < nama.length; i++) {
//     console.log(nama[i]);
// }

// menggunakan forEach
// nama.forEach(item => console.log(item)); // erornya akan menyatakan bahwa foreach bukan method nya nama

// menggunakan for of
// for (const n of nama) { console.log(n) }



// beberapa kekurangan 
// Untuk mengambil index dari array
// let user = ['Dollong', 'Edward', 'Nicholas']

// dengan forEach
// user.forEach((u, i) => console.log(i)); // kita menggunakan kurung di parameter karena parameternya lebih dari satu
// study case
// user.forEach((nama, i) => {
//     console.log(`${nama} adalah mahasiswa dari urutan ke ${i + 1}`)
// }); 

// dengan for of
// for ( const nama of user ) {
//     console.log(nama) // tidak akan bisa mendapatkan indexnya dengan cara ini
// } 

// cara atasi
// for ( const [i, nama] of user.entries() ) {
//     console.log(`${nama} adalah mahasiswa urutan ke-${i + 1}`)
// }







// NodeList
// const listName = document.querySelectorAll('li');
// console.log(listName);

// karena merupakan NodeList, untuk menyeleksi satu2 kita gunakan cara lain
// dengan forEach
// listName.forEach(n => console.log(n.textContent));

// dengan for of 
// for (const n of listName) {
//     console.log(n.textContent)
// }








// arguments
// function jumlah() { // tidak ada argumen tapi kita mengirimkan parameter maka secara default masuk di iterate object arguments
//     // console.log(arguments);

//     // dengan forEach
//     // arguments.forEach(item => console.log(item)) // error karena forEach bukan fungsi milik arguments

//     // dengan reduce
//     // arguments.reduce((a, i) => a + i)  error karena reduce bukan fungsi milik arguments

//     // dengan for of 
//     let jumlah = 0;
//     for(const n of arguments) {
//         jumlah += n;
//         console.log(jumlah);
//     }    
// }

// jumlah(1,2,3,4,5)


















// for..in
// Creates a loop only iterating over enumberable - MDN
// menggunakan for..in hanya untuk melakukan looping pada properti object
// const user = {
//     nama: 'Doltons Edward Nicholas',
//     umur: 18,
//     profesi: 'Designer'
// }

// dengan for of
// for (item of user) { console.log(item) } // error user is not iterable

// dengan for..in
// for (item in user) { console.log(item) } 
// jika ingin mengambil tiap nilai dari properti nya
// for (item in user) { console.log(user[item]) }