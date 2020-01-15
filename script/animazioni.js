var soglia = 0.1;
var flag1 = [];
var flag2 = [];
var flag3 = [];
var flag4 = [];
var tempoInSec = 0;

function animaNuvole(nuvole, destinazioni, ritorno){


	if(!ritorno){
		for(var i = 0; i < nuvole.length; i++){
			muovi(nuvole[i], nuvole[i].position.x, nuvole[i].position.z, destinazioni[i].xPos,  destinazioni[i].zPos,i,
				flag1,flag2)
		}
	}else{
		for(var i = 0; i < nuvole.length; i++){
			muovi(nuvole[i], nuvole[i].position.x, nuvole[i].position.z, destinazioni[i].xPos,  destinazioni[i].zPos,i,
				flag3,flag4)
		}
	}

}
function muovi(el, xIniziale, zIniziale, xFinale, zFinale, i, f1, f2){
	if(xFinale > xIniziale ){
		el.position.x += 0.1;			
		f1[i] = true;

	}else if(xFinale + 0.5 <= xIniziale){
		el.position.x -= 0.1;
	}
			
	if(zFinale > zIniziale || zIniziale + 0.5 < zFinale){
		el.position.z += 0.1;
		f2[i] = true;
	}else if(zFinale + 0.5 <= zIniziale){
		el.position.z -= 0.1;

	}
}
function animaNeve(f){
	for(var i = 0; i< f.length; i++){
		if(f[i].position.y < 1){
			f[i].position.y = 20;
		}else{
			var velocita = getRandomInt(1, 15) * 0.1;
			f[i].position.y -= velocita;
		}
	}

}
function rimuoviFiocchiDiNeve(f){
	for(var i = 0; i< f.length; i++){
		 scene.remove( f[i] );
	}

}
var incremento = 0;
var incremento2 = 0;
var incremento3 = 0;
var valoreMaxFoglie = 35;
var valoreMinFoglie = 24;

function aggiungiNeveAOggetto(el){
	var nuovoColore;
	incremento += 0.2; 

	for(var i = 0; i< el.length; i++){

		if(el[i].coloreL + incremento <= el[i].coloreLMax){
			nuovoColore = el[i].coloreL + incremento;

		}else{
			nuovoColore = el[i].coloreLMax;
			incremento = 0;
		}
		el[i].obj.material.color.set(creaHSLColor(el[i].coloreH,el[i].coloreS,nuovoColore));
	}		
}
function aggiungiNeveAFigli(nomeChild){

	incremento2 += 0.2; 
	scene.traverse(function(child) {	
		if (child.name === nomeChild) {

			if(valoreMinFoglie + incremento < valoreMaxFoglie){
				child.material.color.set(creaHSLColor(119,36, valoreMinFoglie + incremento2));
			}else{
				incremento2 = 0;
			}
			
		}

	});

}
function rimuoviNeveAOggetto(el){
	var nuovoColore;
	incremento -= 0.2; 

	for(var i = 0; i< el.length; i++){
		coloreIniziale = el[i].coloreL;
		if(el[i].coloreL + incremento >= el[i].coloreLMin){
			nuovoColore = el[i].coloreL + incremento;

		}else{
			nuovoColore = el[i].coloreLMin;
			incremento = 0;
		}
		el[i].obj.material.color.set(creaHSLColor(el[i].coloreH,el[i].coloreS,nuovoColore));	
	}
}
function rimuoviNeveAFigli(nomeChild){
	incremento3 += 0.2; 	
	scene.traverse(function(child) {	
		if (child.name === nomeChild) {

			if(valoreMaxFoglie - incremento3 > valoreMinFoglie){
				child.material.color.set(creaHSLColor(119,36, valoreMaxFoglie - incremento3));
			}else{
				incremento2 = 0;
			}
			
			
		}

	});
}