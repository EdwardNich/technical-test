// const mhs = [
//     {
//         nama: 'Doltons Edward Nicholas',
//         umur: 18
//     },
//     {
//         nama: 'Erik',
//         umur: 19
//     }
// ]







// const el = `
// <div class="mhs">
//     <ul>
//         ${mhs.map(item => `
//             <ol>
//                 <li>Nama: ${item.nama} </li>
//                 <li>Umur: ${item.umur} </li>
//             </ol>
//         `).join('')}
//     </ul>
// </div>
// `

// document.body.innerHTML = el

// const lagu = [
//     {
//         judul: 'Kau adalah',
//         penyanyi: 'Isyana Saraswati',
//         feat: 'Rayi putra'
//     },
//     {
//         judul: 'Kau adalah',
//         penyanyi: 'Isyana Saraswati',
//     }
// ]

// const el = `
// <div class="mhs">
//     <h2>Nama lagu</h2>
//     <ul>
//         ${lagu.map(item => `
//             <li>Judul: ${item.judul}</li>
//             <li>Penyanyi: ${item.penyanyi} ${item.feat ? `(ft. ${item.feat})` : ''}</li>
//             <br>
//         `).join('')}
//     </ul>
// </div>
// `

// document.body.innerHTML = el







const mhs = {
    nama: 'Doltons',
    umur: 18,
    mataKuliah: [
        'Teknik Informatika',
        'Teknik Multimedia'
    ]
}

const el = `
<div class="mhs">
    <h2>Info mahasiswa</h2>
    <ul>
        <li>Nama: ${mhs.nama}</li>
        <li>Umur: ${mhs.umur}</li>
        <li>Jurusan: 
            <ol>
                ${mhs.mataKuliah.map(item => `<li>${item}</li>`).join('')}
            </ol>
        </li>
    </ul>
</div>
`

document.body.innerHTML = el