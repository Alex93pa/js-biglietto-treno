var kmPercorsi = parseInt (prompt("Quanti km vuoi percorrere?"));
console.log(kmPercorsi + " " + "km");

var anni = parseInt ( prompt("Quanti anni hai?"));
console.log(anni + " " + "anni");

// var prezzo = kmPercorsi * 0.21
// console.log(prezzo + "€")

if ( anni < 18){
    var prezzo = kmPercorsi * 0.21
    var prezzoFinale = prezzo * 0.80
    console.log("prezzo scontato under 18 =" + " " + prezzoFinale.toFixed( 2 ) + "€");
    document.getElementById('costo').innerHTML = "prezzo scontato under 18 =" + " " + prezzoFinale.toFixed( 2 ) + "€";
}

if (anni > 18){
    var prezzo = kmPercorsi * 0.21
    console.log(prezzo.toFixed( 2 ) + "€")
    document.getElementById('costo').innerHTML = prezzo.toFixed( 2 ) + " " + "€";
}


if ( anni > 65){
    var prezzo = kmPercorsi * 0.21
    var prezzoFinale = prezzo * 0.60
    console.log("prezzo scontato over 65 =" + " " + prezzoFinale.toFixed( 2 ) + "€");
    document.getElementById('costo').innerHTML = "prezzo scontato over 65 =" + " " + prezzoFinale.toFixed( 2 ) + "€";
}