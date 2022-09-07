import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"

import {GUI} from "dat.gui"

const gui = new GUI();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, .1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#anim'),
  antialias: true
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);


const options = {
  transmission: .7,
  thickness: .5,
  roughness: .14,
  reflectivity: .3,
  color: 0x0000ff,
  flatShading: true,
  opacity: .7,
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
      child.material = material
      console.log(child.material)
      child.castShadow = true;
      child.receiveShadow = true
    }}
  )



  scene.add(logo)
});



const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5)
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);


const controls = new OrbitControls(camera, renderer.domElement);

gui.add(options, "transmission", 0, 1, 0.01).onChange((val) => {
  material.transmission = val;
});



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