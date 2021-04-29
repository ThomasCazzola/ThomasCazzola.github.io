function creaFigura()	

	{

	

	var mioCanvas = document.getElementById("canvas1");
    var ctx= mioCanvas.getContext("2d");

    DisegnaBlu(ctx);
    DisegnaNero(ctx);
    DisegnaRosso(ctx);
    DisegnaGiallo(ctx);
    DisegnaVerde(ctx);

	

	

	

	

	

	

	

	}

    function DisegnaBlu(ctx){
        ctx.beginPath();

	    ctx.arc(150,150,75,0,2*Math.PI,true);

	    ctx.lineWidth=3;

	    ctx.strokeStyle= "rgba(0,0,255,1)"; //blu

	    ctx.stroke();

	    ctx.closePath();
    }

    function DisegnaNero(ctx){
        ctx.beginPath();

	    ctx.arc(310,150,75,0,2*Math.PI,true);

	    ctx.lineWidth=3;

	    ctx.strokeStyle= "rgba(0,0,0,1)"; //nero

	    ctx.stroke();

	    ctx.closePath();
    }

    function DisegnaRosso(ctx){
        ctx.beginPath();

	    ctx.arc(470,150,75,0,2*Math.PI,true);

	    ctx.lineWidth=3;

	    ctx.strokeStyle= "rgba(255,0,0,1)"; //rosso

	    ctx.stroke();

	    ctx.closePath();
    }

    function DisegnaGiallo(ctx){
        ctx.beginPath();

	    ctx.arc(228,225,75,0,2*Math.PI,true);

	    ctx.lineWidth=3;

	    ctx.strokeStyle= "rgba(255,255,0,1)"; //giallo

	    ctx.stroke();

	    ctx.closePath();
    }

    function DisegnaVerde(ctx){
        ctx.beginPath();

	    ctx.arc(385,225,75,0,2*Math.PI,true);

	    ctx.lineWidth=3;

	    ctx.strokeStyle= "rgba(53,104,45,1)"; //verde

	    ctx.stroke();

	    ctx.closePath();
    }