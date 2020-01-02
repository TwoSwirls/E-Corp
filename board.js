const board = document.getElementById("board");

for (let i = 0; i < 7; i++)
{
    // This creates the rows
    const row = document.createElement("div");
    row.className="row"
    board.appendChild(row);

    // This creates tiles in the board
    for(let j = 0; j < 7; j++)
    {
        const tile = document.createElement("div");
        tile.className = "tile";
        row.appendChild(tile);
    }
}