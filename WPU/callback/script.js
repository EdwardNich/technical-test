// Callback
// function yang dikirim sebagai parameter pada fungsi lain
// function yang di eksekusi setelah function lain selesai dijalankan






// Synchronous callback
// function halo(nama) {
//     alert(`Halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//     let nama = prompt('Masukkan nama : ');
//     return callback(nama);
// }

// tampilkanPesan(halo)



// function tampilkanPesan(callback) {
//     let nama = prompt('Masukkan nama : ');
//     return callback(nama);
// } 

// tampilkanPesan(nama => alert(`Halo ${nama}`));



// const user = [
//     {
//         nama: 'Doltons',
//         umur: 18
//     },
//     {
//         nama: 'Edward',
//         umur: 14
//     },
//     {
//         nama: 'Nico',
//         umur: 20
//     },
// ]


// console.log('Mulai');
// user.forEach(usr => {
//     // simulasikan for sebagai loading
//     for (let i = 0; i <= 1000000; i++) {
//         let date = new Date();
//     }

//     console.log(usr.nama); // task ini akan selalu menunggu proses dari task for diatas
// })
// console.log('Selesai');

// akan terjadi proses tunggu yang lumayan memakan waktu karena menggunakan operasi synchronous







// Asynchronous callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if ( xhr.readyState === 4 ) {
//             if ( xhr.status === 200 ) {
//                 success(xhr.response)
//             } else if ( xhr.status === 404 ) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/user.json', result => {
//     const usr = JSON.parse(result);
//     usr.forEach(u => console.log(u.nama));
// }, ()=> {
//     console.log('data not found');
// });
// console.log('selesai');

// dengan JQuery
// console.log('mulai');
// function getDataMahasiswa(url) {
//     $.ajax({
//         type: 'get',
//         url: url,
//         success: (usr) => {
//             usr.forEach(u => console.log(u.nama))
//         },
//         error: (e) => {
//             document.body.innerHTML = e.responseText;
//         }
//     })
// }
// console.log('selesai');

// getDataMahasiswa('data/user.json');

