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
  let outputKeyNumber = parseFloat(keyNumber);
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


------------------------------boven niet aanraken.
*/


// Operators geeft nu nan aan, maak ze werkend

function myFunction(value) {
  let keyNumber = value;
  let outputKeyNumber = eval(keyNumber);
    document.getElementById("output").innerHTML += outputKeyNumber;
    // console.log(keyNumber);

    console.log(outputKeyNumber);
    }

    function myOperators(value) {
        let keyOperator = value;
          document.getElementById("output").innerHTML += keyOperator;
          // console.log(keyNumber);
      
          console.log(keyOperator);
          }
      



// function myOperators(value) {
//     let operator = value;
//     let outputOperator = Number.value;
//     document.getElementById("output").innerHTML = outputOperator;
//     console.log(outputOperator);
    
// }
    





