var soglia = 0.1;
var flag1 = [];
var flag2 = [];
var flag3 = [];
var flag4 = [];
var tempoInSec = 0;
/*function resetAnimazioneNuvole(){
	console.log("dentro reset");
	for(var i = 0; i < flag1; i++){
		flag1[i] = false;
		flag2[i] = false;
		flag3[i] = false;
		flag4[i] = false;
	}

}*/
function animaNuvole(nuvole, destinazioni, ritorno){

	//console.log("pos partenza "+nuvole[0].position.x + " "+nuvole[0].position.z);
	//console.log("pos arrivo "+destinazioni[0].xPos + " "+destinazioni[0].zPos);
	if(!ritorno){
		console.log("dentro andata");
		for(var i = 0; i < nuvole.length; i++){
			muovi(nuvole[i], nuvole[i].position.x, nuvole[i].position.z, destinazioni[i].xPos,  destinazioni[i].zPos,i,
				flag1,flag2)
		}
	}else{
		console.log("dentro ritorno");
		for(var i = 0; i < nuvole.length; i++){
			muovi(nuvole[i], nuvole[i].position.x, nuvole[i].position.z, destinazioni[i].xPos,  destinazioni[i].zPos,i,
				flag3,flag4)
		}
	}


	/*if(!ritorno){
		for(var i = 0; i < nuvole.length; i++){
			
			if(destinazioni[i].xPos > nuvole[i].position.x){
				nuvole[i].position.x += 0.1;			
				flag1[i] = true;

			}else if(!flag1[i]){
				nuvole[i].position.x -= 0.1;
			}
			
			if(destinazioni[i].zPos > nuvole[i].position.z){
				nuvole[i].position.z += 0.1;
				flag2[i] = true;
			}else if(!flag2[i]){
				nuvole[i].position.z -= 0.1;

			}
		}		
	}else if(ritorno){
		for(var i = 0; i < nuvole.length; i++){
			//console.log("2- "+nuvole[i].position.x +" "+ nuvole[i].position.z);

			if(nuvole[i].position.x  > destinazioni[i].xPos ){
				//console.log("dentro 1");
				nuvole[i].position.x -= 0.1;			
				flag3[i] = true;

			}else if(!flag3[i]){
				//console.log("dentro 2");
				nuvole[i].position.x += 0.1;
			}
			console.log(nuvole[i].position +">"+ destinazioni[i].xPos);
			if(nuvole[i].position.z  > destinazioni[i].zPos){
				//console.log("dentro 3");
				nuvole[i].position.z -= 0.1;
				flag4[i] = true;
			}else if(!flag4[i]){
				nuvole[i].position.z += 0.1;

			}
		}		
	}*/

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
function aggiungiNeveAOggetto(el){
	var nuovoColore;
	incremento += 0.2; 

	for(var i = 0; i< el.length; i++){
		if(el[i].coloreL + incremento <= 100){
			nuovoColore = el[i].coloreL + incremento;

		}else{
			nuovoColore = 100;
			incremento = 0;
		}
		el[i].obj.material.color.set(creaHSLColor(el[i].coloreH,el[i].coloreS,nuovoColore));
	}		
}
function aggiungiNeveAFigli(nomeChild){
	incremento2 += 0.12; 
	scene.traverse(function(child) {	
		if (child.name === nomeChild) {
			child.material.color.set(creaHSLColor(119,36, 24 + incremento2));
		}

	});

}
function rimuoviNeveAOggetto(el){
	var nuovoColore;
	incremento -= 0.2; 

	for(var i = 0; i< el.length; i++){
			nuovoColore = (el[i].coloreL + incremento) > 0?el[i].coloreL + incremento:0;
			el[i].obj.material.color.set(creaHSLColor(el[i].coloreH,el[i].coloreS,nuovoColore));
	}		
}
function rimuoviNeveAFigli(nomeChild){
	incremento2 -= 0.12; 
	scene.traverse(function(child) {	
		if (child.name === nomeChild) {
			child.material.color.set(creaHSLColor(119,36, 24 + incremento2));
		}

	});

}