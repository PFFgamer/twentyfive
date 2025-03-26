// Controls mobile nav
document.getElementById("nav_button").addEventListener("click", show_nav);

function show_nav() {
    document.getElementById("nav").toggleAttribute("open");
    document.getElementById("icon_1").toggleAttribute("nav_open");
    document.getElementById("icon_2").toggleAttribute("nav_open");
    document.getElementById("aside_button").toggleAttribute("nav_open");
}

// Controls the aside for index.html
const shadow = document.getElementById("shadow");
document.getElementById("aside_button").addEventListener("click", show_index_aside);
shadow.addEventListener("click", show_index_aside);

function show_index_aside() {
    document.getElementById("i_asi").toggleAttribute("open");
    shadow.toggleAttribute("open");
}