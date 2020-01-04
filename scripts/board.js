import { rng, newImage, clear } from "./util.js";
import { showMenu } from "./build.js"

const TILE = {
    river: 1,
    mount: 2,
}

// Generates the board data
function generateBoard()
{
    const river = Math.floor(Math.random() * 7);
    const board = [];

    for (let i = 0; i < 7; i++)
    {
        // This creates the rows
        const row = [];
        board.push(row);

        // This creates tiles in the board
        for(let j = 0; j < 7; j++)
        {
            if (j === river)
            {
                row.push(TILE.river);
            }
            else if (rng(1/3))
            {
                row.push(TILE.mount);
            }
            else
            {
                row.push(0);
            }
        }
    }

    return board;
}

// Draws the board from board data
function drawBoard()
{
    const boardBox = document.getElementById("board");
    clear(boardBox);

    for (let i = 0; i < 7; i++)
    {
        // This creates the rows
        const row = document.createElement("div");
        row.className = "row";
        boardBox.appendChild(row);

        // This creates tiles in the board
        for(let j = 0; j < 7; j++)
        {
            const tileType = document.board[i][j];
            const tile = document.createElement("div");
            tile.className = "tile";

            switch (tileType) {
                case TILE.river:
                    tile.style.backgroundImage = "url('assets/river.png')";
                    break;
                case TILE.mount:
                    tile.appendChild(newImage("assets/mount.png"));
                default:
                    break;
            }

            tile.onclick = () => {
                tile.style.boxShadow = "inset 0 0 0 3px yellow";
                showMenu(i, j);
            }
            row.appendChild(tile);
        }
    }
}

export { TILE, generateBoard, drawBoard }