

function reply_click(clicked_id) {
    let uitkomst = document.getElementById("output").innerText += clicked_id;
    document.getElementById("ac").innerHTML = "C";


        document.getElementById("+").style.color = 'orange';
        document.getElementById("+").style.backgroundColor = 'white';
   

     console.log(uitkomst);
  }
    


function reply_clear(clicked_id){
    let clear = document.getElementById("output").innerText = "";
    document.getElementById("ac").innerHTML = "AC";
    // console.log(clear)
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
// console.log(uitkomst)
// console.log(addminnetje);
// console.log(minminnetje);   
}

function reply_totaal() {
    let totaal = document.getElementById("output").innerText;
    totaal =  eval(totaal);
    let antwoord = document.getElementById("output").innerText = totaal;
    // console.log(antwoord);
}





