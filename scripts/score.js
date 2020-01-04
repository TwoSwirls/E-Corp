function updateScore()
{
    const moneyBox = document.getElementById("money-text");
    moneyBox.innerHTML = document.money;

    const energyBox = document.getElementById("energy-text");
    energyBox.innerHTML = document.energy;

    const upkeepBox = document.getElementById("upkeep-text");
    upkeepBox.innerHTML = document.upkeep;

    const turnBox = document.getElementById("turn-text");
    turnBox.innerHTML = document.turn;
}

export { updateScore }