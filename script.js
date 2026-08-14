const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const auth = document.getElementById("auth");
const register = document.getElementById("register");
const website = document.getElementById("website");

const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

const message = document.getElementById("message");
const registerMessage = document.getElementById("registerMessage");


// CREATE ACCOUNT PAGE

showRegister.addEventListener("click", () => {

    auth.classList.add("hidden");
    register.classList.remove("hidden");

});


// LOGIN PAGE

showLogin.addEventListener("click", () => {

    register.classList.add("hidden");
    auth.classList.remove("hidden");

});


// CREATE ACCOUNT

registerForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const username =
        document.getElementById("newUsername").value.trim();

    const password =
        document.getElementById("newPassword").value;

    localStorage.setItem("nishal_username", username);
    localStorage.setItem("nishal_password", password);

    registerMessage.textContent =
        "ACCOUNT CREATED! NOW LOGIN.";

    registerForm.reset();

    setTimeout(() => {

        register.classList.add("hidden");
        auth.classList.remove("hidden");

    }, 1000);

});


// LOGIN

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    const savedUsername =
        localStorage.getItem("nishal_username");

    const savedPassword =
        localStorage.getItem("nishal_password");


    if (
        username === savedUsername &&
        password === savedPassword
    ) {

        auth.classList.add("hidden");

        website.classList.remove("hidden");

        message.textContent = "";

    } else {

        message.textContent =
            "INVALID USERNAME OR PASSWORD";

    }

});


// SNOW ANIMATION

const snow = document.getElementById("snow");

function createSnow() {

    if (!snow) return;

    const flake =
        document.createElement("span");

    flake.className = "snowflake";

    flake.textContent = "✦";

    flake.style.left =
        Math.random() * 100 + "vw";

    flake.style.fontSize =
        (5 + Math.random() * 9) + "px";

    flake.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    snow.appendChild(flake);

    setTimeout(() => {

        flake.remove();

    }, 10000);

}

setInterval(createSnow, 250);
