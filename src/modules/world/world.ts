import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class World {
  private renderer?: THREE.WebGLRenderer;
  private orbitController?: OrbitControls;
  private scene?: THREE.Scene;
  private world?: THREE.Group;
  private camera?: THREE.PerspectiveCamera;
  private sizes?: DOMRect;
  private animationFrameId?: number;

  constructor(private readonly canvas: HTMLCanvasElement) {
    this.prepareScene();
    this.addLighting();
    this.render();
  }

  private addLighting = () => {
    const startX = (this.sizes?.width ?? 0) / 2;

    const spotLightLeft = new THREE.DirectionalLight(0xffffff, 0.6);
    spotLightLeft.position.set(-startX - 100, 0, 150);

    const spotLightRight = new THREE.DirectionalLight(0xffffff, 0.11);
    spotLightRight.position.set(startX + 100, 0, 150);

    // this.scene?.add(spotLightBackward);
    // this.scene?.add(spotLightForward);
    this.scene?.add(spotLightLeft);
    this.scene?.add(spotLightRight);
  };

  private prepareScene = () => {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      precision: "highp",
      antialias: true,
      alpha: true,
    });
    this.sizes = this.canvas.getBoundingClientRect();
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // this.raycaster = new THREE.Raycaster();
    this.scene = new THREE.Scene();
    this.world = new THREE.Group();
    this.scene.add(this.world);
    this.camera = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 100000);
    this.camera.up.set(0, 0, 1);
    this.camera.position.z = 50;
    this.orbitController = new OrbitControls(this.camera, this.renderer.domElement);

    this.orbitController.minDistance = 10;
    this.orbitController.maxDistance = 3000;
    this.orbitController.update();

    this.scene.background = new THREE.Color(0x000000);

    const planeGeometry = new THREE.SphereGeometry(10);
    const planeMaterial = new THREE.MeshPhongMaterial({ transparent: true, opacity: 0.7, color: 0xc7c7c7 });
    const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    planeMesh.position.setZ(-0.5);
    this.world.add(planeMesh);
  };

  private render = () => {
    if (!this.scene || !this.camera) return;
    this.animationFrameId = requestAnimationFrame(this.render);
    this.orbitController?.update();
    this.renderer?.render(this.scene, this.camera);
  };

  public readonly resize = () => {
    this.sizes = this.canvas.parentElement?.getBoundingClientRect() ?? this.canvas.getBoundingClientRect();
    this.renderer?.setSize(this.sizes.width, this.sizes.height);
  };

  public readonly destroy = () => {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    while (this.scene?.children.length) {
      const child = this.scene?.children[this.scene?.children.length - 1];
      if (child) this.scene.remove(child);
    }

    this.scene?.clear();
    this.renderer?.clear();
    this.renderer?.dispose();
    this.scene = undefined;
    this.renderer = undefined;
  };
}
