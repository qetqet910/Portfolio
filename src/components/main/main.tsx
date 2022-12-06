import { MainS } from '../../style/SMain/SMain';
import { Canvas } from '@react-three/fiber'
import ThreeJS from '../../Three/ThreeJS';
import { RecSVG } from './inner/svg';

// import { Lottie1 } from '../../Lottie/ReactLottie';
// import { EventLottie1 } from '../../Lottie/AnimationLottie';

const Main = () => {
    return(
        <MainS> 
            <Canvas dpr={[1, 1.5]} shadows camera={{ position: [-25, 10, 10], fov: 28 }} gl={{ alpha: false }}>
                <fog attach="fog" args={['#333333', 30, 40]} />
                <color attach="background" args={['#333333']} />
                <ambientLight intensity={0.25} />
                <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
                    <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
                </directionalLight>
                <ThreeJS />
            </Canvas>
            <RecSVG />
        </MainS>
    )
}

export default Main;