import React, { useLayoutEffect, Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame, useLoader, extend } from '@react-three/fiber'
import { useGLTF, useScroll, ScrollControls, Environment, Merged, MeshReflectorMaterial, OrbitControls } from '@react-three/drei'

import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { useControls } from "leva";

extend({ TextGeometry });

const ThreeTrain = () => {
    function Train() {
        const ref = useRef()
        const scroll = useScroll()
        const [cabin, seat, building] = useGLTF(['../script/Lib/Train/cabin-transformed.glb', '../script/Lib/Train/seat-transformed.glb', '../script/Lib/Train/building.glb'])
        const meshes = useMemo(() => ({ Cabin: cabin.nodes.cabin_1, Seat: seat.nodes.seat, Building: building.nodes.Building_square2tier_lambert1_0}), [cabin, seat, building])
        useFrame(() => (ref.current.position.z = scroll.offset * 190))
        // Object002_Material | Simple.Character_Material_0 | Building_square2tier_lambert1_0
        return (
            <Merged castShadow receiveShadow meshes={meshes}>
                {(models) => (
                    <group ref={ref}>
                        <Cabin models={models} color="#3f3e32" seatColor="#FFF9CA" name="About" position={[-6, 0, -6]} />
                        <Cabin models={models} color="#544a45" seatColor="#ffa13d" name="Contact" position={[-6, 0, -32]} />
                        <Cabin models={models} color="#3f3e32" seatColor="#FFF9CA" name="Education" position={[-6, 0, -58]} />
                        <Cabin models={models} color="#544a45" seatColor="#ffa13d" name="Skills" position={[-6, 0, -84]} />
                        <Cabin models={models} color="#3f3e32" seatColor="#FFF9CA" name="Career" position={[-6, 0, -110]} />
                        <Cabin models={models} color="#544a45" seatColor="#ffa13d" name="Awards" position={[-6, 0, -136]} />
                        <Cabin models={models} color="#3f3e32" seatColor="#FFF9CA" name="Projects" position={[-6, 0, -162]} />
                        <Cabin models={models} color="#544a45" seatColor="#ffa13d" name="Other" position={[-6, 0, -188]} />
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

    const Build = ({models, ...props}) => {
        <group>
            <models.Building position={[0, 0, -6]} />
            <models.Building position={[0, 0, -2]} />
        </group>
    }

    const BuildForest = ({models, ...props}) => {
        <group>
            <Build models={models} position={[4, 4, -6]} />
            <Build models={models} position={[4, 4, -2]} />
        </group>
    }

    const Text3d = ({color, text}) => {
        const ref3d = useRef();
        const font = useLoader(FontLoader, "../optimer_bold.typeface.json");
        const config = useMemo(() => ({ font, size: 1.5, height: .253 }), [font]);

        return (
          <mesh ref={ref3d} position={[4, 2, 2]} rotation={[-Math.PI / 2, -Math.PI / 2, -Math.PI / 2]} onPointerOver={e => {
            // console.log(e.eventObject.scale(2, 2, 2));
          }}>
            <textGeometry args={[text, config]} />
            <meshStandardMaterial color={color} />
          </mesh>
        );
    }

    const Cabin = ({ models, color = 'white', seatColor = 'white', name, ...props }) => (
        <group {...props}>

            <Text3d color={color} text={name} />
            <models.Cabin color={color} />
            <Row models={models} color={seatColor} />
            <Row models={models} color={seatColor} position={[0, 0, -1.9]} />
            <Row models={models} color={seatColor} position={[0, 0, -6.6]} />
            <Row models={models} color={seatColor} position={[0, 0, -8.5]} />
            <Row models={models} color={seatColor} position={[0, 0, -11]} />
            <Row models={models} color={seatColor} position={[0, 0, -12.9]} />
            <Row models={models} color={seatColor} position={[0, 0, -17.6]} />
            <Row models={models} color={seatColor} position={[0, 0, -19.5]} />
            <BuildForest models={models} position={[10, 0, 5]} />
            {/* <Product models={models} /> */}
        </group>
    )
    return (
        <Canvas dpr={[1, 1.5]} shadows camera={{ position: [-25, 10, 10], fov: 28 }} gl={{ alpha: false }}>
            <fog attach="fog" args={['#333333', 30, 40]} />
            <color attach="background" args={['#333333']} />
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
                        color="#222"
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