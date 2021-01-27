

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




function reply_click(clicked_id) {
    let uitkomst = document.getElementById("output").innerText += clicked_id;
    // uitkomst = parseInt(uitkomst);
    // let totaal = eval(uitkomst);
    // console.log(uitkomst);
}


function reply_test() {
    uitkomst = document.getElementById("output").innerText;
    const minnetje="-";
    let addminnetje = minnetje.concat(uitkomst);
    let minminnetje = uitkomst.slice(1, 2);
    if (uitkomst.indexOf("-")) {
        document.getElementById("output").innerText = addminnetje;
    }
    else {
        document.getElementById("output").innerText = minminnetje;
    }
console.log(uitkomst)
console.log(addminnetje);
console.log(minminnetje);   
}


// function reply_operator() {
//     let totaal = document.getElementById(" output");
//     let operand = document.getElementById("output").innerText;
//     // totaal = parseInt(totaal);
//     console.log(operand);
// reply_click();
// function reply_negpos(){
    
// }



function reply_totaal() {
    let totaal = document.getElementById("output").innerText;
    totaal =  eval(totaal);
    let antwoord = document.getElementById("output").innerText = totaal;
    // console.log(antwoord);
}

function reply_clear(){
    let clear = document.getElementById("output").innerText = "";
    // console.log(clear)
}

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