import { generateBoard, createBoard, updateBoard } from "./board.js";
import { calculateMoney, updateScore } from "./score.js";
import { calculateProtests, doProtests } from "./protests.js";
import { showEnd } from "./end.js";

// Disable right click menu
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Link Source button to Github
document.getElementById("source").onclick = () => {
    window.open('https://github.com/twoswirls/E-Corp', '_blank');
}

// Setup
document.board = generateBoard();
createBoard();
updateBoard();

document.money = 500;
document.energy = 0;
document.upkeep = 0;
document.turn = 0;
document.demolish = 0;
updateScore();

// Next turn
const nextbutton = document.getElementById("next");
nextbutton.onclick = () => {
    calculateMoney();
    document.turn += 1;
    updateScore();
    if (document.turn == 30 || document.money < 0)
    {
        showEnd();
        return;
    }
    const protests = calculateProtests();
    doProtests(protests);
}
