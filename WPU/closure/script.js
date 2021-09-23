// function init() {
//     let nama = 'Doltons Edward Nicholas'; // lokal scope
//     function pemanggilNama() {
//         console.log(nama);
//     } 
    
//     pemanggilNama();
// }

// init()







// function init() {
//     return function(nama) {
//         console.log(nama);
//     }
// }

// let dollong = init();
// dollong('dollong');







// function pemanggilNama(waktu) {
//     return function(nama) {
//         return `Halo ${nama} selamat ${waktu}`;
//     };
// };

// console.log(selamatPagi('dollong'))







// let tambahNilai = (function() {
//     let counter = 0;
//     return function() {
//         return ++counter;
//     }
// })();

// console.log(tambahNilai());







// let tambahNilai = (function() {
//     return function(s) {
//         return s * s;
//     }
// })();

// console.log(tambahNilai(1));
// console.log(tambahNilai(2));






/* another study case */
// let mtk = (function() {
//     return function(rumus, val) {
//         return rumus === 'persegi' ? val * val 
//             : 'persegi panjang' ? val * 4
//             : 'not found'
//     }
// })();

// console.log(mtk('persegi panjang', 5))