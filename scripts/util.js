// RNG - chance is a fraction
const rng = (chance) => Math.random() < chance;

// Creates new images
const newImage = (source) => {
    const image = document.createElement("img");
    image.className = "tile-image";
    image.src = source;
    return image;
}

export { rng, newImage };
