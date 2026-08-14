const snow = document.getElementById("snow");

setInterval(() => {

    const flake = document.createElement("span");

    flake.className = "snowflake";
    flake.innerHTML = "✦";

    flake.style.left = Math.random() * 100 + "vw";

    flake.style.fontSize =
        (5 + Math.random() * 8) + "px";

    flake.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    snow.appendChild(flake);

    setTimeout(() => {
        flake.remove();
    }, 10000);

}, 250);
