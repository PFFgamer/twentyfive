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
        document.getElementById("i_asi").toggleAttribute("open");
        shadow.toggleAttribute("open");
    }
}

// Controls the aside for booking.html
if (window.location.pathname.split("/").pop() === "booking.html") {
    document.getElementById("aside_button").addEventListener("click", HideAside);

    function HideAside() {
        document.getElementById("asi").toggleAttribute("hidden");
        document.getElementById("grid").toggleAttribute("aside_hidden");
    }
}

// Controls section 1 for booking.html
if (window.location.pathname.split("/").pop() === "booking.html") {
    document.getElementById("section_button").addEventListener("click", HideSection);

    function HideSection() {
        document.getElementById("grid").toggleAttribute("section_hidden");
    }
}

// Controls section for attractions.html
/*
    Kommentar för dokumentering
    1.  jag lyckades få det att fungera genom att flytta hela #sec,
        var tvungen att definera #sec för flera värden på attribut,
    2.  upptäckte att min sticky header hade slutat fungera på mobil,
        upptäckte att den inte fungerade om någon av sakerna gick utanför main,
        behövde byta lösning på mina articles
    3.  skapade en array med alla articles, pos samt hur många som skulle ses samtidigt
        knappar ändrar pos -> värden i array på pos + width blir display: block de andra blir hidden
        ändrade width när till 1 när man använder mobil -> fungerar på mobil
        + #sec är 100vw så headern fungerar på mobil
        + behöver bara definera attribute hidden true och false istället för varje position #sec har
        - transitions fungerar inte längre, ska försöka fixa om jag har tid (troligtvis inte)
*/
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