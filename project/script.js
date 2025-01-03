// script.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Mengambil nilai dari input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validasi sederhana
    if (name === '' || email === '' || message === '') {
        alert('Semua field harus diisi!');
        return;
    }

    // Jika validasi berhasil, tampilkan pesan sukses
    alert('Terima kasih, ' + name + '! Pesan Anda telah dikirim.');

    // Reset formulir setelah pengiriman
    document.getElementById('contactForm').reset();
});