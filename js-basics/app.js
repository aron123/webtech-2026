console.log('Hello World');

const constant = 15;

let var2 = 15;
var2 = true;
var2 = 'str';

// primitív típus: number, boolean, string, null, undefined
// összetett típus: tömb, objektum

const age = 25;

if (age < 18) {
    console.log('Kiskorú');
} else if (age < 60) {
    console.log('középkorú');
} else {
    console.log('Időskorú');
}

// truthy: true, != 0, nem üres string, tömb, objektum
// falsy: false, 0, '', null, undefined

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

for (let j = 1; j <= 5; j++) {
    console.log(j);
}

const arr = [ 1, 2, 3, true, 'red', 'green' ];

// for-in
for (let index in arr) {
    console.log('index:', index, ' value:', arr[index]);
}

// for-of
for (let value of arr) {
    console.log(value);
}

// callback függvények
const names = [ 'Béla', 'Lajos', 'Feri' ];
names.forEach((name) => {
    console.log('Hello ', name);
});

const exchangeRates = [ 375, 401, 405, 398, 390, 405 ];

// 1. az egyes hónapokban 1500 Ft hány eurót ért?
const huf = exchangeRates.map(rate => 1500 / rate);
console.log(huf);

// 2. mely árfolyamok 400 ft alattiak?
const under400 = exchangeRates.filter(rate => rate < 400);
console.log(under400);

function greet(name) {
    console.log('Szia', name);
}

greet('Béla');

function square(num) {
    return num * num;
}

console.log(square(2));

const person = {
    name: 'Tóth Géza',
    age: 15,
    male: true,
    info: function () {
        console.log(this.name, 'vagyok, ', this.age, 'éves');
    }
};

person.info();
