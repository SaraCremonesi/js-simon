// Creo un ciclo while nel quale verifico che i numeri casuali generati non siano
// ripetuti uguali (tramite l'invocazione della funzione verificaPresenza) e li metto in un array
var arrayNumeriCasuali = [];
var numeroProibito = false;
var i = 0;
while (i < 5) {
  var randomInteger = Math.floor(Math.random() * 10 + 1);
  if (verificaPresenza(randomInteger, arrayNumeriCasuali) === true) {
    numeroProibito = true;
  } else {
    arrayNumeriCasuali.push(randomInteger);
    i++;
  }
};
  alert('I numeri da ricordare sono: ' + arrayNumeriCasuali);

// Setto la funzione di setTimeout per far apprire dopo 30 secondi dalla
// chiusura dell'alert i 5 prompt per l'iserimento dei numeri memorizzati
// (utilizzo una funzione anonima come primo argomento del setTimeout,
// ma avrei potuto anche creare una funzione a parte da invocare nell'argomento)
// poi sempre all'interno della funzione eseguo le operazioni di calcolo del punteggio,
// ovvero utilizzo la funzione .includes() in un ciclo if per controllare se
// il numero inserito sia esatto o sbagliato, se è esatto lo pusho in un array e
// il punteggio totalizzato sarà dato dalla lunghezza stessa dell'array
 setTimeout(function() {
   var arrayNumeriIndovinati = [];
     for (i = 0; i < 5; i++) {
       var numeroInserito = parseInt(prompt('Inserisci uno dei 5 numeri che ti ricordi'));
       if (arrayNumeriCasuali.includes(numeroInserito)) {
         arrayNumeriIndovinati.push(numeroInserito);
       }
     };
     console.log('Hai totalizzato ' + arrayNumeriIndovinati.length + ' punti su 5');
   },30000);


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
