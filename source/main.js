var showOrHide = document.getElementById("play-button")

showOrHide.addEventListener('click' , () => {
    var menu = document.querySelector(".conteiner-menu")
    var game = document.querySelector(".conteiner-game")
    menu.style.display = "none"
    game.style.display = "flex"

    
})

function select (op) {
    var tic = document.createElement('img')
    tic.src = 'img/tic.png'
    document.getElementById('cell-'+op).appendChild(tic);
}

document.getElementById('cell-0').onclick = function () {select(0)}