const board = document.getElementById("board");

const river = Math.floor(Math.random() * 7);

// RNG - chance is a fraction
const rng = (chance) => Math.random() < chance;

// Creates new images
const newImage = (source) => {
    const image = document.createElement("img");
    image.className = "tile-image";
    image.src = source;
    return image;
}

for (let i = 0; i < 7; i++)
{
    // This creates the rows
    const row = document.createElement("div");
    row.className = "row";
    board.appendChild(row);

    // This creates tiles in the board
    for(let j = 0; j < 7; j++)
    {
        const tile = document.createElement("div");
        tile.className = "tile";
        row.appendChild(tile);
        if (j === river)
        {
            tile.appendChild(newImage("assets/river.png"));
        }
        else if (rng(1/3))
        {
            tile.appendChild(newImage("assets/mount.png"));
        }
    }
}