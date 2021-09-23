let box = document.getElementsByClassName('box');
let bx = document.getElementById('bx');
let output = document.getElementById('output');

var kataPertama,
    kataKedua,
    kataKetiga,
    kataKeempat;

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', ()=> {
        box[i].setAttribute('readonly', '');
        box[i].classList.add('show')
    })
}

output = kataPertama + kataKedua + kataKetiga + kataKeempat;


