let operado = document.querySelector("#operado")
let operaciones = document.querySelector("#operaciones")
let actual = document.querySelector("#montoActual")

var request = new XMLHttpRequest();
request.open('GET', './info.txt', true);
request.send(null);
request.addEventListener("load", useItems)

function useItems(){
    text = this.responseText
    items = text.split(";")
    console.log(items)

    operado.textContent = items[0]
    operaciones.textContent = items[1]
    actual.textContent = items[2]
}