// console.log("test");
let orange = "rgb(238, 184, 6)";
let white = "white";
let uitkomst;

function reply_click(clicked_id) {
    uitkomst = document.getElementById("output").innerText += clicked_id;
    document.getElementById("ac").innerHTML = "C";
    // console.log(uitkomst);
 
    //hulp bij gehad met het veranderen van woord click naar mousedown & mouseup
    document.querySelectorAll(".btnyellow").forEach(item => {
    item.addEventListener('mousedown', (e)=> {
        if (white) {
            item.style.color = orange;
            color = orange;
            item.style.backgroundColor = white;
            backgroundColor = white;
        } else {
            item.style.color = white;
            color = white;
            item.style.backgroundColor = orange;
            backgroundColor = orange;
        }
        // console.log(uitkomst);  
})
item.addEventListener('mouseup', (e)=> {
    if (orange) {
        item.style.color = white;
        color = white;
        item.style.backgroundColor = orange;
        backgroundColor = orange;
    } else {
        item.style.color = orange;
        color = orange;
        item.style.backgroundColor = white;
        backgroundColor = white;
    }
}) 
})
};   

function reply_clear(clicked_id){
    let clear = document.getElementById("output").innerText = "";
    document.getElementById("ac").innerHTML = "AC";
    // console.log(clear)
}

function reply_test() {
    uitkomst = document.getElementById("output").innerText;
    const minnetje="-";
    let addminnetje = minnetje.concat(uitkomst);
    let minminnetje = uitkomst.slice(1);
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
    //split hulp bij gehad
    let temp = uitkomst.split(/([+,-,*,/])/); //regex method, split bij operands
    let totaal = document.getElementById("output").innerText;
    //wanneer er 3.length splits zijn met inhoud skip naar totaal = eval(totaal)
    // wanneer er 3.length splits zijn maar de laatste is zonder inhoud gat naar de totaal += temp[0] <-- vult "" met de eerste string
    if(temp.length === 3 && temp[2] === ""){
        totaal += temp[0];
      }
    // if (temp.length == 3) {
    //     if (temp[2] == "") {
    //     totaal += temp[0]
    //     }
    // }
    // console.log(temp);
    totaal = eval(totaal);
    
    //als nummer geen rond getal is, dus decimaal, rond het naar 2 decimaal.
    if (!Number.isInteger(totaal)) {
        totaal = totaal.toFixed(2);
    } 

   
    let antwoord = document.getElementById("output").innerText = totaal;
    // console.log(antwoord);
};





