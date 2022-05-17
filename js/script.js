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

function slide(color){    // Work in progress
    document.getElementById('btn_slide').backgroud = color;
    
}
function arrow() {
    
}