import './style.css';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * 1. RENDERER
 * Create a <canvas> and set it on body
 * antialias: soft borders
 */
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
//Add canvas to HTML
document.body.appendChild(renderer.domElement);

/**
 * 2. SCENE
 * Scene contain objects, lights, ... everything
 */
const scene = new THREE.Scene();
scene.background = new THREE.Color('#1a1a2e');

/**
 * 3. CAMERA
 * Parameters (fov, aspect, near, far)
 *  fov = field of view (75 is standard)
 *  aspect = screen width to height ratio
 *  near = how close an object can be
 *  far = how far an object can be
 */
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / innerHeight,
    0.1,
    1000
);
camera.position.set(0, 1, 4);

/**
 * 4. ORBIT CONTROLS
 * Allow rotate with mpouse and zoom with scroll
 */
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

/**
 * 5. LIGHTS
 * AmbienLight = Soft light that illiminates everything equally
 * DirectionalLight = As sun, have directon
 * 
 */

const ambientLight = new THREE.AmbientLight('#ffffff', 0.5);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight('#ffffff', 1);
scene.add(dirLight);

const fillLight = new THREE.DirectionalLight('#8899ff', 0.5);
fillLight.position.set(-5, -2, -3);
scene.add(fillLight);

/**
 * 6. OBJECT
 * Geometry = the shape
 * Material = visual appearance (color, brightness, texture)
 * Mesh = geometry + material combined
 */
const geometry = new THREE.IcosahedronGeometry(1.3, 0);
const material = new THREE.MeshStandardMaterial({ 
    color: '#6c63ff',
    roughness: 0.3,
    metalness: 0.2
});
const shape = new THREE.Mesh(geometry, material);
shape.position.set(0, 0, 0);
scene.add(shape);

/**
 * 7. CONNECT UI WITH MATERIAL
 */
const colorInput = document.getElementById('color-input');
const roughnessInput = document.getElementById('roughness-input');
const roughnessValue = document.getElementById('roughness-value');
const metalnessInput = document.getElementById('metalness-input');
const metalnessValue = document.getElementById('metalness-value');
const wireframeBtn = document.getElementById('wireframe-btn');

//COLOR
colorInput.addEventListener('input', (e) => {
    material.color.set(e.target.value);
});

//ROUGHNESS
roughnessInput.addEventListener('input', (e) => {
    const value = parseFloat(e.target.value);
    material.roughness = value;
    roughnessValue.textContent = value.toFixed(2);// It displays "0.30" instead of "0.3"
});

metalnessInput.addEventListener('input', (e) => {
  const value = parseFloat(e.target.value);
  material.metalness = value;
  metalnessValue.textContent = value.toFixed(2);
});

//WIREFRAME: Switch between true/false using click
let wireframeOn = false;
wireframeBtn.addEventListener('click', () => {
    wireframeOn = !wireframeOn;
    material.wireframe = wireframeOn;
    wireframeBtn.textContent = wireframeOn ? 'Wireframe: ON' : 'Wireframe: OFF';
  wireframeBtn.classList.toggle('active', wireframeOn);
});

/**
 * 8. ANIMATION LOOP
 * requestAnimationFrame call this function 60 times per second
 * Mandatory to any 3D Scene on real time
 */
function animate(){
    requestAnimationFrame(animate);

    controls.update();

    shape.rotation.y += 0.003;

    //Render scene from camera pov
    renderer.render(scene, camera);
}
animate();

/**
 * 9. RESPONSIVE
 */
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});