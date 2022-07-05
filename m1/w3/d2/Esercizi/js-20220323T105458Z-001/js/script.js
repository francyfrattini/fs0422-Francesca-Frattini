let nome = "Mirtilla";
console.log(nome);
var utente = "cliente";
console.log(utente);
const PI = 3.14;
console.log(PI);
//ERRORE=> la costante non può cambiare valore var PI = 4

//=> ho cambiato il valore della variabile nome da Mirtilla a Lilla
nome = "Lilla";
console.log(nome);
utente = "amministratore";
console.log(utente);

let primoLavoro = "developing";
let secondoLavoro = "formazione";

let lavoro = primoLavoro + " e " + secondoLavoro;

console.log('io mi occupo di: ' + lavoro);
console.log('io mi occupo di: ' + primoLavoro + " e " + secondoLavoro);

let JS = true;
console.log('Let JS: ' + JS);

let anno;
console.log(anno);

anno = 1991;

const annoAttuale = 2021;

let anniMirtilla = annoAttuale - anno;
console.log(anniMirtilla);

console.log(nome + " ha: " + anniMirtilla + " anni");

let a = 10 + 5;
let b = 3;
let c = 10;
let somma = b + c + 2;
console.log(somma);

c++;
console.log(c);
a--;
console.log(a);

let nomePet = "Billo";
let colorePet = "rosso";
const pet = "il nome del pet: " + nomePet + "e il suo colore è: " + colorePet;
console.log(pet);

// sintassi letterale con backtick -> apice inverso
const pet1 = `il nome del pet: ${nomePet}  e il suo colore è: ${colorePet}`;
console.log(pet1);

console.log('string con \n\ righe \n\ multiple');
console.log(`string con 
righe 
multiple`);


//let => non posso riassegnare il valore di let con una var a meno che let non sia tra { } (blockscope)
let nomeP = 'Mario';
console.log(nomeP);

//var nome = Flavio

{
    let nameP = 'Mario';
    console.log(nameP);
}

var nameP = 'Flavio';
console.log(nameP);

nameM = 'Paola'
console.log(nameM);

nomePadre = 'Flavio';
console.log(nomePadre);

nomeMadre = 'Paola';
console.log(nomeMadre);

console.log(nomePadre != nomeMadre);
console.log(nameP != nomePadre);
console.log(nameP == nomePadre);
console.log(nameP === nomePadre);
console.log(nameP += nomePadre);
console.log(nameP += nameM);
console.log(nameP -= nomePadre);

console.log(nomePadre + ' e ' + nomeMadre + ' sono i nomi dei miei genitori')

Francesca = (nomePadre + nomeMadre)
console.log (Francesca)

Francesca = 'Francy'
console.log (Francesca)

var io = {
    nome: 'Francy',
    età: 30,
    fratelli: false,
}

console.log(io)
console.log(typeof io, typeof nome, typeof età, typeof fratelli)

console.log(Francesca != 'Federica')

annoNascitaP = 1961
console.log(annoNascitaP)

annoNascitaM = 1962
console.log(annoNascitaM)

annoNascitaF = 1992
console.log(annoNascitaF)

annoOggi = 2022
console.log(annoOggi)

sottrazioneP = (annoOggi) - (annoNascitaP)
console.log (sottrazioneP)

sottrazioneM = (annoOggi) - (annoNascitaM)
console.log (sottrazioneM)

sottrazioneF = (annoOggi) - (annoNascitaF)
console.log (sottrazioneF)


console.log('Mio padre ha ' + sottrazioneP + ' anni, mia madre ha ' + sottrazioneM + ' anni, io ho ' + sottrazioneF + ' anni.')


let identità = prompt('Chi sei?');
       console.log(identità);

       let body = document.querySelector ('body')       

       if(identità){

            if(identità == nomePadre){
               document.write('Ciao Papà!')
               body.style.backgroundColor = "blue"
               body.style.color = "white"
               body.style.fontSize = "5rem"
            }else if(identità == nomeMadre){
                document.write('Ciao Mamma!')
                body.style.backgroundColor = "yellow"
                body.style.color = "black"
                body.style.fontSize = "5rem"
            }else if(identità == Francesca){
                document.write('Ciao Francy!')
                body.style.backgroundColor = "orange"
                body.style.color = "black"
                body.style.fontSize = "5rem"
            }else{
                document.write('Ciao!')
                body.style.backgroundColor = "green"
                body.style.color = "white"
                body.style.fontSize = "5rem"
            }
        }

    