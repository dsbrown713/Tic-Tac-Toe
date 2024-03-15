// Initialize some variables
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let current_player = "X"
let turn_count = 0
let game_won = false
let winning_player = ""

function cellClicked(event) {
    if (game_won) {
        temp_name = name1
        name1 = name2
        name2 = temp_name
        document.getElementById("name1").textContent = `${name1}: X`
        document.getElementById("name2").textContent = `${name2}: O`
        document.getElementById("results").textContent = `${name1}'s turn`
        current_player = "X"
        turn_count = 0
        game_won = false
        console.log("Resetting...")
        for (let cell of cells) {
            cell.textContent = ""
        }
    } else if (event.target.textContent == "") {
        if (current_player == "X") {
            document.getElementById("results").textContent = `${name2}'s turn`
        } else {
            document.getElementById("results").textContent = `${name1}'s turn`
        }
        event.target.textContent = current_player
        turn_count++
        game_won = isGameWon()
        if (game_won) {
            if (current_player == "X") {
                document.getElementById("results").textContent = `Congratulations ${name1}, you won!`
            } else {
                document.getElementById("results").textContent = `Congratulations ${name2}, you won!`
            }
        } else if (turn_count == 9) {
            console.log("Draw")
            document.getElementById("results").textContent = `Draw!`
            game_won = true
        } else {
            if (current_player == "X") {
                current_player = "O"
            } else {
                current_player = "X"
            }
        }
    } else {
        console.log(`This box already has an ${event.target.textContent} and cannot be replaced.`)
    }
}

function isGameWon() {
    for (let i = 0; i <=7; i++) {
        let win_con = winningConditions[i];
        let a = cells[win_con[0]].textContent;
        let b = cells[win_con[1]].textContent;
        let c = cells[win_con[2]].textContent;
        console.log(a + ", " + b + ", " + c)
        if ((a !== "" || b !== "" || c !== "") && a === b && b === c) {
            return true
        }
    }
    return false
}

// Allow players to choose their names
var name1 = prompt("Player 1, what is your name?")
while (name1 == null) {
    name1 = prompt("Player 1, please enter a valid name.")
}
var name2 = prompt("Player 2, what is your name?")
while (name2 == null) {
    name2 = prompt("Player 2, please enter a valid name.")
}
document.getElementById("name1").textContent = `${name1}: X`
document.getElementById("name2").textContent = `${name2}: O`
document.getElementById("results").textContent = `${name1}'s turn`

let cells = document.querySelectorAll(".row > div");

for (let cell of cells) {
    cell.addEventListener("click", cellClicked);
}
