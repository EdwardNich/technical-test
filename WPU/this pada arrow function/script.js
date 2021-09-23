// This pada arrow function
// Di dalam arrow function tidak ada this


// example dengan constructor function:
// function Pemanggil(nama) {
//     this.nama = nama
//     this.waktu = 'pagi';
//     this.greeting = function() {
//         console.log(`Halo ${this.nama}, Selamat ${this.waktu} `)
//     }
// }

// let dollong = new Pemanggil('dollong');
// dollong.greeting();

// constructor function dengan nested arrow function
// function Pemanggil(nama) {
//     this.nama = nama
//     this.waktu = 'pagi';
//     this.greeting = ()=> { // membuat function expression dengan arrow function
//         console.log(`Halo ${this.nama}, Selamat ${this.waktu} `) // di dalam arrow function dia akan mengecek ke parent nya untuk melihat apakah ada this dan ternyata ada maka outputnya sama
//     }
// }

// let dollong = new Pemanggil('dollong');
// dollong.greeting();





// example dengan object literal
// let nama = 'dol';
// const mhs = {
//     nama: 'Dollong',
//     umur: 18,
//     sayHello: function() { // membuat function expression
//         console.log(this.nama) // karena object mempunya i konsep this maka this disi merujuk pada object pemilik nya, dalam kasus ini = mhs
//     }
// }

// mhs.sayHello()

// const mhs = {
//     nama: 'Dollong',
//     umur: 18,
//     sayHello: ()=> { // dengan menggunakan arrow function maka,
//         console.log(this.nama) // this disini akan mengarah kepada object window karena dalam arrow function tidak mempunyai konsep this dan di cek di dalam mhs memang tidak ada maka dia keatas dan mencari ke object window tapi tidak di temukan juga 
//     }
// }

// mhs.sayHello()






// this pada build in function 
// function Pemanggil(nama) {
//     this.nama = nama
//     this.waktu = 'pagi';
//     this.umur = 10;
//     this.greeting = ()=> { // membuat function expression dengan arrow function
//         console.log(`Halo ${this.nama}, Selamat ${this.waktu} `) // di dalam arrow function dia akan mengecek ke parent nya untuk melihat apakah ada this dan ternyata ada maka outputnya sama
//     }

//     // setInterval(function() { //menggunakan function declaration 
//     //     console.log(this) // dengan menggunakan function declaration maka this akan mengecek di function dimana di panggil, tapi karena setInterval berada diluar maka akan mencari keluar juga sampai ke object this
//     // }, 2000);

//     setInterval(() => { //menggunakan arrow function 
//         console.log(this.umur++) // dengan menggunakan arrow function, arena arrow function tidak memiliki konsep this maka dia akan mencari ke lexical scope nya 
//     }, 2000);
// }

// let dollong = new Pemanggil('dollong');






// study case, ubah style pada box
let box = document.querySelector('.box');
box.addEventListener('click', function() { // add event listener termasuk HOC
    let satu = 'size', dua = 'background';
    // if (this.classList.contains(satu)) {
    //     [sat, dua] = [dua, satu]
    // }

    this.classList.contains(satu) ? [satu, dua] = [dua, satu] : undefined; // dengan ternary operator
    this.classList.toggle(satu);
    setTimeout(()=> {
        this.classList.toggle(dua);
    }, 600)
})









// reminder:
// function declaration menggunakan hoisting