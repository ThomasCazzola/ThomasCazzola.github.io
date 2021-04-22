function LoadingSelect(){

    //Creo le opzioni per le checkbox

    //QUELLA PER IL SESSO
    var sesso=["Maschio", "Femmina", "Non Binario"];
    for(var i=0;i<sesso.length;i++)
    {
        var s=document.createElement("option");
        s.value=sesso[i];
        s.innerHTML=sesso[i];
        document.getElementById("Sesso").appendChild(s);
    }


    //QUELLA PER GLI OCCHI
    var occhi=["Blu", "Verdi", "Castani","Grigi", "Neri", "Gialli"];
    for(var i=0;i<occhi.length;i++)
    {
        var s=document.createElement("option");
        s.value=occhi[i];
        s.innerHTML=occhi[i];
        document.getElementById("Occhi").appendChild(s);
    }


    //QUELLA PER LE PROVINCIE
    var provincie=["BG", "BS", "CO", "CR", "LC", "LO", "MN", "MI", "MB", "PV", "SO", "VA"];
    for(var i=0;i<provincie.length;i++)
    {
        var s=document.createElement("option");
        s.value=provincie[i];
        s.innerHTML=provincie[i];
        document.getElementById("Provincia").appendChild(s);
    }
}

function Animazione(){
    var ris="Benvenuto";
    var cognome=document.getElementById("Cognome").value;
    if(document.getElementById("Sesso").value=="Maschio")
        ris+=" sig.";
    if(document.getElementById("Sesso").value=="Femmina")
        ris+=" sig.ra ";
    if(document.getElementById("Sesso").value=="Non Binario")
        ris+="";
    
    ris+=cognome+"\n";
    ris+="Siamo felici di averla con noi.\n";
    ris+="Cercheremo di fare il meglio!";

    document.getElementById("End").innerHTML=ris;
}