import { generateBoard, drawBoard } from "./board.js";
import { calculateMoney, updateScore } from "./score.js";

// Disable right click menu
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Link Source button to Github
document.getElementById("source").onclick = () => {
    window.open('https://github.com/twoswirls/E-Corp', '_blank');
}

document.board = generateBoard();
drawBoard();

document.money = 0;
document.energy = 0;
document.upkeep = 0;
document.turn = -1;

function nextTurn()
{
    document.turn += 1;
    calculateMoney();
    updateScore();
}

const nextbutton = document.getElementById("next");
nextbutton.onclick = nextTurn;
nextTurn();