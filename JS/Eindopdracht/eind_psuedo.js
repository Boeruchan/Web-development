/ * 
Handout eindopdracht regels

● De basis berekeningen zoals, optellen, aftrekken, vermenigvuldigen en delen.

● Wanneer een getal is ingevoerd dan verandert de tekst van AC naar C.
- Bij click op AC veranderd string naar C.

● Wanneer een rekenkundig symbol (/, X, -, +, =) is geklikt, dan wordt de
achtergrondkleur van dat symbool wit en wordt de tekst kleur oranje.
- Op dit moment is het wit symbol + oranje achterond.
- Wanneer erop geklikt wordt dan veranderd het naar oranje symbol + wit achtergrond

● Als het antwoord een decimaal getal bevat, dan rond je het antwoord altijd af op 2
decimaal getal.
- Math.rounded <-- rond af naar boven

● Je hoeft niet altijd een volledige berekening in te voeren. Bv, 5+ geeft als antwoord 10
, 6/ geeft als antwoord 1 of 9X geeft als antwoord 81.
als i = 5 dan herhaalt hij na een operator weer i-zonder input te hoeven te clicken.

● De +/- symbool maakt het getal negatief of positief.
-1 of 1

● De % symbool is een modulo.
/* What is modulo?
For Positive Numbers:
Input: a = 21, b = 4
Output: 1
Explanation: 
modulo = 21 % 4
modulo = 21 - 4 * 5
modulo = 21 - 20 = 1 
Other Explanation:
The number 21 can be written in terms of 4 as
21 = 5 * 4 + 1
So, here '1' is the result.
*/

● De AC of C symbol reset jouw rekenmachine
- AC = clears memory, c will not.
*/
-------------------------------------------------
/ *
Eisen voor stappenplan js

● function onclick
●  0 en AC zijn de startpunt
●  0 veranderd bij onclick value en AC veranderd naar C

-   onclick op button geeft de value 0 t/m 9 en punt
    button 0 = cijfer value 0
    button 1 = cijfer value 1
    etc

    -------------------------------

- operators
button veranderd van kleur naar oranje tekst en wit achtergrond

button (AC) = refresh en begin in startwaarde 0
button (=/-) = geeft cijfer postitief of negatief value
button (%) = modulo
button (/) = delen
button (*) = vermenigvuldigen
button (-) = aftrekken
button (+) = optellen
utton (=)  = totaal in span "totaal"

Je hoeft niet altijd een volledige berekening in te voeren

----------------------------------

Werking calculator
voorbeeld
button 1 - output totaal staat op scherm 1
+ - output totaal staat op scherm 1 +
button 1 - output totaal staat op scherm 1 + 1
button = (totaal)
2 staat op scherm totaal.

--------------------------------

Stappenplan JS
1. Werkt javascript in html?
// console.log("test");


2. function maken voor button cijfers.
- Bij click zie je in console.log dat de value aangeeft van dat cijfer.
/*function myFunction() {
   console.log("je hebt op mij geklikt");
}*/

- Bij click zie je dat het in de output komt van <span id="totaal">
/ *
function myFunction() {
    let uitkomst = document.getElementById("totaal");
    uitkomst.innerHTML = "10";
    console.log(uitkomst);
 }

 tweede poging met verandering in html --> added value
 function myFunction(val) {
    console.log(val);
 }

 derde poging
  function myFunction(val) {
     this.value = Number(document.querySelector(this.value);
     document.getElementById("totaal").innerHTML = this.value;
    console.log(val);
 }

 vierde poging nadat ik in een ander groepje zit ivm defect zoom,
 is het me eindelijk gelukt.
 function myFunction(value) {
    document.getElementById("output").innerHTML = value;
    console.log(output)
};


*/
- Maak nu bij click de juiste variables dus 1 = 1, 2 = 2 etc


-----------------------------------test--------------------


// function myFunction(val) {
//    document.getElementById("output").innerHTML;
 



   
//     // const cijfer = document.getElementById("totaal");
// // document.getElementById("totaal").innerHTML = cjfer;

//     console.log(val);
  
//  };

//  function bla() {
//     document.getElementById("output").innerHTML = ;
//  };