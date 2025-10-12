const colorThemes = document.querySelectorAll('[name="theme"]');

//store theme
const storedTheme = function (theme) {
    localStorage.setItem('theme', theme);
}

//retrieve theme
const retieveTheme = function () {
    const activeTheme = localStorage.getItem('theme');
    colorThemes.forEach((themeOption) => {
        if (themeOption.id === activeTheme) {
            themeOption.checked = true
        }
    })
}

colorThemes.forEach(themeOption => {
    themeOption.addEventListener('click', () => {
        storedTheme(themeOption.id);
    })
})

document.onload = retieveTheme();

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        loader.remove();
    })
})

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})

function biographyjump() {
    document.getElementById("biography").scrollIntoView({ behavior: "smooth" });
}

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});
