// Creo un array per inserire i 5 numeri casuali
var arrayNumeriCasuali = [];

// Creo una variabile per il controllo delle indesiderate ripetizioni di numeri
var numeroProibito = false;

// Creo un ciclo while nel quale verifico che i numeri casuali generati non siano
// ripetuti uguali (tramite l'invocazione della funzione verificaPresenza) e li metto nel mio array
var i = 0;
while (i < 5) {
  var randomInteger = Math.floor(Math.random() * 10 + 1);
  if (verificaPresenza(randomInteger, arrayNumeriCasuali) === true) {
    numeroProibito = true;
  } else {
    arrayNumeriCasuali.push(randomInteger);
    i++
  }
};
  alert('I numeri da ricordare sono: ' + arrayNumeriCasuali);

 var time = setTimeout(timeOut,3000);

// ****************FUNZIONI****************
// Funzione per evitare le ripetizioni degli stessi numeri casuali
function verificaPresenza(numero, array) {
  var presenza = false;
  for (var i = 0; i < 5; i++) {
    if (numero === array[i]) {
      presenza = true;
    };
  };
  return presenza;
};

// Funzione per far partire i 30 secondi
function timeOut() {
    for (i = 0; i < 5; i++) {
      var numeroInserito = parseInt(prompt('Inserisci uno dei 5 numeri che ti ricordi'));
    }
  };
