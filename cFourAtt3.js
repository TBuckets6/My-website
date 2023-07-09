const board = document.getElementById('boardId');
const textbox = document.getElementById('youWinId');
const chipsMsg = document.getElementById('chipsMsgId');
const titleId = document.getElementById('titleId');
const whosTurn = document.getElementById('turnId');

// NEW
const modal = document.getElementById('modalId');
const helpBtn = document.getElementById('helpButton');
const resetBtn = document.getElementById('resetBtn');

// REPLACED ALL BLACK VARIABLES WITH YELLOW FOR JS AND CSS

const winningArr = [
    [0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10],
    [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24],
    [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31],
    [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3],
    [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22],
    [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18],
    [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25],
    [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15],
    [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24],
    [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10],
    [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17],
    [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31],
    [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18],
    [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22],
    [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25],
    [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32],
    [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4],
    [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
    [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25],
    [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30],
    [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28],
    [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31],
    [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34],
     [42,43,44,45], [43,44,45,46], [44,45,46,47], [45,46,47,48],
    [21,28,35,42], [22,29,36,43], [23,30,37,44],[24,31,38,45],[25,32,39,46],[26,33,40,47],[27,34,41,48],
    [24,30,36,42],[25,31,37,43], [26,32,38,44], [27,33,39,45],
    [21,29,37,45], [22,30,38,46],[23,31,39,47], [24,32,40,48]

];

const addBr = () => {
    return document.createElement('br');
}

const reset = () => {

}

let turn = 0;
let result = false;

let yellowArray = [];
let redArray = [];

let redsTurn = false;
let yellowsTurn = true;

const directions = () => {

}

const build = () => {

    // NEW
    whosTurn.innerHTML = "Yellow's turn"
    whosTurn.classList.add('yellowsTurn');

    let chipsLeft = 42;

    for (let i = 0; i < 49; i++) {
        const slot = document.createElement('div');
        
        let pos = "";

        if (i >= 42 && i <= 48) {
            pos = "bottom";
        }

        slot.classList.add('slotClass');
        slot.setAttribute('id', i);

        board.appendChild(slot);

        const disc = document.createElement('div');

        disc.classList.add('discClass');

        slot.setAttribute("filled", "false");

        slot.appendChild(disc);

        disc.style.display = "none";

        slot.addEventListener("click", () => {

            ////This if statement makes it so that a slot can only be filled if the one below it is filled.
            if ((pos == "bottom" || document.getElementById(i + 7).getAttribute("filled") == "true") && chipsLeft > 0) {
                

                // disc.style.display = "block";
                // slot.setAttribute("filled", "true");
                // turn++;
                // chipsLeft--;
                if(turn % 2 == 0 && document.getElementById(i).getAttribute("filled") != "true"){
                    
                    //NEW
                    whosTurn.innerHTML = "Red's turn"
                    whosTurn.classList.add('redsTurn')
                    whosTurn.classList.remove('yellowsTurn')

                    disc.classList.add('yellowClass');
                    slot.classList.add('yellowSlot');
                    yellowArray.push(i);
                    
                    ////???
                    redsTurn = true;
                    
                    disc.style.display = "block";
                    slot.setAttribute("filled", "true");
                    turn++;
                    chipsLeft--;
                }
                else if(turn % 2 != 0 && document.getElementById(i).getAttribute("filled") != "true"){

                    //NEW
                    whosTurn.innerHTML = "yellows turn"
                    whosTurn.classList.add('yellowsTurn')
                    whosTurn.classList.remove('redsTurn')

                    disc.classList.add('redClass');
                    slot.classList.add('redSlot');
                    redArray.push(i);
                    disc.style.display = "block";
                    slot.setAttribute("filled", "true");
                    turn++;
                    chipsLeft--;
                    redsTurn = false;
                }
            }


            for (let i = 0; i < winningArr.length; i++) {

                let redHasWon = winningArr[i].every(e => redArray.includes(e))
                let yellowHasWon = winningArr[i].every(e => yellowArray.includes(e))

                if (redHasWon == true) {
                    textbox.innerHTML = "Red Wins!"
                }

                if (yellowHasWon == true) {
                    textbox.innerHTML = "yellow wins!"
                }
            }

        })

        //NEW - ISSUE
        // helpBtn.addEventListener("click", () => {
        //     modal.style.display = "block";
        // })

        // closeBtn.addEventListener("click", () => {
        //     modal.style.display = "none";
        // })
                
        // resetBtn.addEventListener("click", () => {
        //     window.location.reload();
        // })

    }

    helpBtn.addEventListener("click", () => {
        modal.style.display = "block";
    })

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    })
                
    resetBtn.addEventListener("click", () => {
        window.location.reload();
    })

}

build();