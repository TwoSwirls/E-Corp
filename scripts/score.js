function updateScore()
{
    const moneybox = document.getElementById("money");
    const energybox = document.getElementById("energy");
    const turnbox = document.getElementById("turn");

    moneybox.innerHTML = "Money: $" + document.money;
    energybox.innerHTML = "Energy: " + document.energy;
    turnbox.innerHTML = "Turn: " + document.turn;
}

export { updateScore }