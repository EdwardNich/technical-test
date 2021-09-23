// asynchronous
/*
    - Callback
    - Promise 
    - ajax
    - Async Await
*/

// javascript ?
// javascript adalah bahasa pemprograman tingkat tinggi dan dinamis yang secara umum dapat di jalankan di browser
// atau
// javascript is a single-threaded, non-blocking, asynchronous and concurrent language







// thread adalah urutan eksekusi kode yang dapat dilakukan secara bebas / independent satu sama lain
// Single thread
// dengan satu thread maka suatu task di jalankan satu per satu tapi bisa di jalankan di thread yang sama

// Multi thread
// dengan multi thread maka suatu task di jalankan satu per satu tapi bisa di jalankan di thread yang berbeda

// Blocking
// blocking adalah suatu proses yang harus selesai pada waktu tertentu untuk melanjutkan kode proses yang lain

// Non-blocking
// Non-blocking adalah suatu proses yang akan melanjutkan proses lain nya walapun proses sebelumnya belum selesai

// Synchronous
// Operasi synchronous akan memblokir task lain sampai task yang sekarang dijalankan selesai di eksekusi 

// Asynchronous
// Operasi asynchronous akan menjalankan task lain jika task yang terlibat dengan asynchronous membutuhkan proses
// Operasi asynchronous akan melanjutkan task yang lain jika task termasuk asynchronous callback

// Asynchronous + Single thread = Concurrency
// Asynchronous + Single thread = Parallelism







// Kesimpulan:
/*
    Single vs Multi Thread
    Lingkup eksekusi 'task'

    Blocking vs Non-Blocking
    Teknik ngoding (IO / Input Output Related)

    Synchronous vs Asynchrous
    Teknik ngoding (HTTP Request related)

    Concurrent vs Parallel
    Linkungan eksekusi task
*/







// Contoh:
// Synchronous
// console.log('Mulai');
// for (let i = 0; i < 10; i++) {
//     console.log('halo')
// }
// console.log('Stop');



// Asynchronous
// console.log('Mulai');
// setTimeout(() => {
//     for (let i = 0; i < 10; i++) {
//         console.log('halo')
//     }
// }, 0)
// console.log('Stop');












// Reference: 
// http://latentflip.com/loupe/

