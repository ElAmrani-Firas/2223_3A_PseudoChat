/*
    TESTO DELLA VERIFICA DI TPSIT
    Viene richiesto di modificare i file html e js in modo tale da:

    - visualizzare DINAMICAMENTE gli utenti nell'aside (barra laterale sinistra) 
        # ogni utente è un nuovo LI
        # ogni utente in base al genere dovrà essere raffigurato tramite l'icona corretta
        # sotto l'icona dovrà essere rafficurato il nome con l'iniziale maiuscola del nome e l'iniziale maiuscola del cognome
        # il cognome dovrà essere troncato e seguito da . (come si vede nel file originale)

    - aggiornare automaticamente l'header della sezione nel momento in cui clicco su un utente dell'aside
        # modificare l'icona
        # modificare il nome e cognome
        # aggiornare l'ora a proprio piacimento (PER IL MASSIMO DEL PUNTEGGIO: creare un array parallelo con le ore)
    
    - aggiungere DINAMICAMENTE I MESSAGGI
        #Non importa se si utilizza ut1 per l'utente 0 o ut2, l'importante è la coerenza

    - PER IL 10. Gestite il bottone di invio in basso 
        #se il campo di testo non è vuoto aggiungere il messaggio in coda agli altri del personaggio selezionato

*/
function init(){
    let utenti = ``;

    let lista = document.getElementById("listUtenti");
    for(let i = 1; i<nomeUtenti.length; i++){
        if(genereUt[i] == "m")
        utenti += creautm(nomeUtenti[i], cognomeUtenti[i], i);
        else
        utenti += creautf(nomeUtenti[i], cognomeUtenti[i], i);
    }

    lista.innerHTML = utenti;
}
function creautm(nome, cognome, i){
    return`
    <li onclick = "chat0(${i})">
       <div class="material-symbols-outlined icone">
            face
       </div>
        ${nome + " " + cognome[0] + "."}
    </li>     
    `
}
function creautf(nome, cognome, i){
    return`
    <li onclick = "chat0(${i})">
        <div class="material-symbols-outlined icone">
            face_3
        </div>
        ${nome + " " + cognome[0] + "."}
    </li>     
    `
}
function chat0(i){
    let sec = document.getElementById("header");
    

    let utenti2 = ``;

        if(genereUt[i] == "m")
        utenti2 += chatm(nomeUtenti[i], cognomeUtenti[i], ora[i]);
        else
        utenti2 += chatf(nomeUtenti[i], cognomeUtenti[i], ora[i]);

    sec.innerHTML = utenti2;

}
function chatm(nome, cognome, ore){
    return`
    <div class="material-symbols-outlined icone">
        face
    </div>
    <div>
        <div id="divNome">${nome + " " + cognome}</div>
        <div id="divUltimoMes">${ore}</div>
    </div>   
    `
}
function chatf(nome, cognome, ore){
    return`
    <div class="material-symbols-outlined icone">
        face_3
    </div>
    <div>
        <div id="divNome">${nome + " " + cognome}</div>
        <div id="divUltimoMes">${ore}</div>
    </div>   
    `
}
function sezione(){
    let chat = document.getElementById("sec");

    let messaggi = ``;

    for(let i in mittenti){
        if(mittenti[i] == 1){
            messaggi += messaggio(i);
        }
        else{
            messaggi += messaggio2(i);
        }
    }
    chat.innerHTML = messaggi;
}
function messaggio(i){
    return`   
    <article class="mes ut1">${messaggio[i]}</article>   
    `
}
function messaggio2(i){
    return`   
    <article class="mes ut2">${messaggio[i]}</article>   
    `
}