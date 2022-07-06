//FUNZIONE FRECCIA

let calcolaAnni = (annoAttuale, annoLaurea) => {
    return `Io mi sono laureata ${annoAttuale - annoLaurea} anni fa`;
}

console.log(calcolaAnni (2022, 2015))



//COSTRUTTORE OGGETTI

function Trasferimento (_luogo,_annoTrasferimento, _annoPartenza, _annoAttuale){
    this.luogo = _luogo;
    this.annoTrasferimento = _annoTrasferimento;
    this.annoPartenza=_annoPartenza;
    this.annoAttuale = _annoAttuale;
}

let trasferimentoMilano = new Trasferimento ('Milano', 2011, 2017, 2022)
let trasferimentoAncona = new Trasferimento ('Ancona', 2017, 2022, 2022)
console.log (trasferimentoMilano, trasferimentoAncona)



//CLOSURE

function calcolaAnni2(){
    return function (annoAttuale){
        return function(annoLaurea){
            return  `Io mi sono laureata ${annoAttuale - annoLaurea} anni fa` ;
        }
    }
}

console.log(calcolaAnni2()(2022)(2015));


//OPERATORI

let body = document.querySelector('body')

let annoNascita = prompt('Di che anno sei?') 
console.log(annoNascita);

let sfondo = (annoNascita <= 1995) ? body.style.backgroundColor = "black" : body.style.backgroundColor =  '#80008085';
document.write(sfondo) 

