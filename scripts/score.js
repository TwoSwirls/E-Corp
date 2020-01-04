import { TILE, TILE_DATA } from "./data.js";

function calculateEnergy()
{
    let energy = 0;

    document.board.forEach((row) => row.forEach((tile) => {
        if (tile == TILE.river || tile == TILE.empty || tile == TILE.mount)
        {
            return;
        }
        const data = TILE_DATA[tile];
        if (Array.isArray(data.energy))
        {
            const min = data.energy[0];
            const max = data.energy[1];
            energy += Math.round(Math.random() * (max - min) + min);
        }
        else
        {
            energy += data.energy;
        }
    }));

    return energy;
}

function calculateUpkeep()
{
    let upkeep = 0;

    document.board.forEach((row) => row.forEach((tile) => {
        if (tile == TILE.river || tile == TILE.empty || tile == TILE.mount)
        {
            return;
        }
        const data = TILE_DATA[tile];
        upkeep += data.upkeep + data.upkeepIncrease * document.turn;
    }));

    return upkeep;
}

function calculateMoney()
{
    const energy = calculateEnergy();
    document.energy = energy;

    const upkeep = calculateUpkeep();
    document.upkeep = upkeep;

    document.money += (energy + 500) - upkeep;
}

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

export { calculateMoney, updateScore }