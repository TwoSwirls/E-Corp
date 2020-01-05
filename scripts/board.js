import { rng, newImage, clear } from "./util.js";
import { showMenu } from "./build.js";
import { TILE, TILE_IMAGE } from "./data.js";

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

// Create the board
function createBoard()
{
    const boardBox = document.getElementById("board");
    for (let i = 0; i < 7; i++)
    {
        // Create the rows
        const row = document.createElement("div");
        row.className = "row";

        for(let j = 0; j < 7; j++)
        {
            // Create the tiles
            const tile = document.createElement("div");
            tile.className = "tile";
            tile.tileType = TILE.empty;

            tile.onclick = () => {
                tile.style.boxShadow = "inset 0 0 0 3px red";
                showMenu(i, j);
            }

            row.appendChild(tile);
        }

        boardBox.appendChild(row);
    }
}

// Update the board drawing with any new changes
function updateBoard()
{
    const boardBox = document.getElementById("board");
    for (let i = 0; i < 7; i++)
    {
        const row = boardBox.children[i];
        for(let j = 0; j < 7; j++)
        {
            const tile = row.children[j];
            const tileOld = tile.tileType;
            const tileNew = document.board[i][j];

            if (tileOld === tileNew)
            {
                continue;
            }

            // Reset the tile
            clear(tile);
            tile.style.backgroundImage = "";
            tile.tileType = tileNew;

            // Check if need to set river
            if (tileNew === TILE.river || tileNew === TILE.hydrodam)
            {
                tile.style.backgroundImage = "url('assets/river.png')";
            }

            // Check if need to add image
            if (tileNew in TILE_IMAGE)
            {
                tile.appendChild(newImage(TILE_IMAGE[tileNew]));
            }
        }
    }
}

export { TILE, generateBoard, createBoard, updateBoard }