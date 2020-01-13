function showEnd(tile, desc)
{
    const titleBox = document.getElementById("end-title");
    const descBox = document.getElementById("end-desc");

    titleBox.innerHTML = tile;
    descBox.innerHTML = desc;

    document.getElementById("end-button").onclick = () => {
        location.reload();
    }

    // Shows the end game screen
    document.getElementById("end").style.display = "block";
}

// Return true if the end is reached
export function checkEnd()
{
    // Check for endings
    if (document.money < 0)
    {
        showEnd(
            "Bankruptcy",
            "Uh Oh (stinky). You lost " + (document.money * -1) + " coins!"
        );
        return true;
    }
    else if (document.turn == 30 && document.money > 0)
    {
        showEnd(
            "Success",
            "Congrats you've made "
                + document.money
                + " coins. The future is looking bright!"
        );
        return true;
    }

    return false;
}