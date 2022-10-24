import React, { useEffect, useRef } from "react";
import * as THREE from 'three';
import { Suspense } from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from '@react-three/drei'

const ThreeJS = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
      if (canvasRef.current) {
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current,
          antialias: true,
        });
        renderer.outputEncoding = THREE.sRGBEncoding;
        const camera = new THREE.PerspectiveCamera(30, 1);
        camera.position.set(0, 0, 5);
        const loader = new GLTFLoader();
        scene.background = new THREE.Color("white");
        const light = new THREE.DirectionalLight(0xffff00, 10);
        scene.add(light);
  
        loader.load("/script/Lib/shiba/scene.gltf", (object) => {
          object.
          scene.add(object.scene);
          renderer.render(scene, camera);
        });
      }
    }, [canvasRef]);
  
    return (
      <Suspense fallback={<span>loading...</span>}>
        <canvas ref={canvasRef} id="canvas"></canvas>
      </Suspense>
    )
  };
  
export default ThreeJS;