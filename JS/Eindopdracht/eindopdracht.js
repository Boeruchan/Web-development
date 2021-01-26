/*
// button geeft de juiste value aan.
function myFunction(value) {
    document.getElementById("output").innerHTML = value;
    console.log(value);
};

// input geeft nu extra cijfers op output
function myFunction(value) {
  let keyNumber = value;
    document.getElementById("output").innerHTML += keyNumber;
    console.log(keyNumber);
    }

// maak nu de value van string tot numbers
    function myFunction(value) {
  let keyNumber = value;
  let outputKeyNumber = eval(keyNumber);
    document.getElementById("output").innerHTML += outputKeyNumber;
    console.log(outputKeyNumber + outputKeyNumber);
    }

// Operators geeft nu nan aan, maak ze werkend
    function myOperators(value) {
    let keyOperator = value;
    document.getElementById("output").innerHTML += keyOperator;
     // console.log(keyNumber);
      
    console.log(keyOperator);
    }

    Omdat mijn brein niet werkte en hele tijd de operands in string zag
    wist ik niet of mijn berekening uberhaupt zou werken.
    na inschakelen van peers hebben ze me op weg geholpen om de twee
    function tot 1 te laten maken en de operands een if else statement laten maken.

    unction myFunction(value1) {
  let keyNumber = value1;
  if (value1 == 1 || value1 == 2 || value1 == 3 || value1 == 4 || value1 == 5 || value1 == 6 || value1 == 7 || value1 == 8 || value1 == 9 || value1 == 0) {
    let outputKeyNumber = eval(keyNumber);
    console.log(outputKeyNumber);
    // document.getElementById("output").innerHTML += outputKeyNumber;
  } else { 
    if ( value1 == "-") {
      console.log(value1);
    }
    if ( value1 == "+") {
      console.log(value1);
    }
    if ( value1 == "/") {
      console.log(value1);
    }
    if ( value1 == "%") {
      console.log(value1);
    }
    if ( value1 == "*") {
      console.log(value1);
    }
    if ( value1 == "=/-") {
      console.log(value1);
    }
    if ( value1 == "AC") {
      console.log(value1);
    }
    if ( value1 == ".") {
      console.log(value1);
    }
    if ( value1 == "=") {
      console.log(value1);
    }
  }
}


------------------------------boven niet aanraken.
*/


// Operators geeft nu nan aan, maak ze werkend



// const calculator = {
//   displayValue: "0"
// };
let outputKeyNumber;


function myFunction(value1, value2) {
    // const keyNumber = value1;
    // const keyNumber2 = value2;
    if (value1 == 1  || value1 == 2 || value1 == 3 || value1 == 4 || value1 == 5 || value1 == 6 || value1 == 7 || value1 == 8 || value1 == 9 || value1 == 0) {
    if (value2 == "AC" || value2 == "%" || value2 == "%");
      // outputKeyNumber = eval(keyNumber);
    // outputKeyNumber1 = eval(keyNumber2);
    let testAntwoord = document.getElementById("output").innerHTML += value1;
    console.log(testAntwoord);
  } else { 
    if (value2 == "-") {
  let totaal = keyNumber - keyNumber2; 
  document.getElementById("output").value = totaal;
      console.log(value1);
    }
    else {
      document.getElementById("output").value = "";
    }
    if ( value1 == "+") {
      let totaal = value1 + value2;
      console.log(value1);
    }
    if ( value1 == "/") {
      let totaal = value1 / value2;
      console.log(value1);
    }
    if ( value1 == "%") {
      let totaal = value1 % value2;
      console.log(value1);
    }
    if ( value1 == "*") {
      let totaal = value1 * value2;
      console.log(totaal);
    }
    if ( value1 == "=/-") {
      let totaal = !value1 * !value2;
      console.log(value1);
    }
    if ( value1 == "AC") {
     
      console.log(value1);
    }
    if ( value1 == ".") {
      document.getElementById("output").innerHTML = ".";
      console.log(value1);
    }
    else if ( value1 == "=") {

      console.log(value1);
    }
  }
  
}

// let a = 1;
// let b = 2;

let antwoordtest = a + b;
let antwoordtest1 = a * b;
let antwoordtest2 = b / a;
let antwoordtest3 = a % b;
let antwoordtest4 = a - b;
console.log(a, b, antwoordtest)

function ikwordgek() {
let a = 1;
let b = 2;
let crazy = (a * b);
document.getElementById("omygod").innerHTML = crazy;
console.log(crazy, a, b);
}


// 
// console.log(antwoordtest, antwoordtest1, antwoordtest2, antwoordtest3, antwoordtest4);

          





