function domanda() {

    
    let risposta = prompt("Come è andata la visita?");
    switch(risposta) {
    case "bene":
        alert("Ottimo son contento, era una scusa per non lavorare?");
        break;
    case "male":
        alert("mi disp :(");
        break;
    case "insomma":
        alert("Come mai che succ?");
        break;
    default:
        alert("Era una scusa per non lavorare?");
        
    }
}