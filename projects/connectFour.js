const board = document.getElementById('board-grid')
const modal = document.getElementById('modal')

const redArray = []
const yellowArr = []

//red will go first
let turn = 0;

function initBoard() {

    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
            const slot = document.createElement('div')
            slot.classList.add('slot')
            slot.classList.add(`row-${row}-col-${col}`)
            slot.id = `row-${row}-col-${col}`
            board.appendChild(slot)

            slot.addEventListener('click', () => {

                //If the slot selected is in the bottom row and it is empty
                if (row == 5 && !hasDisc(slot)) {
                    const disc = document.createElement('div')
                    disc.classList.add('disc')
                    disc.classList.add(`row-${row}-col-${col}`)
                    if (turn % 2 == 0) {
                        disc.style.backgroundColor = 'red'
                        disc.classList.add('red-disc')
                    } else {
                        disc.style.backgroundColor = 'yellow'
                        disc.classList.add('yellow-disc')
                    }
                    slot.appendChild(disc)
                    turn++

                }
                //Else if we are above the bottom row
                else if (row < 5) {
                    const slotBelow = document.getElementById(`row-${row + 1}-col-${col}`)
                    //and the chosen slot is empty and the slow below is not empty
                    if (!hasDisc(slot) && hasDisc(slotBelow)) {
                        const disc = document.createElement('div')
                        disc.classList.add('disc')
                        disc.classList.add(`row-${row}-col-${col}`)
                        if (turn % 2 == 0) {
                            disc.style.backgroundColor = 'red'
                            disc.classList.add('red-disc')
                        } else {
                            disc.style.backgroundColor = 'yellow'
                            disc.classList.add('yellow-disc')
                        }
                        slot.appendChild(disc)
                        turn++

                    }
                }

                const slotsArray2d = []
                for (let i = 0; i < 42; i += 7) {
                    slotsArray2d.push(Array.from(board.children).slice(i, i + 7))
                }

                checkForWin(slotsArray2d)
            })
        }
    }
}

function hasDisc(slot) {
    return slot.children.length > 0
}

function checkForWin(arr) {
    // Check horizontally
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
            const slots = arr[row].slice(col, col + 4);
            if (checkSlots(slots)) {
                getWinner(slots)
            }
        }
    }

    // Check vertically
    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 3; row++) {
            const slots = [arr[row][col], arr[row + 1][col], arr[row + 2][col], arr[row + 3][col]];
            if (checkSlots(slots)) {
                getWinner(slots)
                return slots
            }
        }
    }

    // Check diagonally (top-left to bottom-right)
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 4; col++) {
            const slots = [arr[row][col], arr[row + 1][col + 1], arr[row + 2][col + 2], arr[row + 3][col + 3]];
            if (checkSlots(slots)) {
                getWinner(slots)
            }
        }
    }

    // Check diagonally (bottom-left to top-right)
    for (let row = 3; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
            const slots = [arr[row][col], arr[row - 1][col + 1], arr[row - 2][col + 2], arr[row - 3][col + 3]];
            if (checkSlots(slots)) {
                getWinner(slots)
            }
        }
    }
}

function checkSlots(slots) {
    return slots.every(slot => slot.children[0] && slot.children[0].classList.contains('red-disc')) ||
        slots.every(slot => slot.children[0] && slot.children[0].classList.contains('yellow-disc'));
}

function getWinner(s) {
    if (s[0].children[0].classList.contains('red-disc')) {
        console.log('red winds')
        for(let i = 0; i < 4; i++){
            s[i].children[0].innerHTML = i + 1
        }
        setTimeout(() => {
            modal.innerHTML = 'Red wins'
            modal.showModal()
            // console.log("Delayed for 1 second.");
        }, "3000");
    } else {
        console.log('yellow wins')
        for(let i = 0; i < 4; i++){
            s[i].children[0].innerHTML = i + 1
        }
        setTimeout(() => {
            modal.innerHTML = 'Yellow wins'
            modal.showModal()
            // console.log("Delayed for 1 second.");

        }, "3000");
    }
}

initBoard()