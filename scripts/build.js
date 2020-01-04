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

function createPriceOption(text, price, action)
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
    return option;
}

function demolish(i, j) {
    document.board[i][j] = 0;
    drawBoard();
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
        menu.appendChild(createPriceOption("Demolish", 250, () => demolish(i, j)));
    }
    menu.appendChild(createOption("Cancel", hideMenu));

}

function hideMenu()
{
    const menu = document.getElementById("build");
    menu.style.display = "none";
}

export { showMenu, hideMenu }