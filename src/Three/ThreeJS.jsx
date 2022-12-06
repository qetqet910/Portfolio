import { useRef, /*useState*/ } from 'react'
import { useGLTF, /*Html*/ } from '@react-three/drei'
import { /*FaMapMarkerAlt*/ } from 'react-icons/fa'

const ThreeJS = () => {
  const group = useRef()
  const { nodes, materials } = useGLTF('GLBIntro/scene.gltf')

  console.log(nodes);

  return (
    <group position={[0, -1, 0]} dispose={null}>
      {/* <mesh geometry={nodes.meshes.Room_Wall_0} material={} /> */}
    </group>
  )
}

useGLTF.preload('librarians_room.glb')

export default ThreeJS;