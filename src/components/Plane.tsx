import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"

import { UseCanvas, ScrollScene } from "@14islands/r3f-scroll-rig"

interface PlaneProps {
  elRef: any
  img: string
}

const Plane: React.FC<PlaneProps> = ({ elRef, img }) => {
  const texture = useLoader(TextureLoader, img)

  return (
    <UseCanvas>
      <ScrollScene track={elRef}>
        {(planeProps) => (
          <mesh {...planeProps}>
            <planeGeometry />
            <meshBasicMaterial map={texture} />
          </mesh>
        )}
      </ScrollScene>
    </UseCanvas>
  )
}

export default Plane
