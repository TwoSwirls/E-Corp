import { TILE, TILE_POLLUTERS, TILE_DATA } from "./data.js";

function calculateEnergy()
{
    let energy = 0;
    const energyTable = {};

    document.board.forEach((row) => row.forEach((tile) => {
        if (tile == TILE.river || tile == TILE.empty || tile == TILE.mount)
        {
            return;
        }

        // Calculate the energy generated
        let e = 0;
        const tileData = TILE_DATA[tile];
        if (Array.isArray(tileData.energy))
        {
            const min = tileData.energy[0];
            const max = tileData.energy[1];
            e = Math.round(Math.random() * (max - min) + min);
        }
        else
        {
            e = tileData.energy;
        }

        // Update total energy and energy table
        energy += e;
        if (tile in energyTable)
        {
            energyTable[tile] += e;
        }
        else
        {
            energyTable[tile] = e;
        }
    }));

    // Update tooltip
    const tooltip = document.getElementById("energy-tooltip");
    tooltip.innerHTML = `This is the number of energy produced this turn.
                         One energy is equivalent to one coin made for the next turn.`;
    if (energy > 0)
    {
        tooltip.innerHTML += "<br>"
    }
    Object.keys(energyTable).forEach((tile) => {
        const tileData = TILE_DATA[tile];
        tooltip.innerHTML += "<br>" + tileData.tile + ": " + energyTable[tile];
    })

    return energy;
}

function calculateUpkeep()
{
    let upkeep = 0;
    const upkeepTable = {};

    document.board.forEach((row) => row.forEach((tile) => {
        if (tile == TILE.river || tile == TILE.empty || tile == TILE.mount)
        {
            return;
        }
        const tileData = TILE_DATA[tile];
        const u = tileData.upkeep + tileData.upkeepIncrease * document.turn;
        upkeep += u;
        if (tile in upkeepTable)
        {
            upkeepTable[tile] += u;
        }
        else
        {
            upkeepTable[tile] = u;
        }
    }));

    // Update tooltip
    const tooltip = document.getElementById("upkeep-tooltip");
    tooltip.innerHTML = `This is the amount of upkeep for this turn.
                         One wrench is equivalent to one coin needed for maintainence.`;
    if (upkeep > 0)
    {
        tooltip.innerHTML += "<br>"
    }
    Object.keys(upkeepTable).forEach((tile) => {
        const tileData = TILE_DATA[tile];
        tooltip.innerHTML += "<br>" + tileData.tile + ": " + upkeepTable[tile];
    })

    return upkeep;
}

function calculateMoney()
{
    const energy = calculateEnergy();
    document.energy = energy;

    const upkeep = calculateUpkeep();
    document.upkeep = upkeep;

    const income = (energy + 500) - upkeep;
    document.money += income;

    // Update tooltip
    const tooltip = document.getElementById("money-tooltip");
    tooltip.innerHTML = `This is the money used to build or demolish.
                        <br>
                        <br> Total income: ${income}
                        <br> Basic: 500
                        <br> Energy: ${energy}
                        <br> Upkeep: ${-upkeep}`;
}

function calculatePollution()
{
    // Count number of polluting buildings built
    let totalBuilt = 0;
    TILE_POLLUTERS.forEach((polluter) => {
        const polluterData = TILE_DATA[polluter];
        totalBuilt += polluterData.built;
    })

    // Set background to gray out based on % of board covered in polluter tiles
    const percent = totalBuilt / 42;
    const background = document.getElementById("background");
    if (percent > document.pollution)
    {
        document.pollution = percent;
        background.style.filter = "grayscale(" + percent * 2 + ")";
    }
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

export { calculateMoney, calculatePollution, updateScore }