import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, MeshDistortMaterial, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function OrganicChrome() {
    const meshRef = useRef();

    useFrame(() => {
        if (!meshRef.current) return;
        const scrollY = window.scrollY;

        // Sanfte Scroll-Rotation
        const targetRotX = scrollY * 0.0006;
        const targetRotY = scrollY * 0.0004;

        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.05);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.05);
    });

    return (
        <TorusKnot
            ref={meshRef}
            // Hohe Segmente für weiche, flüssige Rundungen
            args={[1, 0.4, 256, 64, 2, 3]}
            scale={0.6}
            position={[1.5, 0, 0]}
        >
            <MeshDistortMaterial
                color="#ffffff"       // Weißes Grundmaterial für Chrome
                metalness={1}         // Voll metallisch für Chrome-Effekt
                roughness={0.1}       // Sehr glatt für starken Chrome-Glanz
                distort={0.8}         // Stärkere Verformung für zerrissenen Look
                speed={0}             // Bewegung nur durch Scrollen
                flatShading={false}
                envMapIntensity={1.5} // Verstärkte Environment-Spiegelungen
            />
        </TorusKnot>
    );
}

export default function Background3D() {
    return (
        // Hintergrundfarbe auf Creme geändert (#e8e2d4)
        <div className="fixed inset-0 z-0 bg-[#e8e2d4]">
            <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>

                {/* Helles Umgebungslicht */}
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
                <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#ffffff" />

                {/* Apartment Environment - neutral und hell für Chrome ohne sichtbare Studio-Elemente */}
                <Environment preset="apartment" />

                <OrganicChrome />

                {/* Weicher Schatten unter dem Objekt für mehr Realismus auf dem hellen Boden */}
                <ContactShadows
                    position={[0, -2, 0]}
                    opacity={0.2}
                    scale={10}
                    blur={3}
                    far={4}
                />
            </Canvas>

            {/* Sanfter Vignetten-Effekt am Rand für Fokus auf die Mitte */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.05)_100%)] pointer-events-none" />
        </div>
    );
}