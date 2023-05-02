/**
 * 
 */


let mouseX = 0;
let mouseY = 0;
let drag = false;

function mDown(mouse){
	
	mouseX = mouse.offsetX;
	mouseY = mouse.offsetY;
	drag = true;
	
}

function mMove(mouse){
	
	if(!drag){
		return;
	}
	
	let curX = mouse.offsetX;
	let curY = mouse.offsetY;
	
	cameraMove(mouseX, mouseY, curX, curY);
	
	mouseX = curX;
	mouseY = curY;
	
}

function mUp(mouse){
	drag = false;
}


function cameraMove(mouseX, mouseY, curX, curY){
	let diffX = curX - mouseX;
	let diffY = curY - mouseY;
	
	dao_mdl.rotate[1] = dao_mdl.rotate[1] + diffX;
	dao_mdl.rotate[0] = dao_mdl.rotate[0] + diffY;


/*
	camera.rotate[0] = camera.rotate[0] - diffY;
	camera.translate[1] = -300 * Math.sin(degToRad(camera.rotate[0]));
	camera.translate[2] = 300 * Math.cos(degToRad(camera.rotate[0]));

*/
	draw();
}

function mScroll(mouse){
	
	let delta = -mouse.deltaY/2000;
	let cur_scale = dao_mdl.scale[0];
	
	if(cur_scale + delta > 0 && cur_scale + delta < 4.125){
		dao_mdl.scale[0] += delta;
		dao_mdl.scale[1] += delta;
		dao_mdl.scale[2] += delta;
		draw();
	}
	
}



function RotateX(){
//	yAngle = document.getElementById('b');
	xa.value = parseInt(xb.value);


	dao_mdl.rotate[0] = parseInt(xa.value);
	
	draw();
}


function RotateY(){
//	yAngle = document.getElementById('b');
	ya.value = parseInt(yb.value);
/*
	camera.rotate[1] = parseInt(yb.value);
	camera.translate[0] = 300 * Math.sin(degToRad(camera.rotate[1]));
	camera.translate[2] = 300 * Math.cos(degToRad(camera.rotate[1]));
	*/
	dao_mdl.rotate[1] = parseInt(ya.value);

/*	
	camera.position.x =  -300 * Math.sin(parseInt(yb.value)/50);
	camera.position.z =  300 * Math.cos(parseInt(yb.value)/50);
*/
	
	
	draw();
}