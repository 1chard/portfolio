//menu dinamico
import Menu from "./module/header.js"

var menu = new Menu(document.querySelector("#inner"));

menu.efeitoSumir()
menu.ativaDinamico(
    menu.header.querySelector('.botoes'),
    document.querySelector('.hamburguer_content')
)

console.log("ddd")
