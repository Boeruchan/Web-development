const rock = 0;
const paper = 1;
const scissor = 2;


class Game {
constructor(container, icons) {
    this.icons = icons;

    this.tittle=document.createElement('h3');
    this.tittle.innerText = "Make your choice";
    container.appendChild(this.title);

    icons.forEach((icon, index) => {
        const button = document.createElement('button');
        button.innerText = icon;
        container.appendChild(button);
        button.onclick = () => this.play (index);
        console.log('click', index);
    });

    console.log("game")
 }
play(hand) {
    console.log('play', hand);

    const computer = getRandomHand();


    console.log('computer', computer);

    getWinner(hand1, hand2);
}
}

/*/
function getRandomHand() {
    return Math.floor(Math.random() * 3);
}

function getWinner(hand1, hand2) {
    if (hand1 === hand2) return undefined;

    switch(hand1){
        case rock: {
            return hand2 === scissor ? hand1 : hand2;
            break;
        }
        case paper: {
            return hand2 === rock ? hand1 : hand2;

            break;
        }
        case scissors: {
            return hand2 === paper ? hand1 : hand2;

            break;
        }
        default: {
            throw new Error("invalid value for hand 1 '$(hand1)'");

        }
    }
}

/ * / alleen door spatie kan je laten zien of uitcommenten
function getElementById(hand1, hand2) {
    return [hand 2, hand 1][(3 + hand2 - hand1) %3]
}
/*/

// console.assert(1 == 2);

console.assert(getWinner(rock, rock) === undefined);
console.assert(getWinner.assert(rock. paper) === winner);

new Game(document.querySelector('$container'), ["rock", "paper", "scissor" ]);

