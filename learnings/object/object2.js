//lanjutan dari file object1.js.
//Working with object properties
//shorthand property
const age = 25;

const person = {
    name: 'Boby',
    age: age, //perhatikan bahwa terlihat sama, namun yang satu key, yang satu lagi merupakan value. kebetulan saja tulisannya sama
};

//ada syntax shorthand nya, ketika key dan value tulisannya sama. perhatikan properti object pada variabel person2 di bawah ini
const person2 = {
    name: 'Pratama',
    age,
};

console.log(person);
console.log(person2); //hasil property age nya sama antara person dan person2

//how to check name property exist in the 'person' object
const existPersonName = person.name !== undefined;
const existPersonCity = person.city !== undefined;
console.log(existPersonName); //true: yang menandakan eksis
console.log(existPersonCity); //false: yang menandakan tidak eksis

//tapi pendekatan dengan cara di atas, memiliki kelemahan yang cukup fatal. perhatikan kode di bawah ini
const person3 = {
    name: undefined, //ketika value sebuah property ini undefined, maka sistem membacanya: false. padahal property tersebut eksis
};
const existPerson3Name1 = person3.name !== undefined;
console.log(existPerson3Name1); //false: property exist tapi hasil log-nya false. inilah kelemahannya

//Solusinya? maka gunakanlah in operator. Salah satu dari Binary operator.
//Syntax nya: key in obj
const existPerson3Name2 = 'name' in person3;
console.log(existPerson3Name2);//true: property exist dan hasil log-nya true. inilah solusinya

//there is no numeric key in JavaScript. Perhatikan kode di bawah ini
const countryCodes = {
    1: 'United States',
    62: 'Indonesia',
    86: 'China',
};
console.log(countryCodes);//perhatikan hasil log-nya, semua key tertulis menjadi string
console.log(countryCodes[62]);//tetap ter-print. tidak mengalami error cara penulisannya bukan string, karena mengalami type coercion. di balik layar di-convert menjadi string key-nya. '62'

//Iterating over object property keys
for (let i = 1; i <= 3; i++) {
    console.log(`Iteration #${i}`); //proses perulangan dalam 1 looping, disebut iteration. dalam konteks ini terjadi 3x iteration
}

//sekarang perhatikan kode di bawah. kita akan melakukan iterasi terhadap property keys-nya
//Syntax nya adalah for in loop
const currencySymbols = {
    usd: '$',
    eur: '€',
    jpy: '¥',
};
//dalam konteks for in loop di sini, saya deklarasikan variabel 'code'. Variabel ini bebas.
for (const code in currencySymbols) {
    //perhatikan yang ter-log adalah semua daftar key dari object currencySymbols
    console.log(code);
}
//contoh lain
const fruitPrices = {
    apple: 5,
    orange: 3,
    durian: 20,
};
//contoh lain => cara penulisan syntax nya: for (sebuah variabel baru in variabel objek yang ingin ditarik data key nya)
for (const fruit in fruitPrices) {
    console.log(fruit); //terprint key nya
}
//contoh berikutnya: kalau sebelumnya mengambil key nya, sekarang dikreatifkan lagi untuk mengambil value nya.
for (const fruit2 in fruitPrices) {
    const price = fruitPrices[fruit2];
    console.log(`$${price}`); //terprint value nya
}

//Object keys are iterated in a special way. The rules:
//1. Integer properties are sorted, (property bilangan bulat diurutkan)
//2. Others appears the same like it's defined (selain itu urutannya sama seperti penulisan)
const countryCodes2 = {
    '62': 'Indonesia',
    '86': 'China',
    name: 'Boby',
    '1': 'United States',
};
for (const code in countryCodes2) {
    console.log(code); //hasil print iterate diurutkan ulang untuk integer, kemudian baru mencetak lainnya
}
//bagaimana caranya jikalau tidak ingin diurutkan. perhatikan code di bawah ini
const countryCodes3 = {
    '+62': 'Indonesia',
    '+86': 'China',
    '+1': 'United States',
};
for (const code in countryCodes3) {
    console.log(code); //hasil print iterate tidak diurutkan, karena sudah bukan lagi integer
}