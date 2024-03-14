// Initialize some variables
let current_player = "X"
let turn_count = 0
let game_won = false
let winning_player = ""

function cellClicked() {
    if (game_won) {
        current_player = "X"
        turn_count = 0
        game_won = false
        console.log("Resetting...")
        for (let cell of cells) {
            cell.textContent = ""
        }
    } else {
        if (event.target.textContent == "") {
            event.target.textContent = current_player
            turn_count++
            [game_won, winning_player] = isGameWon()
            if (game_won) {
                if (winning_player == "X") {
                    window.alert(`Congratulations ${name1}, you won the game!\nTime to switch sides.`)
                } else {
                    window.alert(`Congratulations ${name2}, you won the game!\nTime to switch sides.`)
                }
                temp_name = name1
                name1 = name2
                name2 = temp_name
                document.getElementById("name1").textContent = `${name1}: X`
                document.getElementById("name2").textContent = `${name2}: O`
            } else if (turn_count == 9) {
                console.log("Draw")
                window.alert("The game has ended in a draw.")
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
}

function isGameWon() {
    // Top row
    if (cells[0].textContent !== "" && cells[1].textContent !== "" && cells[2].textContent !== "" &&
        cells[0].textContent === cells[1].textContent && cells[1].textContent === cells[2].textContent) {
        return [true, cells[0].textContent]
    // Center row
    } else if (cells[3].textContent !== "" && cells[4].textContent !== "" && cells[5].textContent !== "" &&
        cells[3].textContent === cells[4].textContent && cells[4].textContent === cells[5].textContent) {
        return [true, cells[3].textContent]
    // Bottom row
    } else if (cells[6].textContent !== "" && cells[7].textContent !== "" && cells[8].textContent !== "" &&
        cells[6].textContent === cells[7].textContent && cells[7].textContent === cells[8].textContent) {
        return [true, cells[6].textContent]
    // Left row
    } else if (cells[0].textContent !== "" && cells[3].textContent !== "" && cells[6].textContent !== "" &&
        cells[0].textContent === cells[3].textContent && cells[3].textContent === cells[6].textContent) {
        return [true, cells[0].textContent]
    // Middle row
    } else if (cells[1].textContent !== "" && cells[4].textContent !== "" && cells[7].textContent !== "" &&
        cells[1].textContent === cells[4].textContent && cells[4].textContent === cells[7].textContent) {
        return [true, cells[1].textContent]
    // Right row
    } else if (cells[2].textContent !== "" && cells[5].textContent !== "" && cells[8].textContent !== "" &&
        cells[2].textContent === cells[5].textContent && cells[5].textContent === cells[8].textContent) {
        return [true, cells[2].textContent]
    // Diagonal TL to BR
    } else if (cells[0].textContent !== "" && cells[4].textContent !== "" && cells[8].textContent !== "" &&
        cells[0].textContent === cells[4].textContent && cells[4].textContent === cells[8].textContent) {
        return [true, cells[0].textContent]
    // Diagonal BL to TR
    } else if (cells[6].textContent !== "" && cells[4].textContent !== "" && cells[2].textContent !== "" &&
        cells[6].textContent === cells[4].textContent && cells[4].textContent === cells[2].textContent) {
        return [true, cells[6].textContent]
    } else {
        return [false, ""]
    }
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

let cells = document.querySelectorAll(".row > div");

for (let cell of cells) {
    cell.addEventListener("click", cellClicked);
}
