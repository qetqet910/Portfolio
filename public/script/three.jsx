import React, { useEffect, Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useScroll, ScrollControls, Environment, Merged, Text, MeshReflectorMaterial, Text3D } from '@react-three/drei'

const ThreeTrain = () => {
    function Train() {
        const ref = useRef()
        const scroll = useScroll()
        const [cabin, seat] = useGLTF(['../script/Lib/Train/cabin-transformed.glb', '../script/Lib/Train/seat-transformed.glb'])
        const meshes = useMemo(() => ({ Cabin: cabin.nodes.cabin_1, Seat: seat.nodes.seat }), [cabin, seat])
        useFrame(() => (ref.current.position.z = scroll.offset * 190))
        // Merged creates THREE.InstancedMeshes out of the meshes you feed it
        // All in all we end up with just 5 draw-calls for the entire scene
        return (
        <Merged castShadow receiveShadow meshes={meshes}>
            {(models) => (
            <group ref={ref}>
                <Cabin models={models} color="#ffa43d" seatColor="sandybrown" name="About" position={[-2, 0, -6]} onClick={console.log(".")} />
                <Cabin models={models} color="#4de29a" seatColor="#2de08a" name="Contact" position={[-2, 0, -32]} />
                <Cabin models={models} color="royalblue" seatColor="lightskyblue" name="Education" position={[-2, 0, -58]} />
                <Cabin models={models} color="#d196a2" seatColor="#e38598" name="Skills" position={[-2, 0, -84]} />
                <Cabin models={models} color="white" seatColor="gray" name="Career" position={[-2, 0, -110]} />
                <Cabin models={models} color="royalblue" seatColor="lightskyblue" name="Awards" position={[-2, 0, -136]} />
                <Cabin models={models} color="#d196a2" seatColor="#e38598" name="Projects" position={[-2, 0, -162]} />
                <Cabin models={models} color="white" seatColor="gray" name="Other" position={[-2, 0, -188]} />
            </group>
            )}
        </Merged>
        )
    }
  
    const Quarter = ({ models, color, ...props }) => (
        <group {...props}>
        <models.Seat color={color} position={[-0.35, 0, 0.7]} />
        <models.Seat color={color} position={[0.35, 0, 0.7]} />
        <models.Seat color={color} position={[-0.35, 0, -0.7]} rotation={[0, Math.PI, 0]} />
        <models.Seat color={color} position={[0.35, 0, -0.7]} rotation={[0, Math.PI, 0]} />
        </group>
    )
  
    const Row = ({ models, color, ...props }) => (
        <group {...props}>
        <Quarter models={models} color={color} position={[-1.2, -0.45, 9.75]} />
        <Quarter models={models} color={color} position={[1.2, -0.45, 9.75]} />
        </group>
    )
    
    const Cabin = ({ models, color = 'white', seatColor = 'white', name, ...props }) => (
        <group {...props}>
        <Text fontSize={2} color="white" position={[4, 3, 5]} rotation={[-Math.PI / 2, -Math.PI / 2, -Math.PI / 2]}>
            {name}
        </Text>
        <models.Cabin color={color} />
        <Row models={models} color={seatColor} />
        <Row models={models} color={seatColor} position={[0, 0, -1.9]} />
        <Row models={models} color={seatColor} position={[0, 0, -6.6]} />
        <Row models={models} color={seatColor} position={[0, 0, -8.5]} />
        <Row models={models} color={seatColor} position={[0, 0, -11]} />
        <Row models={models} color={seatColor} position={[0, 0, -12.9]} />
        <Row models={models} color={seatColor} position={[0, 0, -17.6]} />
        <Row models={models} color={seatColor} position={[0, 0, -19.5]} />
        </group>
    )
    return (
        <Canvas dpr={[1, 1.5]} shadows camera={{ position: [-15, 15, 18], fov: 20 }} gl={{ alpha: false }}>
            <fog attach="fog" args={['#333333', 30, 40]} />
            <color attach="background" args={['#000000']} />
            <ambientLight intensity={0.25} />
            <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
                <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
            </directionalLight>
            <Suspense fallback={null}>
                <ScrollControls pages={10}>
                    <Train />
                </ScrollControls>
                <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[50, 50]} />
                    <MeshReflectorMaterial
                    blur={[400, 100]}
                    resolution={1024}
                    mixBlur={1}
                    mixStrength={15}
                    depthScale={1}
                    minDepthThreshold={0.85}
                    color="#151515"
                    metalness={0.6}
                    roughness={1}
                    />
                </mesh>
                <Environment preset="dawn" />
            </Suspense>
        </Canvas>
    )
}

export default ThreeTrain;