const person = {
    name: 'Boby', //name: 'Boby' merupakan satu kesatuan property. name merupakan property key, dan 'Boby' di sini merupakan property value.
    age: {
        date: 16,
        month: 3,
        year: 1996,
    },
};

//Syntax to get object
console.log(person);

//Syntax to set a new object property value
// 1. obj.key = value
// 2. obj['key'] = value
person.age = 25; //versi 1 set value dari sebuah property object. Paling sering digunakan. namun, di belakang layar, dilakukan Type coresion menjadi versi 2.
person['name'] = 'Pratama'; // versi 2 set value dari sebuah property object. Yang sebenarnya dikenali oleh JavaScript.

const str = `${person.name} berumur ${person['age']} tahun`;
console.log(`${person.name} berumur ${person['age']} tahun`);

//value dari object bersifat konstan, namun value dari property tidak bersifat konstan.
//Sebagai bukti meskipun variabel person dideklarasikan menggunakan const
person['age'] = 29;
person.name = 'Muhammad';

console.log(`${person['name']} berumur ${person.age} tahun`);

console.log(str); //bukti bahwa value varibel tidak berubah tidak berubah. yang dilog tetap seperti pertama kali diprint di atas

//karena object juga merupakan salah satu value, maka kita bisa memasukkan object di dalam object. perhatikan pada property 'name' di bawah ini.
const person2 = {
    name: {
        first: 'Muhammad',
        middle: 'Boby',
        last: 'Pratama',
    },
    age: 30,
    address: 'Tanjungpinang',
};

console.log(person2);

//syntax get value of property first name
console.log(person2.name.first);
//atau
console.log(person2['name']['first']);

//membuktikan bahwa tipe data dari variabel person2 adalah object. itu dikarenakan syntax valuenya di dalam {}.
console.log(typeof person2);

//computed property name
const category = 'food';

const expense = {
    [category]: 50000,
};

console.log(expense);

//kapan syntax property versi 2 yang menggunakan [], sangat-sangat penting dan hanya satu-satunya cara. perhatikan kode di bawah ini.
const spending = {
    'food-1': 50000,
    'food-2': 60000,
    'food-3': 70000,
};

for (let i = 1; i <=3; i++) {
    const value = spending[`food-${i}`];
    console.log(value);
}

//perhatikan pada varibel objek spending. isi property nya selalu diakhiri dengan tanda koma (,).
//Istilahnya adalah trailing comma. selain karena rapi dalam kode, jika rapi saat disimpan di dalam git / github.
//pastikan selalu gunakan ya setiap selesai menulus kode setiap property, meskipun hanya ada 1 property dalam 1 object.