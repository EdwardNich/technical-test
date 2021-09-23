// Spread operator vs Rest Parameter
// sama2 dibuat dengan ...

// Spread operator
// Memecah (expand / unpack) iterables menjadi singgle element
// const user = ['Dollong', 'Erik', 'Adi'];
// console.log(...user);
// console.log(...user[0]);


// menggabungkan dua array
// const mhs = ['Dollong', 'Edward', 'Nicholas'];
// const dosen = ['Adi', 'Erik', 'Dika'];
// const user = [...mhs, 'Aji', ...dosen];
// const user = mhs.concat(dosen)
// console.log(user)


// meng copy array
// const user = ['Dollong', 'Edward'];
// const user1 = user; // dengan melakukan cara ini berarti kita membuat referensi dari user
// user1[0] = 'Nico'; // user1 dan user pada nilai pertama berubah jadi Nico

// console.log(user)


// const user = ['Dollong', 'Edward'];
// const user1 = [...user];
// user1[0] = 'Nico';

// console.log(user)
// console.log(user1)







// Study case
// const liMhs = document.querySelectorAll('li');
// console.log(liMhs);

// dengan for
// for (let i = 0; i < liMhs.length; i++) {
//     console.log(liMhs[i].textContent)
// }

// dengan spread operator + map
// const listMhs = [];
// [...liMhs].map(item => listMhs.push(item));
// listMhs[0].innerHTML = 'Nico';







// Study case 2 , styling
let h1 = document.querySelector('h1');
let huruf = [...h1.textContent].map(item => `<span>${item}</span>`).join('');

h1.innerHTML = huruf
