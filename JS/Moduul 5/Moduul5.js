// Test of de js werkt
const hello = "hello world";
console.log(hello);


// Opdracht 1
// Maak een array met 10 getallen die willekeurig in een array staan. Print de array uit in jouw
// console.
const numbers = [1, 2, 3, 5, 4, 6, 7, 9, 8, 10];
console.log(numbers);


// Opdracht 2:
// Maak een array met 5 verschillende fruitsoorten. Print de array uit in jouw console.
const fruit = ["appel", "peer", "perzik", "aardbei", "banaan"];
console.log(fruit);
console.log(fruit.length);

// Opdracht 3:
// Op welke index staat “Appel”. Gebruik de index waarde om “Appel” in jouw console uit te
// printen.
console.log(fruit[0]);

// Opdracht 4:
// Op welke index staat “Aardbei”. Gebruik de index waarde om “Aardbei” in jouw console uit te
console.log(fruit[3]);

// Opdracht 5:
// We gaan het iets complexer maken met het bepalen van de fruit. Er zijn nu 2 arrays
// gedefinieerd, namelijk een array met getallen en een array met fruitsoorten. De eerste array
// bepaalt welke fruitsoort er geprint moet worden. Gebruik de Math.random() methode om te
// bepalen welke waarde uit de eerste array wordt gehaald. Vervolgens kun je de waarde
// gebruiken als index en de fruitsoort printen in jouw console. Helaas, de getallen 5 t/m 10 uit
// de eerste array zullen een undefined teruggeven als je dat als index bij de fruit array zal
// gebruiken. Hiervoor kun je de modulo (%) gebruiken. Zoek uit hoe modulo werkt en pas dat
// toe aan de waarde van de eerste array. Als resultaat zal er altijd een fruitsoort uitgeprint
// worden.

// What is modulo?
// For Positive Numbers:
// Input: a = 21, b = 4
// Output: 1
// Explanation: 
// modulo = 21 % 4
// modulo = 21 - 4 * 5
// modulo = 21 - 20 = 1 
// Other Explanation:
// The number 21 can be written in terms of 4 as
// 21 = 5 * 4 + 1
// So, here '1' is the result.

// laat fruit length zien in dit geval is het 5-3 = 2 = "perzik"
// var answ = fruit[fruit.length-3];
// console.log(answ);

// laat random fruit zien
// function mathRandom() {
// var ansfruit = fruit[Math.floor(Math.random()*fruit.length)]
// console.log(ansfruit);
// }

// laat random cijfers zien
function mathRandom() {
   let a = numbers[Math.floor(Math.random()*numbers.length)]
//    gebruik van modulo
   antwoord = a % 5;
   let b = fruit[antwoord];
    console.log(a, antwoord, b);
    }




//

// functie by press button komt er een random getal tevoorschijn in console
// function mathRandom() {
//     var x = Math.floor(Math.random() * 10);
//     console.log(x);
// }

// let x = mathRandom();

// dit is hoe ik ongeveer wil hebben kwa opdracht
// var answ = numbers[x] % fruit[x];
// console.log(answ);







// let antw = numbers.length % answ;
// console.log(antw);
