import '../style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"

import {GUI} from "dat.gui"

const gui = new GUI();
GUI.toggleHide();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, .1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#anim'),
  antialias: true,
  alpha: true,
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);


const options = {
  transmission: .72,
  thickness: 1,
  roughness: 0,
  reflectivity: 0,
  color: 0x0000ff,
  flatShading: true,
  opacity: 0,
};
const material = new THREE.MeshPhysicalMaterial({
  transmission: options.transmission,
  thickness: options.thickness,
  roughness: options.roughness,
  reflectivity: options.reflectivity,
  color: options.color,
  flatShading: options.flatShading,
  opacity: options.opacity,
});
const loader = new GLTFLoader().setPath( './assets/' );
let logo;
loader.load( 'logo.glb', function ( gltf ) {
  logo = gltf.scene;
  let child = logo.children[ 0 ]
  logo.rotation.x = Math.PI / 2;
  logo.scale.set(.2,.2,.2)

  logo.traverse( (child) => {
    if ( child instanceof THREE.Mesh ) {
      child.material = material.clone();
      if ( child.name == "imagetostl_mesh_1"){
        child.material.color.set( 0xF58A78); 
      }
      if ( child.name == "imagetostl_mesh_2"){
        child.material.color.set( 0x7047F5);
      }
      if ( child.name == "imagetostl_mesh_3"){
        child.material.color.set( 0x825FF5); 
      }
      if ( child.name == "imagetostl_mesh_4"){
        child.material.color.set( 0x9477F5); 
      }
      console.log(child.material)
      child.castShadow = true;
      child.receiveShadow = true;

    }
})
  scene.add(logo)
});

for(let i=0; i<10; i++){
  let pointLight = new THREE.PointLight(0xffffff);
  let x = Math.random()*(10+10) + -10
  let y = Math.random()*(10+10) + -10
  let z = Math.random()*(10+10) + -10
  const lightHelper = new THREE.PointLightHelper(pointLight);
  
  pointLight.position.set(x,y,z)
  //scene.add(pointLight, lightHelper);
  scene.add(pointLight);
}

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);


//const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(gridHelper);


var controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false

gui.add(options, "transmission", 0, 1, 0.01).onChange((val) => {
  logo.traverse( (child) => {
    if ( child instanceof THREE.Mesh ) {
      child.material.transmission = val;      
    }
  })
});
gui.add(options, "thickness", 0, 1, 0.01).onChange((val) => {
  logo.traverse( (child) => {
    if ( child instanceof THREE.Mesh ) {
      child.material.thickness = val;      
    }
  })

});
gui.add(options, "roughness", 0, 1, 0.01).onChange((val) => {
  logo.traverse( (child) => {
    if ( child instanceof THREE.Mesh ) {
      child.material.roughness = val;      
    }
  })
});
gui.add(options, "reflectivity", 0, 1, 0.01).onChange((val) => {
  logo.traverse( (child) => {
    if ( child instanceof THREE.Mesh ) {
      child.material.reflectivity = val;      
    }
  })
});
gui.add(options, "opacity", 0, 1, 0.01).onChange((val) => {
  logo.traverse( (child) => {
    if ( child instanceof THREE.Mesh ) {
      child.material.opacity = val;      
    }
  })
});
gui.close()
GUI.toggleHide();


let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;

const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;
document.addEventListener('mousemove', onDocumentMouseMove)
function onDocumentMouseMove(event) {
  mouseX = (event.clientX - windowHalfX)
  mouseY = (event.clientY - windowHalfY)
}



const clock = new THREE.Clock()
function animate() {
  //https://stackoverflow.com/questions/59744058/add-max-movement-to-onmousemove-for-scene-in-three-js
  targetX = mouseX * .001;
  targetY = mouseY * .001;
  

  const elapsedTime = clock.getElapsedTime();

  requestAnimationFrame(animate);


  if (logo){
    logo.rotation.x = 0.1 * Math.cos(elapsedTime) + 1.5 *  Math.PI / 2;
    logo.rotation.y = 0.1 * Math.sin(elapsedTime);
    logo.rotation.y += 0.5 * (targetX - logo.rotation.y);
    logo.rotation.x += 0.5 * (targetY - logo.rotation.x);
  }



  controls.update();

  renderer.render(scene, camera);
}

animate();

