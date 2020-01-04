import { generateBoard, drawBoard } from "./board.js";
import { updateScore} from "./score.js";

// Disable right click menu
document.addEventListener("contextmenu", (e) => e.preventDefault());

document.board = generateBoard();
drawBoard();

document.money = 0;
document.energy = 0;
document.turn = 0;

function nextTurn()

{
    document.money += 500
    document.turn += 1;
    updateScore();
}

const nextbutton = document.getElementById("next");
nextbutton.onclick = nextTurn;
nextTurn();