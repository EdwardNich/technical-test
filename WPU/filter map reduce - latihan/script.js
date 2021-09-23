// ambil semua list
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih yang hanya berisi 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing2 video
    .map(item => item.dataset.duration)


// ubah durasi menjadi int, menit menjadi detik
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

// jumlahkan semua detik
    .reduce((total, detik) => total + detik);

// ubah formatnya menjadi jam menit detik
    const jam = Math.floor(jsLanjut / 3600);
    jsLanjut %= 3600;
    const menit = Math.floor(jsLanjut / 60);
    const detik = jsLanjut % 60;
    

// simpan di DOM
let pJmlVideo = document.querySelector('.jumlah-video');
let pTotalDurasi = document.querySelector('.total-durasi');
pJmlVideo.innerHTML = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
pTotalDurasi.innerHTML = `${jam} jam, ${menit} menit, ${detik} detik`;