import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Text, Environment, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Assets
const MODEL_URL = "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/t-rex/model.gltf";
const ROAR_URL = "https://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3";
const FONT_URL = "https://fonts.cdnfonts.com/s/23951/TRIBECA_.woff"; // Direct WOFF link we found earlier

function Rain() {
    const count = 1500;
    const mesh = useRef();

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 30;
            positions[i * 3 + 1] = Math.random() * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        if (!mesh.current) return;
        const positions = mesh.current.geometry.attributes.position.array;
        for (let i = 0; i < count; i++) {
            positions[i * 3 + 1] -= delta * 15;
            if (positions[i * 3 + 1] < -5) {
                positions[i * 3 + 1] = 15 + Math.random() * 5;
            }
        }
        mesh.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                color="#888888"
                size={0.06}
                transparent
                opacity={0.4}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

function Gate() {
    return (
        <group position={[0, 0, -5]}>
            {/* Pillars */}
            <mesh position={[-3.5, 4, 0]}>
                <boxGeometry args={[1.5, 8, 1.5]} />
                <meshStandardMaterial color="#2b2b2b" roughness={0.8} />
            </mesh>
            <mesh position={[3.5, 4, 0]}>
                <boxGeometry args={[1.5, 8, 1.5]} />
                <meshStandardMaterial color="#2b2b2b" roughness={0.8} />
            </mesh>

            {/* Arch */}
            <mesh position={[0, 7.5, 0]}>
                <boxGeometry args={[9, 1.5, 1]} />
                <meshStandardMaterial color="#2b2b2b" roughness={0.8} />
            </mesh>

            {/* Torches */}
            <pointLight position={[-2.8, 5, 1]} distance={5} intensity={5} color="orange" castShadow />
            <pointLight position={[2.8, 5, 1]} distance={5} intensity={5} color="orange" castShadow />

            {/* Logo Text on Gate */}
            <Text
                font={FONT_URL}
                position={[0, 7.5, 0.6]}
                fontSize={0.8}
                color="#e0cd6d" // The yellowish color
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.02}
                outlineColor="#d9901c"
            >
                JURASSIC PARK
            </Text>
        </group>
    );
}

function TRex() {
    const { scene } = useGLTF(MODEL_URL);
    const ref = useRef();

    useFrame((state, delta) => {
        if (ref.current) {
            // Walk forward animation (simple slide)
            // Start from behind the gate (-10) and walk towards camera (0)
            if (ref.current.position.z < 2) {
                ref.current.position.z += delta * 2.5; // Walk speed

                // Bobbing motion for "walking" effect
                ref.current.position.y = -2 + Math.abs(Math.sin(state.clock.elapsedTime * 5)) * 0.2;
                ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.05; // Head sway
            }
        }
    });

    return (
        <primitive
            ref={ref}
            object={scene}
            position={[0, -2, -12]} // Start way back
            scale={[2.5, 2.5, 2.5]}
            rotation={[0, 0, 0]}
        />
    );
}

export default function JurassicModal3D() {
    const [audio] = useState(new Audio(ROAR_URL));

    useEffect(() => {
        audio.volume = 0.5;
        audio.play().catch(e => console.warn("Audio play failed", e));
        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [audio]);

    return (
        <div className="w-full h-full absolute inset-0 bg-black overflow-hidden">
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 2, 6]} fov={50} />

                <color attach="background" args={['#000000']} />
                <fog attach="fog" args={['#000000', 5, 25]} />

                <ambientLight intensity={0.2} />
                {/* Moon/Storm light */}
                <directionalLight position={[0, 10, 5]} intensity={1.5} color="#4a6fa5" castShadow />

                <Gate />
                <TRex />
                <Rain />
            </Canvas>
        </div>
    );
}
