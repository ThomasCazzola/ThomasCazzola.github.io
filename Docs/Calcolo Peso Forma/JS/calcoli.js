function Risultati(){
    var altezza,eta,sesso;
    altezza=document.getElementById("Altezza").value;

    eta=document.getElementById("Eta'").value;

    sesso=document.getElementById("Sesso").value;

    var Lorenz, Broca, Vael, BMI;
    
    Lorenz=(altezza-100)-((altezza-150)/2);

    Broca=(altezza-104);

    Vael=((altezza-150)*0.75)+50;

    BMI="Non si può fare con i dati che lasciato";

    document.getElementById("ValoreLorenz").innerHTML=Lorenz + " kg";
    document.getElementById("ValoreBroca").innerHTML=Broca + " kg";
    document.getElementById("ValoreVael").innerHTML=Vael + " kg";
    document.getElementById("ValoreBMI").innerHTML=BMI + " kg";

}