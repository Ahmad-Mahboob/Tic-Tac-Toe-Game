let isO = true;
document.getElementById("reset").value = "Reset"
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
document.getElementById("winner").classList.add("hide");

function printValues(event) {
    const cell = event.target; // Get the clicked cell using the event object
    if (isO) {
        cell.value = "O"; // Set the value to "O" for the clicked cell
        isO = false;
    } else {
        cell.value = "X"; // Set the value to "X" for the clicked cell
        isO = true;
    }
    cell.disabled = true; // Disable the clicked cell
    if (checkWinner()) {
        document.getElementById("winner").innerText = `Winner is ${cell.value}!`
        document.getElementById("winner").classList.remove("hide");
        disableBtns()
    }
}

function checkWinner() {
    const cells = document.getElementsByClassName("cell"); // Get all cells
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
            cells[a].value &&
            cells[a].value === cells[b].value &&
            cells[a].value === cells[c].value
        ) {
            return true;
        }
    }
    return false;
}
function resetGame(){
    isO = true;
    document.getElementById("cell0").value = ""
    document.getElementById("cell1").value = ""
    document.getElementById("cell2").value = ""
    document.getElementById("cell3").value = ""
    document.getElementById("cell4").value = ""
    document.getElementById("cell5").value = ""
    document.getElementById("cell6").value = ""
    document.getElementById("cell7").value = ""
    document.getElementById("cell8").value = ""

    document.getElementById("cell0").disabled = false;
    document.getElementById("cell1").disabled = false;
    document.getElementById("cell2").disabled = false;
    document.getElementById("cell3").disabled = false;
    document.getElementById("cell4").disabled = false;
    document.getElementById("cell5").disabled = false;
    document.getElementById("cell6").disabled = false;
    document.getElementById("cell7").disabled = false;
    document.getElementById("cell8").disabled = false;
    document.getElementById("winner").classList.add("hide");
}
function disableBtns(){
    document.getElementById("cell0").disabled = true;
    document.getElementById("cell1").disabled = true;
    document.getElementById("cell2").disabled = true;
    document.getElementById("cell3").disabled = true;
    document.getElementById("cell4").disabled = true;
    document.getElementById("cell5").disabled = true;
    document.getElementById("cell6").disabled = true;
    document.getElementById("cell7").disabled = true;
    document.getElementById("cell8").disabled = true; 
}