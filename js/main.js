/*
    window.location.pathname.split("/").pop() används för att ta reda på vilken html sida det är,
    koden är en lite modifierad version av kod från stack overflow
    https://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript
*/

// Controls mobile nav
document.getElementById("nav_button").addEventListener("click", ShowNav);

function ShowNav() {
    document.getElementById("nav").toggleAttribute("open");
    document.getElementById("icon_1").toggleAttribute("nav_open");
    document.getElementById("icon_2").toggleAttribute("nav_open");
    document.getElementById("aside_button").toggleAttribute("nav_open");
}

// Controls the aside for index.html
if (window.location.pathname.split("/").pop() === "index.html") {
    const shadow = document.getElementById("shadow");
    document.getElementById("aside_button").addEventListener("click", ShowAside);
    shadow.addEventListener("click", ShowAside);

    function ShowAside() {
        document.getElementById("asi").toggleAttribute("open");
        shadow.toggleAttribute("open");
    }
}

// Controls the aside for booking.html
if (window.location.pathname.split("/").pop() === "booking.html") {
    let open = true;
    const icon = document.querySelector("#aside_button span");

    document.getElementById("aside_button").addEventListener("click", HideAside);

    function HideAside() {
        document.getElementById("asi").toggleAttribute("hidden");
        document.getElementById("grid").toggleAttribute("aside_hidden");
        if (open) {
            open = false;
            icon.textContent = "keyboard_arrow_right";
        } else {
            open = true;
            icon.textContent = "keyboard_arrow_left";
        }
    }
}

// Controls section for attractions.html
if (window.location.pathname.split("/").pop() === "attractions.html") {
    let pos = 0;
    let width = 1;
    const maxWidth = 7;

    let articles = document.getElementsByClassName("sec_article");
    const buttonL = document.getElementById("atr_button_l");
    const buttonR = document.getElementById("atr_button_r");

    if (window.matchMedia("(min-width: 501px)").matches) {
        width = 5;
    }

    Move(); // Fixar attribut från början så jag slipper hård-koda i html

    buttonL.addEventListener("click", MoveLeft);
    buttonR.addEventListener("click", MoveRight);

    function MoveRight() {
        console.log("hej");
        pos = Math.max(Math.min(pos + 1, maxWidth - width), 0);
        Move();
    }

    function MoveLeft() {
        pos = Math.max(Math.min(pos - 1, maxWidth - width), 0);
        Move();
    }

    function Move() {
        for (let i = 0; i < articles.length; i++) {
            if (i >= pos && i < pos + width) {
                articles.item(i).setAttribute("hidden", "false");
            } else {
                articles.item(i).setAttribute("hidden", "true");
            }
        }

        if (pos === maxWidth - width) {
            buttonR.setAttribute("hidden", "true");
        } else {
            buttonR.setAttribute("hidden", "false");
        }

        if (pos === 0) {
            buttonL.setAttribute("hidden", "true");
        } else {
            buttonL.setAttribute("hidden", "false");
        }
    }
}