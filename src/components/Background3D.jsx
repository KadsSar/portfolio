import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;

        // Scene Setup
        const scene = new THREE.Scene();
        // Fog to give depth and hide distant particles
        scene.fog = new THREE.FogExp2(0x000000, 0.002);

        // Camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 200; // Original position

        // Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mount.appendChild(renderer.domElement);

        // Particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000;

        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            // Spread particles in a wide area
            posArray[i] = (Math.random() - 0.5) * 1500;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        // Netflix Red Material
        const particlesMaterial = new THREE.PointsMaterial({
            size: 3,
            color: 0xE50914, // Netflix Red
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        // Mesh
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Mouse Interaction
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const onDocumentMouseMove = (event) => {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
        }

        document.addEventListener('mousemove', onDocumentMouseMove);

        // Resize Handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Animation Loop
        const clock = new THREE.Clock(); // Use clock for smooth delta based movement if needed

        const tick = () => {
            targetX = mouseX * 0.001;
            targetY = mouseY * 0.001;

            // Smooth Rotation
            particlesMesh.rotation.y += 0.0005; // Constant drift
            particlesMesh.rotation.x += 0.0002;

            // Interactive Movement
            particlesMesh.rotation.y += 0.5 * (targetX - particlesMesh.rotation.y) * 0.05;
            particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x) * 0.05;

            renderer.render(scene, camera);
            requestAnimationFrame(tick);
        };

        tick();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', onDocumentMouseMove);
            if (mount && renderer.domElement) {
                mount.removeChild(renderer.domElement);
            }
            // Dispose geometry/materials to prevent leaks
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            renderer.dispose();
        };

    }, []);

    return (
        <div
            ref={mountRef}
            className="fixed top-0 left-0 w-full h-full -z-10 bg-black pointer-events-none"
        />
    );
};

export default Background3D;
