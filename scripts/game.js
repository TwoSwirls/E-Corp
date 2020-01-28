import { generateBoard, createBoard, updateBoard } from "./board.js";
import { calculateMoney, calculatePollution, updateScore } from "./score.js";
import { calculateProtests, doProtests } from "./protests.js";
import { checkEnd } from "./end.js";

// Disable right click menu
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Link buttons
document.getElementById("tutorial").onclick = () => {
    window.open("https://docs.google.com/document/d/1IUFy-_y0Qa6bhWUtNvzqeKxO3iUlcqZsnF4nhxUIeoY/edit?usp=sharing", "_blank");
}
document.getElementById("info").onclick = () => {
    window.open("https://gdoc.pub/doc/e/2PACX-1vTiPbilj57gvVXQqbHDEEYvcub7lWbjHs960f_NDMMVKXmTmvtRLkQS9VuZqLzkAUn_6R2O_J3l7WFq#", "_blank");
}
document.getElementById("sources").onclick = () => {
    window.open("https://docs.google.com/document/d/127M0dDiDGExICTWQiyga_BCflwa4HkkeiUwGmALsUkk/edit?usp=sharing", "_blank");
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
