/**
 * 
 */
var gl;
var canvas;
var shaderProgram;

function createGLContext(canvas){
	var names = ["webgl", "experimental-webgl"]
	var context = null;
	for(var i=0; i<names.length; i++){
		try{
			context = canvas.getContext(names[i]);
		} catch(e){
			if(context){
				break;
			}
		}
		if(context){
			context.viewportWidth = canvas.width;
			context.viewportHeight = canvas.height;
		} else{
			alert("Failed to create WebGLcontext");
		}
		return context;
	}
}


let camera = null;




function draw(){

	gl.clear(gl.COLOR_BUFFER_BIT);
	
	camera.initialMatrix();
	dao_mdl.initialBuffer();

//	camera.setView();
	camera.lookAtView();
	dao_mdl.mdlDraw();

}



function startup(){
	canvas = document.getElementById("myGLCanvas");
	gl = createGLContext(canvas);
	setupShaders();
	gl.clearColor(0.8, 0.8, 0.9, 1.0);
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
//	gl.frontFace(gl.CW);
	gl.enable(gl.CULL_FACE);
	gl.enable(gl.DEPTH_TEST);


	camera = new Camera();

	dao_mdl = new Dao();
	dao_mdl.setUpBuffer();
	
	canvas.addEventListener("mousedown", function(mouse){
		mDown(mouse)}, false);
	
	canvas.addEventListener("mousemove", function(mouse){
		mMove(mouse), false});
	
	canvas.addEventListener("mouseup", function(mouse){
		mUp(mouse), false});
		
	canvas.addEventListener("wheel", function(mouse){
		mScroll(mouse), false});
	

	draw();

}