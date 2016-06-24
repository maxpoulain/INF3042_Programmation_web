var scorejoueur1=0;
var scorejoueur2=0;
var ballex=370;
var balley=200;
var raq2=190;
var raq1=190;
var raquette1 = document.getElementById('raquette1');
console.log(raquette1);
raquette1.style.display="block";
raquette1.style.position="absolute";
raquette1.style.top="190px";
var raquette2 = document.getElementById('raquette2');
console.log(raquette2);
raquette2.style.display="block";
raquette2.style.position="absolute";
raquette2.style.top="190px";
var balle = document.getElementById('ball');
console.log(balle);
balle.style.display="block";
balle.style.position="absolute";
balle.style.left="370px";
balle.style.top="200px";


function deplacementhautdroite(ballex,balley)
{ 
	 tps=setInterval(function()
	{
		balle.style.top=balley+"px";
		balle.style.left=ballex+"px";
		ballex=ballex+1;
		balley=balley-1;

		if(balley<=0)
		{
			clearInterval(tps);
			deplacementbasdroite(ballex,balley);
		}
		if(ballex>=740)
		{	
			scorejoueur1++;
			if(scorejoueur1!=10)
			{
				document.getElementById('score').innerHTML = "Joueur Droit : "+scorejoueur1+"          "+"Joueur Gauche : "+scorejoueur2;
			}	
			if(scorejoueur1==10){
				document.getElementById('score').innerHTML = "Joueur Droit : "+scorejoueur1+"          "+"Joueur Gauche : "+scorejoueur2;
				alert("JOUEUR 1 a gagné");
				scorejoueur1=0;
				scorejoueur2=0;
				document.getElementById('score').innerHTML = "Joueur Droit : "+scorejoueur1+"          "+"Joueur Gauche : "+scorejoueur2;
			}else
			{
				clearInterval(tps);
				balley=200;
				ballex=370;
				deplacementhautdroite(ballex,balley);
			}
		}
		raquette2.style.top=raq2+"px";
		if(balley<raq2+45 && balley>raq2 && ballex>=720)
		{
			clearInterval(tps);
			deplacementhautgauche(ballex,balley);
		}
	},2);
}

function deplacementbasdroite(ballex,balley)
{ 
	tps=setInterval(function()
	{
		balle.style.top=balley+"px"
		balle.style.left=ballex+"px"
		ballex=ballex+1;
		balley=balley+1;

		if(ballex>=740)
		{
			scorejoueur1++;
			if(scorejoueur1!=10)
			{
				document.getElementById('score').innerHTML = "Joueur Droit : "+scorejoueur1+"          "+"Joueur Gauche : "+scorejoueur2;
			}else
			{
				clearInterval(tps);
				balley=200;
				ballex=370;
				deplacementhautdroite(ballex,balley);
			}	
			if(scorejoueur1==10){
				document.getElementById('score').innerHTML = "Joueur Droit : "+scorejoueur1+"          "+"Joueur Gauche : "+scorejoueur2;
				alert("JOUEUR 1 a gagné");
				scorejoueur1=0;
				scorejoueur2=0;
				document.getElementById('score').innerHTML = "Joueur Droit : "+scorejoueur1+"          "+"Joueur Gauche : "+scorejoueur2;
			}else
			{
				clearInterval(tps);
				balley=200;
				ballex=370;
				deplacementhautdroite(ballex,balley);
			}
		}
		if(balley>=390)
		{
			clearInterval(tps);
			deplacementhautdroite(ballex,balley);	
		}
		raquette2.style.top=raq2+"px";
		if(balley<raq2+45 && balley>raq2 && ballex>=720)
		{
			clearInterval(tps);
			deplacementbasgauche(ballex,balley);
		}

	},2);
}

function deplacementbasgauche(ballex,balley)
{ 
	tps=setInterval(function()
	{
		balle.style.top=balley+"px"
		balle.style.left=ballex+"px"
		ballex=ballex-1;
		balley=balley+1;
		if(balley>=390)
		{
			clearInterval(tps);
			deplacementhautgauche(ballex,balley);
		}
		if(ballex<=0)
		{
			scorejoueur2++;
			if(scorejoueur2!=10)
			{
				document.getElementById('score').innerHTML = "Joueur Droit : "+scorejoueur1+"          "+"Joueur Gauche : "+scorejoueur2;
			}else
			{
				clearInterval(tps);
				balley=200;
				ballex=370;
				deplacementhautdroite(ballex,balley);
			}		
			if(scorejoueur2==10){
				document.getElementById('score').innerHTML = "Joueur Droit : "+scorejoueur1+"          "+"Joueur Gauche : "+scorejoueur2;
				alert("JOUEUR 2 a gagné");
				scorejoueur1=0;
				scorejoueur2=0;
				document.getElementById('score').innerHTML = "Joueur Droit : "+scorejoueur1+"          "+"Joueur Gauche : "+scorejoueur2;
			}else
			{	
				clearInterval(tps);
				balley=200;
				ballex=370;
				deplacementhautgauche(ballex,balley);
			}	
		}
		raquette1.style.top=raq1+"px";
		if(balley<raq1+45 && balley>raq1 && ballex<=15)
		{
			clearInterval(tps);
			deplacementbasdroite(ballex,balley);
		}
	},2);
}

function deplacementhautgauche(ballex,balley)
{ 
	 tps=setInterval(function()
	{
		balle.style.top=balley+"px"
		balle.style.left=ballex+"px"
		ballex=ballex-1;
		balley=balley-1;
		console.log(ballex);
		if(balley<=0)
		{
			clearInterval(tps);
			deplacementbasgauche(ballex,balley);
		}
		if(ballex<=0){
			scorejoueur2++;
			if(scorejoueur2!=10)
			{
				document.getElementById('score').innerHTML = "Joueur Droit : "+scorejoueur1+"          "+"Joueur Gauche : "+scorejoueur2;
			}else
			{
				clearInterval(tps);
				balley=200;
				ballex=370;
				deplacementhautdroite(ballex,balley);
			}		
			if(scorejoueur2==10){
				document.getElementById('score').innerHTML = "Joueur Droit : "+scorejoueur1+"          "+"Joueur Gauche : "+scorejoueur2;
				alert("JOUEUR 2 a gagné");
				scorejoueur1=0;
				scorejoueur2=0;
				document.getElementById('score').innerHTML = "Joueur Droit : "+scorejoueur1+"          "+"Joueur Gauche : "+scorejoueur2;
			}else
			{	
				clearInterval(tps);
				balley=200;
				ballex=370;
				deplacementhautgauche(ballex,balley);
			}
		}
		raquette1.style.top=raq1+"px";
		if(balley<raq1+45 && balley>raq1 && ballex<=15)
		{
			clearInterval(tps);
			deplacementhautdroite(ballex,balley);
		}
	},2);
}

deplacementhautdroite(ballex,balley); 


document.onkeydown=function(event){
  console.log(event);
  if(event.keyIdentifier=="Up"){
    up();
  }else if(event.keyIdentifier=="Down"){
    down();
  }else if(event.keyIdentifier=="U+005A"){
     up2();
   }else if(event.keyIdentifier=="U+0051"){
    down2();
   }
}
function up(){
 raquette2.style.top=raq2+"px";
  raq2=raq2-20;
  if(raq2<0){
    raq2=0;
  }
}
function down(){
 raquette2.style.top=raq2+"px";
  raq2=raq2+20;
  if(raq2>355){
    raq2=360;
  }
}
function up2(){
 raquette1.style.top=raq1+"px";
  raq1=raq1-20;
  if(raq1<0){
    raq1=0;
  }
}
function down2(){
 raquette1.style.top=raq1+"px";
  raq1=raq1+20;
  if(raq1>355){
    raq1=360;
  }
}