import {OrbitControls} from 'https://unpkg.com/three@0.121.1/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'https://unpkg.com/three@0.121.1/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'https://unpkg.com/three@0.121.1/build/three.module.js';


let conta= document.querySelector("#cont");
let scene = new THREE.Scene();
let camera= new THREE.PerspectiveCamera(80,conta.clientWidth/conta.clientHeight,0.1,1000);

let light = new THREE.AmbientLight(0xffffff,10);

let manager = new THREE.LoadingManager();

manager.onStart =()=>{
    console.log("Building started");
}


let loader = new GLTFLoader(manager);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(conta.clientWidth,conta.clientHeight);
scene.background= new THREE.Color("0xffff00");
conta.appendChild(renderer.domElement);

let control = new OrbitControls(camera,renderer.domElement);

scene.add(light);

var shoes;
        loader.load("../scene.gltf",(gltf)=>{
    
            //gltf.scene.children[0].rotation.x=180;
            shoes = gltf.scene.children[0];
            scene.add(gltf.scene);	
            
        });
  

manager.onLoad =()=>{   
console.log("Building ready");        

shoes.traverse((sho)=>{

    if(sho.isMesh)
    sho.material.color.setRGB(0,255,0); // Changing color of shoes
});
};

camera.position.z =300;  //Postion of VIEW
camera.position.y =100;  //Position of VIEW
camera.position.x=-300;


function animate(){
    requestAnimationFrame(animate);
    control.update();
      /* scene.traverse((val) =>{
           

            val.childrenscale.set(0.1,0.1,0.1);
            val.rotation.y +=1;
            val.rotation.z +=1;
            
           
       });*/
  
    renderer.render(scene,camera);
}

animate();


window.addEventListener("resize",()=>{

    camera.aspect = conta.clientWidth/conta.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(conta.clientWidth,conta.clientHeight);
   
},false);
