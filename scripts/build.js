import { TILE, drawBoard } from "./board.js";
import { clear } from "./util.js";
import { updateScore } from "./score.js";

function createOption(text, action)
{
    const option = document.createElement("button");
    option.className = "build-menu-option";
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

function demolish(i, j) {
    document.board[i][j] = 0;
    hideMenu();
}

// This is where all build functions will be

function showMenu(i, j)
{
    const menu = document.getElementById("build");
    const screen = menu.getElementsByClassName("screen")[0];
    screen.onclick = hideMenu;

    createMenu(i, j);

    menu.style.display = "block";
}

function createMenu(i, j)
{
    const menu = document.getElementById("build-menu");
    clear(menu);

    const tiletype = document.board[i][j];
    if (tiletype === TILE.mount)
    {
        menu.appendChild(createPriceOption(
            "Demolish",
            250,
            "Removes this tile.",
            () => demolish(i, j)
        ));
    }
    menu.appendChild(createOption("Cancel", hideMenu));

}

function hideMenu()
{
    drawBoard();
    const menu = document.getElementById("build");
    menu.style.display = "none";
}

export { showMenu, hideMenu }