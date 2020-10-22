import {OrbitControls} from 'https://unpkg.com/three@0.121.1/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://unpkg.com/three@0.121.1/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'https://unpkg.com/three@0.121.1/build/three.module.js';


let conta= document.querySelector("#cont");

let scene = new THREE.Scene();
let camera= new THREE.PerspectiveCamera(80,conta.clientWidth/conta.clientHeight,0.1,1000);

let caster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

let light = new THREE.AmbientLight(0xffffff,10);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(conta.clientWidth,conta.clientHeight);
scene.background= new THREE.Color("beige");
conta.appendChild(renderer.domElement);

let control = new OrbitControls(camera,renderer.domElement);

camera.position.z = -5;

let cube = new THREE.Mesh(new THREE.BoxGeometry(),new THREE.MeshBasicMaterial({color:0x00ff00}));
scene.add(cube);


function animate(){

    requestAnimationFrame(animate);
    control.update();

    caster.setFromCamera(mouse,camera);

    let intersects = caster.intersectObjects(scene.children,true);

if(intersects.length > 0){
    console.log("a");
}
	
    
    renderer.render(scene,camera);
}

animate();


window.addEventListener("resize",()=>{

    camera.aspect = conta.clientWidth/conta.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(conta.clientWidth,conta.clientHeight);
   
},false);


function mouseEvent(event){
    mouse.x = (event.clientX/conta.clientWidth)*2-1;
    mouse.y = (event.clienty/conta.clientHeight)*2+1;
   
}

conta.addEventListener("click",mouseEvent);