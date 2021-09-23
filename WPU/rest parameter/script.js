// Spread operator vs Rest Parameter
// Rest Parameter
// Mempresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array - MDN

function myFunc() {
    // return Array.from(arguments);
    return [...arguments];
}

console.log(myFunc(1,2,3,4,5,6));






// function jumlah(...angka) {
//     let jumlah = 0;
//     for (const num of angka) {
//         jumlah += num;
//     }

//     return jumlah
// }

// console.log(jumlah(1,2,3,4,5))