const names = document.querySelector(".names");
const namesText = document.querySelector(".namestext");
const role = document.querySelector(".role");
const roleText = document.querySelector(".roletext");
const games = document.querySelector(".games");
const gamesText = document.querySelector(".gamestext");
const themes = document.querySelector(".themes");
const themesText = document.querySelector(".themestext");

function revealStuff(eventButton, effectedClass)
{
    eventButton.addEventListener("click", ()=>{
        effectedClass.classList.remove("constants");
        effectedClass.classList.add("fadeIn");
        eventButton.classList.add("fadeOut");
    })
}

revealStuff(names, namesText)
revealStuff(role, roleText)
revealStuff(games, gamesText)
revealStuff(themes, themesText)