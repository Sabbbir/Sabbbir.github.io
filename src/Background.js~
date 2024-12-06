// src/components/Background.js

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Background = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // Geometry and Material
        const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
        const material = new THREE.MeshStandardMaterial({ color: 0x00c6ff, wireframe: true });
        const torus = new THREE.Mesh(geometry, material);
        scene.add(torus);

        // Lights
        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        // Animation Loop
        const animate = function () {
            requestAnimationFrame(animate);

            torus.rotation.x += 0.005;
            torus.rotation.y += 0.005;

            renderer.render(scene, camera);
        };

        animate();

        // Handle Window Resize
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup on Unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div ref={mountRef} className="background-canvas"></div>
    );
}

export default Background;

