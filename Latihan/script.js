// latihan variable
// let nama;

// console.log(nama);
// nama = "Dollong";



// latihan function
// function declaration & arrow function
// const sayHello = () => {
//     const nama = "Dollong";
//     return console.log(this)
// }

// sayHello()




// latihan class
class Car {
    constructor(nama, year) {
        this.name = nama;
        this.year = year;
    }

    age(umur) {
        return umur - this.year;
    }
}

let date = new Date();
let year = date.getFullYear()

const toyota = new Car("Toyota", 2017)
console.log(`Saya memiliki mobil ${toyota.name} yang berumur ${toyota.age(year)}`)