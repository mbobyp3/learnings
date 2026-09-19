const readline = require('readline-sync');

// Menangkap input ganda menggunakan trik shorthand '+' yang efisien
const sizeStar = +readline.question('Enter diamond size: ');
const diamondCount = +readline.question('Enter number of diamonds: ');

console.log(''); 

// MASTER LOOP: Mengontrol berapa banyak diamond yang dicetak ke bawah
for (let count = 1; count <= diamondCount; count++) {

    // --- BAGIAN ATAS (Piramida Normal) ---
    for (let baris = 1; baris <= sizeStar; baris++) {
        let cetakBaris = '';
        for (let spasi = 1; spasi <= sizeStar - baris; spasi++) {
            cetakBaris += ' ';
        }
        for (let bintang = 1; bintang <= (baris * 2) - 1; bintang++) {
            cetakBaris += '*';
        }
        console.log(cetakBaris);
    }

    // --- BAGIAN BAWAH (Piramida Terbalik) ---
    for (let baris = sizeStar - 1; baris >= 1; baris--) {
        let cetakBaris = '';
        for (let spasi = 1; spasi <= sizeStar - baris; spasi++) {
            cetakBaris += ' ';
        }
        for (let bintang = 1; bintang <= (baris * 2) - 1; bintang++) {
            cetakBaris += '*';
        }
        console.log(cetakBaris);
    }

    // Memberikan baris kosong antar diamond agar bentuknya tidak melebur
    console.log('');
}