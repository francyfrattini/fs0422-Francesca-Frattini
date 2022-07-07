//caratteri maiuscoli e minuscoli applicati ad una stringa

let titolo = 'Corso di JavaScript'
console.log(titolo);

let maiuscolo = titolo.toUpperCase();
console.log(maiuscolo);

let minuscolo = titolo.toLowerCase();
console.log(minuscolo);



//suddivisione stringa in elementi, selezione di due e concatenazione in una stringa

let lista = titolo.split(' ');
console.log(lista);

let titolo2 = (lista[0])+(lista[2]);
console.log(titolo2);



//array di persone e leggi il terzo elemento

let amiche = ["Giada", "Irene", "Silvia"];
console.log(amiche [2]);



//passa all'array un valore tramite variabile, leggi la lunghezza

let amiche2 = "Vittoria"
amiche.push(amiche2);
console.log(amiche);
console.log(amiche.length);



//crea una funzione all'interno della quale utilizzerai i valori numerici tratti da un array


function somma(){
    let numeri = [5, 7, 9];
    return numeri[0] + numeri[1] + numeri[2];
}

somma();
console.log(somma());



//push/pop e shift/unshift

let eliminaUltima = amiche.pop ();
console.log(eliminaUltima);

let aggiungiUltima = amiche.push ("Eleonora");
console.log(aggiungiUltima);
console.log(amiche)




let eliminaPrima = amiche.shift ();
console.log(eliminaPrima);

let aggiungiPrima = amiche.unshift ("Monique");
console.log(aggiungiPrima);
console.log(amiche);

