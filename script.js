document.addEventListener("DOMContentLoaded", function () {

    const snow = document.getElementById("snow");

    function createSnow() {

        const flake = document.createElement("div");

        flake.className = "snowflake";
        flake.textContent = "✦";

        flake.style.left =
            Math.random() * 100 + "vw";

        flake.style.fontSize =
            (Math.random() * 8 + 5) + "px";

        flake.style.animationDuration =
            (Math.random() * 5 + 5) + "s";

        flake.style.opacity =
            Math.random() * .7 + .2;

        snow.appendChild(flake);

        setTimeout(function () {
            flake.remove();
        }, 10000);
    }

    setInterval(createSnow, 180);

});
