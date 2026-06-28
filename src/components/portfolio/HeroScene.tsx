import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Edges, Icosahedron, Torus } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group, Mesh } from "three";

function UnityCube() {
  const ref = useRef<Mesh>(null!);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.3;
      ref.current.rotation.y += dt * 0.4;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} position={[2.6, 0.4, 0]}>
        <boxGeometry args={[1.4, 1.4, 1.4]} />
        <meshStandardMaterial
          color="#0e1a3a"
          emissive="#00e0ff"
          emissiveIntensity={0.35}
          metalness={0.8}
          roughness={0.15}
        />
        <Edges color="#00e0ff" />
      </mesh>
    </Float>
  );
}

function Controller() {
  const ref = useRef<Group>(null!);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.4) * 0.4;
    ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.3) * 0.15;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1.5}>
      <group ref={ref} position={[-2.6, -0.2, 0]} scale={0.9}>
        {/* Body */}
        <mesh>
          <capsuleGeometry args={[0.55, 1.4, 6, 16]} />
          <meshStandardMaterial color="#10183a" metalness={0.7} roughness={0.3} emissive="#a855f7" emissiveIntensity={0.18} />
        </mesh>
        {/* Grips */}
        <mesh position={[-0.95, -0.45, 0]} rotation={[0, 0, 0.5]}>
          <capsuleGeometry args={[0.32, 0.7, 6, 12]} />
          <meshStandardMaterial color="#0b1130" metalness={0.6} roughness={0.4} />
        </mesh>
        <mesh position={[0.95, -0.45, 0]} rotation={[0, 0, -0.5]}>
          <capsuleGeometry args={[0.32, 0.7, 6, 12]} />
          <meshStandardMaterial color="#0b1130" metalness={0.6} roughness={0.4} />
        </mesh>
        {/* Buttons */}
        {[
          [0.55, 0.25, 0.5, "#ff2bd6"],
          [0.85, -0.05, 0.5, "#00e0ff"],
          [0.25, -0.05, 0.5, "#a855f7"],
          [0.55, -0.35, 0.5, "#ffd166"],
        ].map(([x, y, z, c], i) => (
          <mesh key={i} position={[x as number, y as number, z as number]}>
            <sphereGeometry args={[0.11, 16, 16]} />
            <meshStandardMaterial color={c as string} emissive={c as string} emissiveIntensity={1.2} />
          </mesh>
        ))}
        {/* Dpad */}
        <mesh position={[-0.55, 0.2, 0.5]}>
          <boxGeometry args={[0.35, 0.1, 0.05]} />
          <meshStandardMaterial color="#00e0ff" emissive="#00e0ff" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[-0.55, 0.2, 0.5]}>
          <boxGeometry args={[0.1, 0.35, 0.05]} />
          <meshStandardMaterial color="#00e0ff" emissive="#00e0ff" emissiveIntensity={0.8} />
        </mesh>
      </group>
    </Float>
  );
}

function Rings() {
  const ref = useRef<Group>(null!);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * 0.1;
  });
  return (
    <group ref={ref} position={[0, 0, -2]}>
      <Torus args={[3.2, 0.015, 16, 100]} rotation={[Math.PI / 2.2, 0, 0]}>
        <meshBasicMaterial color="#00e0ff" transparent opacity={0.35} />
      </Torus>
      <Torus args={[3.8, 0.01, 16, 100]} rotation={[Math.PI / 2, 0.3, 0]}>
        <meshBasicMaterial color="#a855f7" transparent opacity={0.25} />
      </Torus>
      <Torus args={[4.4, 0.01, 16, 100]} rotation={[Math.PI / 1.9, -0.2, 0]}>
        <meshBasicMaterial color="#ff2bd6" transparent opacity={0.2} />
      </Torus>
    </group>
  );
}

function FloatingShards() {
  const positions: [number, number, number][] = [
    [-3.2, 1.8, -1.5],
    [3.2, -1.6, -1],
    [-1.8, 2.2, -0.5],
    [2.2, 2, -1.2],
    [-2.5, -1.8, -0.8],
  ];
  return (
    <>
      {positions.map((p, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={1.5} floatIntensity={2}>
          <Icosahedron args={[0.18, 0]} position={p}>
            <meshStandardMaterial
              color={i % 2 ? "#ff2bd6" : "#00e0ff"}
              emissive={i % 2 ? "#ff2bd6" : "#00e0ff"}
              emissiveIntensity={1.1}
              wireframe
            />
          </Icosahedron>
        </Float>
      ))}
    </>
  );
}

function MouseRig() {
  useFrame(({ camera, mouse }) => {
    camera.position.x += (mouse.x * 0.8 - camera.position.x) * 0.04;
    camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <color attach="background" args={["#050816"]} />
        <fog attach="fog" args={["#050816", 6, 18]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#00e0ff" />
        <pointLight position={[-5, -3, 4]} intensity={2} color="#a855f7" />
        <pointLight position={[0, 4, -3]} intensity={1.5} color="#ff2bd6" />
        <Stars radius={60} depth={40} count={2200} factor={3} fade speed={1} />
        <Rings />
        <UnityCube />
        <Controller />
        <FloatingShards />
        <MouseRig />
      </Suspense>
    </Canvas>
  );
}
