import * as THREE from "three";
import { OrbitControls } from "https://unpkg.com/three@1.3.6/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);