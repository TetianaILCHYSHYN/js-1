// Ім'я

let імена = prompt("Ваше ім'я:");

alert (`Привіт, ${імена}!`);
console.log (`Привіт, ${імена}!`);

// Вік

let рікНародж = prompt('Ваш рік народження:');
const поточнийРік = 2024;
let вік = поточнийРік - рікНародж;
alert (`Ваш вік: ${вік}`);
console.log (`Ваш вік: ${вік}`);

// Периметр квадрата

let сторона = prompt('Вкажіть довжину однієї сторони квадрата:');

let периметр = сторона*4;
alert (`Периметр квадрата = ${периметр}`);
console.log (`Периметр квадрата = ${периметр}`);

// Радіус кола

let радіус = prompt('Вкажіть радіус кола:');

let площаКола = 2*3.14*радіус;

alert (`Площа кола = ${площаКола}`);
console.log (`Якщо радіус кола = ${радіус} Площа кола = ${площаКола}`);

// Швидкісь

let Відстань = prompt('Вкажіть відстань між містами, км:');
let Час = prompt('Вкажіть, за скільки часу потрібно доїхати, год:');

let Швидкісь = Відстань/Час;

alert (`Бажана швидкість = ${Швидкісь} км/год.`);
console.log (`Відстань= ${Відстань}км , Час= ${Час}год. Ваша швидкість має бути: ${Швидкісь} км/год.`);

// Конвертор

let доларів = prompt('Кількість доларів,$:');
const курсДолара = 0.9;
let Євро = доларів * курсДолара;

console.log (`Євро: ${Євро} Є`);
alert (`Євро: ${Євро} Є`);





