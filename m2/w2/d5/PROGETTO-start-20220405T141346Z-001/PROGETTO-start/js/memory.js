let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯',
  '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];
//libreria per icone
//https://html-css-js.com/html/character-codes/

console.log(arrayAnimali)

let arrayComparison = [];

document.body.onload = startGame();

var interval; //1 var interval
var findIcons = document.getElementsByClassName("find"); //2 var agganciata alla classe find
var modal = document.getElementById("modal"); //3 var agganciata all'id modal'
var timer = document.querySelector(".timer"); //4 var agganciata alla classe timer


//una funzione che serve a mescolare in modo random gli elementi dell'array che viene passato 
// (l'array contiene le icone degli animali)
function shuffle(a) {
  var currentIndex = a.length;
  var temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = a[currentIndex];
    a[currentIndex] = a[randomIndex];
    a[randomIndex] = temporaryValue;
  }
  return a;
}

// una funzione che faccia partire il timer da 00:00:00
function startTimer() {
  var s = 0, m = 0;
  interval = setInterval(function () {
    timer.innerHTML = 'DAJE: ' + m + " min " + s + " sec";
    s++;
    if (s == 60) { //se i secondi arrivano a 60, incremento i minuti (non ho impostato le ore perchè spero non ci vogliano ore per risolvere un memory :D)
      m++;
      s = 0;
    }
  }, 1000);
}

function startGame() {

  clearInterval(interval); //la funzione startGame che pulisce il timer
  arrayComparison = []; //la funzione startGame dichiara un array vuoto
  var arrayShuffle = shuffle(arrayAnimali); //(var arrayShuffle = shuffle(arrayAnimali)
  console.log(arrayShuffle)

  var carte = document.getElementById('griglia'); //aggancia il contenitore con id griglia
  while (carte.hasChildNodes()) {
    carte.removeChild(carte.firstChild); // pulisce tutti gli elementi che eventualmente contiene
  }
  console.log(carte)

  for (var i = 0; i < 24; i++) { // ciclo per creare i 24 div child    
    var boxCarta = document.createElement('div');
    console.log(boxCarta)

    var iconcina = document.createElement('div');
    iconcina.className = 'icon';
    console.log(iconcina)

    document.getElementById('griglia').appendChild(boxCarta).appendChild(iconcina);
    iconcina.innerHTML = arrayShuffle[i]; //aggiunge la class e l'elemento dell'array in base all'indice progressivo
    console.log(arrayShuffle[i])
  }

  startTimer(); // chiama la funzione timer

  var icon = document.getElementsByClassName("icon");
  var icons = [...icon];
  console.log(icon)
  console.log(icons)


  // associa a tutti gli elementi (div) di classe icon l'evento click e le due funzioni definite sotto
  for (var i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", displayIcon);
    icons[i].addEventListener("click", openModal);
  }
}

function displayIcon() {
  var icon = document.getElementsByClassName("icon");
  var icons = [...icon];

  this.classList.toggle("show"); //mette/toglie la classe show
  arrayComparison.push(this); //aggiunge l'oggetto su cui ha cliccato all'array del confronto

  var len = arrayComparison.length;

  //se nel confronto ci sono due elementi
  if (len === 2) {
    //se sono uguali aggiunge la classe find
    if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
      arrayComparison[0].classList.add("find", "disabled");
      arrayComparison[1].classList.add("find", "disabled");
      arrayComparison = [];
    } else {
      //altrimenti (ha sbagliato) aggiunge solo la classe disabled
      icons.forEach(function (item) {
        item.classList.add('disabled');
      });
      // con il timeout rimuove  la classe show per nasconderli
      setTimeout(function () {
        arrayComparison[0].classList.remove("show");
        arrayComparison[1].classList.remove("show");
        icons.forEach(function (item) {
          item.classList.remove('disabled');
          for (var i = 0; i < findIcons.length; i++) {
            findIcons[i].classList.add("disabled");
          }
        });
        arrayComparison = [];
      }, 700);
    }
  }
}


//una funzione che viene mostrata alla fine quando ci sono tutte le risposte esatte
var openModal = () =>{
  if (findIcons.length == 24) {
    clearInterval(interval);
    modal.classList.add("active");
    document.getElementById("tempoTrascorso").innerHTML = timer.innerHTML;
    closeModal();
  }
}

// una funzione che nasconde la modale alla fine e riavvia il gioco
var closeModal = () => modal.classList.remove("active");
startGame();



// una funzione che calcola il tempo e aggiorna il contenitore sotto
var ricomincia = () => modal.classList.remove("active");
startGame();