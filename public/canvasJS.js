import * as THREE from "/three/build/three.module.js";

let conta = document.getElementById("conta");

let scene = new THREE.Scene();
scene.background= new THREE.Color("pink");
let camera = new THREE.PerspectiveCamera(75,conta.clientWidth/conta.clientHeight,0.1,1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(conta.clientWidth,conta.clientHeight);
conta.appendChild(renderer.domElement);

let vector = new THREE.Vector2();
let light = new THREE.AmbientLight(0xffffff,100);
scene.add(light);

let material = new THREE.MeshBasicMaterial();
let cube = new THREE.Mesh(new THREE.BoxGeometry(),material);
scene.add(cube);



let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


ctx.fillStyle ="#FFFFFF";
ctx.fillRect( 0, 0, 300 ,300 );

material.map =new THREE.CanvasTexture(canvas);

let paint = false;

				// add canvas event listeners
				canvas.addEventListener( 'pointerdown', function ( e ) {

					paint = true;
					vector.set( e.offsetX, e.offsetY );

				} );

				canvas.addEventListener( 'pointermove', function ( e ) {

					if ( paint ) draw( ctx, e.offsetX, e.offsetY );

				} );

				canvas.addEventListener( 'pointerup', function () {

					paint = false;

				} );

				canvas.addEventListener( 'pointerleave', function () {

					paint = false;

				} );

			

			function draw( ctx, x, y ) {

				ctx.moveTo( vector.x, vector.y );
				ctx.strokeStyle = '#000000';
				ctx.lineTo( x, y );
				ctx.stroke();
				// reset drawing start position to current position.
				vector.set( x, y );
				// need to flag the map as needing updating.
				material.map.needsUpdate = true;

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}



camera.position.z = 5;

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01 ;
    cube.rotation.y += 0.01 ;
    renderer.render(scene,camera);
}
animate();

window.addEventListener("resize",()=>{

    camera.aspect = conta.clientWidth/conta.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(conta.clientWidth,conta.clientHeight);
    composer.setSize(conta.clientWidth,conta.clientHeight);
   
},false);

