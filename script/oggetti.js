var texturePonte = new THREE.TextureLoader().load( "textures/wood.jpg" );
var textureCasa = new THREE.TextureLoader().load( "textures/house.jpg" );
var texturePorta = new THREE.TextureLoader().load( "textures/door.png" );
var textureTetto = new THREE.TextureLoader().load( "textures/roof.jpg" );
var textureNuvola = new THREE.TextureLoader().load( "textures/cloud.jpg" );


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function  creaHSLColor(h, s, v){
	return "hsl(" + h + ", " + s+"%, " + Math.trunc(v * 2) + "%)";
}
function creaPino(posX, posY, posZ){
	var pino = new THREE.Object3D();
	var foglie = new THREE.Object3D();
	

	//tronco
	var w = 1;
	var h = 8;
	var d = 1;
	var geometriaTronco = new THREE.BoxGeometry(w,h,d);
    var materialTronco = new THREE.MeshBasicMaterial({color: creaHSLColor(40,26,33)});
    var meshTronco = new THREE.Mesh(geometriaTronco, materialTronco);
    pino.add(meshTronco);
    //foglie

	for(var i=0; i < 5; i++){
		var decremento = 2;
		var geometriaFoglie = new THREE.BoxGeometry((w *3) - (i/decremento), 2 ,(d *3)- (i/decremento));
	    var materialFoglie = new THREE.MeshBasicMaterial({color: creaHSLColor(119,36, 24)});
	    var meshFoglie = new THREE.Mesh(geometriaFoglie, materialFoglie);	
	    meshFoglie.name = "foglie";	
	    meshFoglie.position.y += i; 
	    pino.add(meshFoglie);
	}	
    pino.position.set(posX,posY,posZ);
    return pino;
}

function creaPonte(posX, posY, posZ){
	var ponte = new THREE.Object3D();
	var pavimento = new THREE.Object3D();

	//pavimento
	var w = 3;
	var h = 1;
	var d = 3;
	var yPrec;
	for(var i = 0; i < 7; i++){
			var geometriaPavimento = new THREE.BoxGeometry(w,h,d);
			var materialPavimento = new THREE.MeshPhongMaterial({ map: texturePonte });
			var meshPavimento = new THREE.Mesh(geometriaPavimento,materialPavimento);	
		if( i <= 3){
			meshPavimento.position.y += i/2;
			meshPavimento.position.z += i*1.5;
			yPrec = meshPavimento.position.y;
			
		}else{
			meshPavimento.position.y = yPrec - 0.5; 
			meshPavimento.position.z += i*1.5;
			yPrec = meshPavimento.position.y;
		}
		pavimento.add(meshPavimento);
	}
	
	ponte.add(pavimento);
	ponte.position.set(posX, posY, posZ);
	return ponte;
}
function creaCasa(posX, posY, posZ){
	var casa = new THREE.Object3D();
	var muri = new THREE.Object3D();
	var porta = new THREE.Object3D();
	var tetto = new THREE.Object3D();
	var w = 1;
	var h = 4;
	var d = 7;

	//muri
	muri.add(creaParete(1,4,7, 0, 0, 0, 0, 0, textureCasa));
	//facciata con la porta
	muri.add(creaParete(1,4,2.5, 0, 90, 0.5, 0, 4, textureCasa));
	muri.add(creaParete(1,4,2.5, 0, 90, 6.5, 0, 4, textureCasa));

	muri.add(creaParete(1,4,7, 0, 0, 7, 0, 0, textureCasa));
	muri.add(creaParete(1,4,8, 0, 90, 3.5, 0, -4, textureCasa));

	//porta
	var geometriaPorta = new THREE.BoxGeometry(w,h,d/2);
	var materialPorta = new THREE.MeshPhongMaterial({ map: texturePorta });
	var meshPorta = new THREE.Mesh(geometriaPorta,materialPorta);
	meshPorta.rotation.y += 90 * Math.PI/180;
	meshPorta.position.x += 3.5;
	meshPorta.position.z += 4; 
	porta.add(meshPorta);

	//tetto
	for(var i = 4; i > 0; i--){
		var geometriaTetto = new THREE.BoxGeometry(9,0.5,9);
		var materialTetto = new THREE.MeshPhongMaterial({ map: textureTetto });
		var meshTetto = new THREE.Mesh(geometriaTetto,materialTetto);	
		meshTetto.scale.set(i / 4, 1,i / 4);
		meshTetto.position.y -= i/2; 
		tetto.add(meshTetto);
	}
	tetto.position.x += 3.5; 
	tetto.position.y += 4.2; 

	casa.add(muri);
	casa.add(porta);
	casa.add(tetto);
	casa.position.set(posX, posY, posZ);
	return casa;
}

function creaParete(w, h, d, rotationZ, rotationY, traslationX, traslationY, traslationZ, texture){

	var geometria = new THREE.BoxGeometry(w,h,d);
	var material = new THREE.MeshPhongMaterial({ map: texture });
	var mesh = new THREE.Mesh(geometria,material);
	mesh.rotation.z += rotationZ * Math.PI/180;
	mesh.rotation.y += rotationY * Math.PI/180;
	mesh.position.x += traslationX;
	mesh.position.y += traslationY;
	mesh.position.z += traslationZ; 
	return mesh;
}

function creaNuvola(posX, posY, posZ){
	var nuvola = new THREE.Object3D();

	for(var i = 0; i < getRandomInt(7,15); i++){
		var w = getRandomInt(2,8);
		var h = 2;
		var d = getRandomInt(1,8);
		var translationY = getRandomInt(2,6);
		var translationZ = getRandomInt(1,2);

		var geometria = new THREE.BoxGeometry(w,h,d);
		var material = new THREE.MeshPhongMaterial({ map: textureNuvola });
		var mesh = new THREE.Mesh(geometria,material);
		mesh.position.y += translationY;
		mesh.position.z += translationZ;
		mesh.position.x += i;
		nuvola.add(mesh);
	}
	nuvola.position.set(posX, posY, posZ);
	return nuvola;

}
function creaFioccoDiNeve(posX, posY, posZ){
	var fioccoDiNeve = new THREE.Object3D();
	var l = 0.2;
	var geometria = new THREE.BoxGeometry(l,l,l);
	var material = new THREE.MeshBasicMaterial({ color: creaHSLColor(174, 52, 79) });
	var mesh = new THREE.Mesh(geometria,material);

	fioccoDiNeve.add(mesh);
	fioccoDiNeve.position.set(posX, posY, posZ);
	return fioccoDiNeve;
}
function hslToHex(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = x => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}