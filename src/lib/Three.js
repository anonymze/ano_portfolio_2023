import * as THREE from "three";
import { loadGLTFModel } from '../lib/model';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const easeOutCirc = (x) => {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Three = ({ idElementToAttach }) => {
  const container = document.getElementById(idElementToAttach ?? "");
  const urlDogGLB = '/dog.glb';

  if (!container) {
    return
  }

  const scW = container.clientWidth;
  const scH = container.clientHeight;

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(scW, scH);
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  /** ROTATION */
  const target = new THREE.Vector3(-0.5, 1.2, 0)
  const initialCameraPosition = new THREE.Vector3(
    20 * Math.sin(0.2 * Math.PI),
    10,
    20 * Math.cos(0.2 * Math.PI)
  )

  const scale = scH * 0.005 + 4.8
  const camera = new THREE.OrthographicCamera(
    -scale,
    scale,
    scale,
    -scale,
    0.01,
    50000
  );
  camera.position.copy(initialCameraPosition);
  camera.lookAt(target);

  const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
  scene.add(ambientLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.target = target;
  /** */

  // camera.position.z = 1;

  loadGLTFModel(scene, urlDogGLB, {
    receiveShadow: false,
    castShadow: false
  }).then(() => {
    animate();
  })

  let req = null
  let frame = 0
  const animate = () => {
    req = requestAnimationFrame(animate)

    frame = frame <= 100 ? frame + 1 : frame

    /** ROTATION */
    if (frame <= 100) {
      const p = initialCameraPosition
      const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

      camera.position.y = 10
      camera.position.x =
        p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
      camera.position.z =
        p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
      camera.lookAt(target)
    } else {
      controls.update()
    }
    /** */

    renderer.render(scene, camera)
  }
};

export default Three;
