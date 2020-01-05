export function showEnd()
{
    const title = document.getElementById("end-title");
    const desc = document.getElementById("end-desc");

    if (document.money > 0)
    {
        title.innerHTML = "Success";
        desc.innerHTML = "Congrats you've made " + document.money
            + " coins. The future is looking bright!";
    }
    else
    {
        title.innerHTML = "Bankruptcy";
        desc.innerHTML = "Uh Oh (stinky). You lost " + (document.money * -1) + " coins!";
    }

    document.getElementById("end-button").onclick = () => {
        location.reload();
    }

    // Shows the end game screen
    document.getElementById("end").style.display = "block";
}