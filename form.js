const form = document.getElementById("frm");
form.addEventListener("submit", funzione)

function funzione() {

    let nome = document.getElementById("Nome");
    let cognome = document.getElementById("Cognome");
    let citta = document.getElementById("Citta");
    let indirizzo = document.getElementById("Indirizzo");
    let Cap = document.getElementById("CAP");

    let stringa = `Grazie ${nome.value} per averci scelto. L'ordine verra' consegnato in ${indirizzo.value}`;

    event.preventDefault();
    
    document.getElementById("demo").innerHTML = stringa;

}
