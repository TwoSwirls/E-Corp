import { rng, newImage } from "./util.js";

const TILE = {
    river: 1,
    mount: 2,
}

// Generates the board data
export function generateBoard()
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
export function drawBoard(board) {
{
    const boardBox = document.getElementById("board");
    while (boardBox.firstChild) boardBox.firstChild.remove();

    for (let i = 0; i < 7; i++)
    {
        // This creates the rows
        const row = document.createElement("div");
        row.className = "row";
        boardBox.appendChild(row);

        // This creates tiles in the board
        for(let j = 0; j < 7; j++)
        {
            const tileType = board[i][j];
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

            row.appendChild(tile);
        }
    }
}
}