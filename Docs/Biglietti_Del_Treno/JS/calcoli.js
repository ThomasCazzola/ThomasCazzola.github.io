function calcola(){
    var prezzo,classe,persone,chilometri;
    chilometri=document.getElementById("km").value;

    persone=document.getElementById("persone").selectedIndex;

    if(document.getElementById("primaclasse").checked==true)
    {
        classe=0.43;
    }
    else if(document.getElementById("secondaclasse").checked==true)
    {
        classe=0.25;
    }
    prezzo=(chilometri*classe)*(persone+1)
    document.getElementById("risultato").innerHTML=prezzo+" euro";
}