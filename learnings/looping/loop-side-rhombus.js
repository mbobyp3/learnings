const readline = require('readline-sync');

const sizeStar = +readline.question('Enter diamond size: ');
const diamondCount = +readline.question('Enter number of diamonds: ');

console.log('');

// --- BAGIAN ATAS (Piramida Normal) ---
// Loop Induk sekarang adalah Baris, bukan jumlah diamond
for (let baris = 1; baris <= sizeStar; baris++) {
    let cetakBaris = '';
    
    // Loop ke samping untuk merakit baris dari seluruh diamond
    for (let count = 1; count <= diamondCount; count++) {
        
        // 1. Spasi Kiri
        for (let spasi = 1; spasi <= sizeStar - baris; spasi++) {
            cetakBaris += ' ';
        }
        
        // 2. Bintang
        for (let bintang = 1; bintang <= (baris * 2) - 1; bintang++) {
            cetakBaris += '*';
        }
        
        // 3. Spasi Kanan (Menjaga lebar kotak agar diamond selanjutnya pas)
        for (let spasi = 1; spasi <= sizeStar - baris; spasi++) {
            cetakBaris += ' ';
        }
        
        // 4. Jarak ekstra antar diamond (Opsional, agar ujungnya tidak bersentuhan)
        cetakBaris += '  '; 
    }
    
    // Cetak keseluruhan baris sekaligus
    console.log(cetakBaris);
}

// --- BAGIAN BAWAH (Piramida Terbalik) ---
for (let baris = sizeStar - 1; baris >= 1; baris--) {
    let cetakBaris = '';
    
    for (let count = 1; count <= diamondCount; count++) {
        
        for (let spasi = 1; spasi <= sizeStar - baris; spasi++) {
            cetakBaris += ' ';
        }
        
        for (let bintang = 1; bintang <= (baris * 2) - 1; bintang++) {
            cetakBaris += '*';
        }
        
        for (let spasi = 1; spasi <= sizeStar - baris; spasi++) {
            cetakBaris += ' ';
        }
        
        cetakBaris += '  '; 
    }
    console.log(cetakBaris);
}