// object literal
// let mahasiswa1 = {
//     nama: 'Doltons Edward Nicholas',
//     umur: 18,
//     mood: 10,
//     kegiatan: function(act) {
//         act === 'makan' ? this.mood -= 2 : this.mood += 1;
//         return `${this.nama} sedang ${act}`
//     }
// }

// let mahasiswa2 = {
//     nama: 'Nico',
//     umur: 19,
//     mood: 11,
//     kegiatan: function(act) {
//         act === 'makan' ? this.mood -= 2 : this.mood += 1;
//         return `${this.nama} sedang ${act}`
//     }
// }










// function declaration
// function Mahasiswa(nama, mood) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.mood = mood;

//     mahasiswa.kegiatan = function(act) {
//         act === 'makan' ? this.mood -= 2 : this.mood += 1;
//         return `${this.nama} sedang ${act}`
//     }

//     return mahasiswa;
// }
// let dollong = Mahasiswa('dollong', 10);










// constructur function
// function Mahasiswa(nama, mood) {
//     this.nama = nama;
//     this.mood = mood;
//     this.kegiatan = function(act) {
//         act === 'makan' ? this.mood -= 2 : this.mood += 1;
//         return `${this.nama} sedang ${act}`;
//     }
// }
// let dollong = new Mahasiswa('dollong', 10);










// object create
let mahasiswa = {
    nama: 'dollong',
    umur: 18,
    mood: 10,
    kegiatan: function(act) {
        act === 'makan' ? this.mood -= 2 : this.mood -=1;
        return `${this.nama} sedang ${act}`;
    }
}

let person = Object.create(mahasiswa);


