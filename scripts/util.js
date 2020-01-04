// RNG - chance is a fraction
const rng = (chance) => Math.random() < chance;

// Creates new images
function newImage(source) 
{
    const image = document.createElement("img");
    image.className = "tile-image";
    image.src = source;
    return image;
}

function clear(container)
{
    while (container.firstChild) container.firstChild.remove();
}

export { rng, newImage, clear }
