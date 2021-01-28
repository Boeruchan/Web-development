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


// acButton.addEventListener("onclick", clear);
// function reply_clearslice() {
//     uitkomst = document.getElementById("output").innerText;
//     const minnetje="-";
//     let addminnetje = minnetje.concat(uitkomst);
//     let minminnetje = uitkomst.slice(1);
//     if (uitkomst) {
//         document.getElementById("output").innerText = minminnetje;
//     }
//     else {
//         document.getElementById("output").innerText = addminnetje;
//         return
//     }





    // switch (operand) {
    // case "+":
    //     operand + operand
    //     break;
    // case "-":
    //     uitkomst - uitkomst
    //     break;
    // case "/":
    //     uitkomst / uitkomst
    //     break;
    // case "%":
    //     uitkomst % uitkomst
    //     break;
    // case "NaN":
    //     document.getElementById("output").innerhtml = "Error";

    //     break;
    // }








// function reply_operator(clicked_id) {
//     operand = document.getElementById("output").innerHTML;
//     switch (clicked_id) {
//         case "+":
//             operand = "clicked_id + clicked_id"
//             break;
//     }
//     operand = document.getElementById("output").innerHTML = clicked_id;
// }



/*
const cijferEen = 1;
const cijferTwee = 2;
const cijferDrie = 3;
const cijferVier = 4;
const cijferVijf = 5;
const cijferZes = 6;
const cijferZeven = 7;
const cijferAcht = 8;
const cijferNegen = 9;
const cijferNul = 0;
let uitkomst =  document.getElementById("output");

function nul() {
    document.getElementById("output").innerHTML += cijferNul;
    console.log(cijferNul);
};


function een() {
    document.getElementById("output").innerHTML += cijferEen;
    console.log(cijferEen);
    };

function twee() {
    document.getElementById("output").innerHTML += cijferTwee;
    console.log(cijferTwee);
    };

function drie() {
    document.getElementById("output").innerHTML += cijferDrie;
    console.log(cijferDrie);
    };

function vier() {
    document.getElementById("output").innerHTML += cijferVier;
    console.log(cijferVier);
    };

function vijf() {
    document.getElementById("output").innerHTML += cijferVijf;
    console.log(cijferVijf);
    };

function zes() {
    document.getElementById("output").innerHTML += cijferZes;
    console.log(cijferZes);
    };

function zeven() {
    document.getElementById("output").innerHTML += cijferZeven;
    console.log(cijferZeven);
    };

function acht() {
    document.getElementById("output").innerHTML += cijferAcht;
    console.log(cijferAcht);
    };

function negen() {
    document.getElementById("output").innerHTML += cijferNegen;
    // console.log(cijferNegen);
    };



let data = document.getElementById("output").value;
console.log(data);

*/


// function reply_operator() {
//     let totaal = document.getElementById(" output");
//     let operand = document.getElementById("output").innerText;
//     // totaal = parseInt(totaal);
//     console.log(operand);
// reply_click();
// function reply_negpos(){
    
// }


// let a = 1;
// let b = 2;
// let antwoordtest = a + b;
// let antwoordtest1 = a * b;
// let antwoordtest2 = b / a;
// let antwoordtest3 = a % b;
// let antwoordtest4 = a - b;
// console.log(a, b, antwoordtest)

// function ikwordgek() {
// let crazy = (a * b);
// document.getElementById("omygod").innerHTML = crazy;
// console.log(crazy, a, b);
// }
