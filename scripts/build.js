import { TILE, TILE_DATA } from "./data.js";
import { updateBoard } from "./board.js";
import { clear } from "./util.js";
import { updateScore } from "./score.js";

function createOption(text, action)
{
    const option = document.createElement("button");
    option.className = "option";
    option.innerHTML = text;
    option.onclick = action;
    return option;
}

function createPriceOption(text, price, description, action)
{
    const pay = () => {
        document.money -= price;
        updateScore();
        action();
    }

    const option = createOption(text + " $" + price, pay)
    if (document.money < price)
    {
        option.disabled = true;
    }
    const tooltip = document.createElement("tooltip");
    tooltip.innerHTML = description;
    option.appendChild(tooltip);
    return option;
}

function build(i, j, type)
{
    document.board[i][j] = type;
    updateBoard();
    hideMenu(i, j);
}

function createTileOption(i, j, type)
{
    const t = TILE_DATA[type];

    let cost = t.cost + t.costIncrease * t.built;
    if (cost > t.costMax)
    {
        cost = t.costMax;
    }

    const option = createPriceOption(
        t.tile,
        cost,
        t.desc,
        () => {
            build(i, j, type);
            t.built += 1;
        }
    )

    return option;
}

function showMenu(i, j)
{
    const menu = document.getElementById("build");
    const screen = menu.getElementsByClassName("screen")[0];
    screen.onclick = () => hideMenu(i, j);

    createMenu(i, j);

    menu.style.display = "block";
}

function createMenu(i, j)
{
    const menu = document.getElementById("build-menu");
    clear(menu);

    const tileType = document.board[i][j];
    if (tileType == TILE.empty)
    {
        Object.keys(TILE_DATA).forEach((type) => {
            if (type == TILE.hydrodam)
            {
                return;
            }
            menu.appendChild(createTileOption(i, j, type));
        })
    }
    else if (tileType == TILE.river)
    {
        menu.appendChild(createTileOption(i, j, TILE.hydrodam));
    }
    else
    {
        let clear = TILE.empty;
        if (tileType == TILE.hydrodam)
        {
            clear = TILE.river;
        }
        let cost = 400 + document.demolish * 200;
        if (cost > 2000)
        {
            cost = 2000;
        }
        menu.appendChild(createPriceOption(
            "Demolish",
           cost,
            "Removes this tile.",
            () => {
                build(i, j, clear);
                document.demolish += 1;
            }
        ));
    }

    menu.appendChild(createOption("Cancel", () => hideMenu(i, j)));

}

function hideMenu(i, j)
{
    // Remove red outline
    const row = document.getElementById("board").children[i];
    const tile = row.children[j];
    tile.style.boxShadow = "";

    // Hide menu
    const menu = document.getElementById("build");
    menu.style.display = "none";
}

export { showMenu }