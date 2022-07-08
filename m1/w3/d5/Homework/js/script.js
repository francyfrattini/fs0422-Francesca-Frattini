function calcola() {
    let display = document.getElementById("display");
    let totale = eval(display.value)
    display.value = totale
}

function inserisci(simbolo){
    let display = document.getElementById("display");
    display.value += simbolo
}
        
function cancella(azzera){
    let display = document.getElementById("display");
    display.value = azzera
}