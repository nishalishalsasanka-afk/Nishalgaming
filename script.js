document.addEventListener("DOMContentLoaded", () => {
    const snow = document.getElementById("snow");

    if (!snow) return;

    setInterval(() => {
        const flake = document.createElement("span");

        flake.className = "snowflake";
        flake.textContent = "✦";

        flake.style.left = Math.random() * 100 + "vw";
        flake.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        snow.appendChild(flake);

        setTimeout(() => flake.remove(), 10000);
    }, 250);
});
