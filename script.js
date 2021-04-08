var kmPercorsi = parseInt (prompt("Quanti km vuoi percorrere?"));
console.log(kmPercorsi + " " + "km");


var anni = parseInt ( prompt("Quanti anni hai?"));
console.log(anni + " " + "anni");

if (Number.isNaN(kmPercorsi) || Number.isNaN(anni)) {
    
    alert("non valido")
    document.getElementById('error').innerHTML = "errore inserimento dei dati";

}else {
    
}

        
if ( anni < 18){
    var prezzo = kmPercorsi * 0.21
    var prezzoFinale = prezzo * 0.80
    console.log("prezzo scontato under 18 =" + " " + prezzoFinale.toFixed( 2 ) + "€");
    document.getElementById('costo').innerHTML = "prezzo scontato under 18 =" + " " + prezzoFinale.toFixed( 2 ) + "€";
}

else if ( anni > 65){
    var prezzo = kmPercorsi * 0.21
    var prezzoFinale = prezzo * 0.60
    console.log("prezzo scontato over 65 =" + " " + prezzoFinale.toFixed( 2 ) + "€");
    document.getElementById('costo').innerHTML = "prezzo scontato over 65 =" + " " + prezzoFinale.toFixed( 2 ) + "€";
}

else {
    var prezzo = kmPercorsi * 0.21
    console.log(prezzo.toFixed( 2 ) + "€")
    document.getElementById('costo').innerHTML = prezzo.toFixed( 2 ) + " " + "€";
} 
