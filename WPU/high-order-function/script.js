// HIGH ORDER FUNCTION
// High Order Function adalah sebuah function yang di dalam nya berisi sebuah callback 
// function greeting(panggil) {
//     let nama = prompt('Siapa nama mu: ');
//     panggil(nama);
// }

// function panggil(n) {
//     console.log(`Halo ${n} selamat pagi`)
// }

// greeting(panggil);







// function sayHello(nama, act) {
//     return act(`Halo ${nama}`);
// }

// sayHello('dollong', console.log);
// sayHello('dollong', alert);





// ini juga termasuk high order function
setTimeout(function() {
    let nama = prompt('Siapa nama mu? ');
    let waktu = prompt('Jam berapa sekarang? ');
    
    waktu >= 12 && waktu <= 16 ? waktu = 'Siang' 
        : waktu <= 11 ? waktu = 'Pagi'
        : waktu = 'Malam';

    console.log(`Halo ${nama} selamat ${waktu}`)
}, 1000)






// kesimpulan:
// semua yang menggunakan function di dalam ataupun di parameter di sebut high order function