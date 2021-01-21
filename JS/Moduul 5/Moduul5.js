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

    // opdracht 6
    // door the pushen is er nu in het rijtje mango bij gekomen.
    
   //  fruit.push("mango");
   //  console.log(fruit);

   //  // Door the pop() verwijder je de laatste element in array.
   //  fruit.pop();
   //  console.log(fruit);

   //  // Door shift() verwijder je het eerste element in array.
   //  fruit.shift();
   //  console.log(fruit);

   //  // door slice() te gebruiken kan je specifieke elementen gebruiken in de array.
   //  let twee = fruit.slice(2, 4);
   //  console.log(twee);

   //  // door splice() te gebruiken kun je elementen toevoegen of specifieke elementen weg halen.
   //  fruit.splice(1, 0, "kip", "patat"); 
   //  console.log(fruit);

   //  // The sort() method sorts the items of an array.
   //  // The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).
   //  // By default, the sort() method sorts the values as strings in alphabetical and ascending order. 
   //  // This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". 
   //  // Because of this, the sort() method will produce an incorrect result when sorting numbers.
   //  // You can fix this by providing a "compare function" 
   //  fruit.sort();
   //  console.log(fruit);

   //  numbers.sort();
   //  console.log(numbers);
   //  // 1, ?????10????, 2, 3, 4, 5

   //  // opdracht 7
   //  console.log(fruit.length);

   //  // opdracht 8
   //  const index = fruit.indexOf("peer")
   //  fruit[index] = "Sinaasappel"
   //  console.log(fruit);

   //  // opdracht 9
   //  const  wissel = fruit[0];
   //  fruit[0] = fruit[4];
   //  fruit[4] = wissel;
   //  console.log(fruit);


