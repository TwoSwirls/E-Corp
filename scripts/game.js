import { generate } from "./board.js";

generate();

let money = 0;
let energy = 0;
let turn = 0;

function updateScore()
{
    const moneybox = document.getElementById("money");
    const energybox = document.getElementById("energy");
    const turnbox = document.getElementById("turn");

    moneybox.innerHTML = "Money: " + money;
    energybox.innerHTML = "Energy: " + energy;
    turnbox.innerHTML = "Turn: " + turn;
}

updateScore();

function nextTurn()
{
    money += 500
    turn += 1;
    updateScore();
}


const nextbutton = document.getElementById("next");
nextbutton.onclick = nextTurn;