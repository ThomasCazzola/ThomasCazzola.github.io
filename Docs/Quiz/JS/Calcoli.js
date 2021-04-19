var risposte = new Array("SQL",2,"Statiche","void","byte");

function Calcola(){
    var prima, seconda, terza, quarta="", quinta;

    //Salvo la risposta scritta nella textbox
    prima=document.getElementById("primadomanda").value;

    //Prendo l'opzione scelta nella combobox
    seconda=document.getElementById("secondadomanda").value;

    //Vedo quale Radio è stato selezionato ed assegno la risposta
    if(document.getElementById("terzadomanda").checked==true)
        terza="Statiche";

    else if(document.getElementById("terzadomanda2").checked==true)
        terza="Dinamiche";


    //Vedo quali checkbox sono state selezionate e gli assegno un valore
    if(document.getElementById("quartadomanda1").checked==true)
        quarta+="void";
    
    if(document.getElementById("quartadomanda2").checked==true)
        quarta+="integer";
    
    if(document.getElementById("quartadomanda3").checked==true)
        quarta+="char";

    //Salvo la risposta scritta nella textbox
    quinta=document.getElementById("quintadomanda").checked==true;



    //CONTROLLO CHE LE RISPOSTE SIANO GIUSTE
    var punteggio=0;
    //CONTROLLO LA PRIMA
    if(prima=="SQL")
        punteggio++;
    if(seconda==2)
        punteggio++;
    if(terza=="Statiche")
        punteggio++;
    if(quarta=="void")
        punteggio++;
    if(quinta=="byte")
        punteggio++;
    
    document.getElementById("punteggio").innerHTML=punteggio;
}


function MettiInMaiuscolo(){
    var text = document.getElementById("primadomanda").textContent;
    var text2 = text.toUpperCase();
    document.getElementById("primadomanda").innerHTML=text2;
}

function CalcolaUtente(){
    var cognome=document.getElementById("cognome").value;
    var nome=document.getElementById("nome").value;
    var giorno=document.getElementById("giorno").value;
    var mese=document.getElementById("mese").value;
    var anno=document.getElementById("anno").value;

    var sottocognome = cognome.substr(0,2);
    var sottonome = nome.substr(0,2);
    var sottomese = mese.substr(0,2);
    var sottoanno = anno.substr(2,3);

    var totale=sottocognome+sottonome+sottomese+sottoanno;
    Calcola();
    var punteggio=document.getElementById("punteggio").textContent;
    document.getElementById("RisUtente").innerHTML=totale+(punteggio*10);
}
