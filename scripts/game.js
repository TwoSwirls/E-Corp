import { generateBoard, createBoard, updateBoard } from "./board.js";
import { calculateMoney, calculatePollution, updateScore } from "./score.js";
import { calculateProtests, doProtests } from "./protests.js";
import { checkEnd } from "./end.js";

// Disable right click menu
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Link buttons
document.getElementById("tutorial").onclick = () => {
    window.open("https://gdoc.pub/doc/e/2PACX-1vR7v5Yep86I5FwWjk-qgK4e6-p1ItOObG_pSW_THMrEa8OJAqQCcyUHPbUaRAaGp7cRD0k5UzMTpKfX", "_blank");
}
document.getElementById("info").onclick = () => {
    window.open("https://gdoc.pub/doc/e/2PACX-1vTiPbilj57gvVXQqbHDEEYvcub7lWbjHs960f_NDMMVKXmTmvtRLkQS9VuZqLzkAUn_6R2O_J3l7WFq#", "_blank");
}
document.getElementById("source").onclick = () => {
    window.open("https://github.com/twoswirls/E-Corp", "_blank");
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
document.pollution = 0;
updateScore();

// Next turn
const nextbutton = document.getElementById("next");
nextbutton.onclick = () => {
    const protest = new Promise(
        (resolve) => doProtests(calculateProtests(), resolve)
    )
    calculateMoney();
    calculatePollution();
    document.turn += 1;
    updateScore();
    protest.then(checkEnd);
}
