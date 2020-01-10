import { updateScore } from "./score.js";
import { TILE, TILE_DATA } from "./data.js";
import { rng } from "./util.js";

function calculateProtests()
{
    const protestTable = {};

    // Add up the total protest costs for each tile type
    document.board.forEach((row) => row.forEach((tile) => {
        if (tile == TILE.river || tile == TILE.empty || tile == TILE.mount)
        {
            return;
        }

        const tileData = TILE_DATA[tile];
        if (rng(tileData.protestChance))
        {
            if (tile in protestTable)
            {
                protestTable[tile] += tileData.protestCost;
            }
            else
            {
                protestTable[tile] = tileData.protestCost;
            }
        }
    }));

    // Create a list of the protests and their costs
    const protestList = [];
    Object.keys(protestTable).forEach((tile) => {
        const protest = {
            type: tile,
            cost: protestTable[tile]
        }
        protestList.push(protest);
    });

    return protestList;
}

function doProtests(protestList)
{
    // Check if there are protests
    if (protestList.length <= 0)
    {
        document.getElementById("protest").style.display = "none";
        return;
    }

    // Get containers
    const title = document.getElementById("protest-title");
    const desc = document.getElementById("protest-desc");
    const button = document.getElementById("protest-button");

    // Get one of the protests
    const protest = protestList.pop();
    const tileData = TILE_DATA[protest.type];

    // Choose a random reason
    const reasons = tileData.protestText;
    const reason = reasons[Math.floor(Math.random() * reasons.length)];

    // Create popup text
    title.innerHTML = "Protests for " + tileData.tile + "!";
    desc.innerHTML = `People are unhappy about your ${tileData.tile} buildings:
                      <br>
                      <br> <i>"${reason}"</i>
                      <br>
                      <br> You spend money to calm the protestors, and promise changes for the future.`
    button.innerHTML = "Pay $" + protest.cost;
    button.onclick = () => {
        document.money -= protest.cost;
        updateScore();
        doProtests(protestList);
    }

    document.getElementById("protest").style.display = "block";
}

export { calculateProtests, doProtests }