function calcola(){
    var volume,psp,peso;
    volume = document.getElementById("volume").value;
    var scelta=document.getElementById("materiali").selectedIndex;
    switch(scelta)
    {
    case 0:
        psp=7.8;
        break;
    case 1:
        psp=2.75;
        break;
    case 2:
        psp=8.7;
        break;
    case 3:
        psp=8.93;
        break;
    }
    peso=volume*psp;
    document.getElementById("peso").innerHTML="Peso:"+peso;
}