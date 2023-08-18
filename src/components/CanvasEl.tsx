import { GlobalCanvas } from "@14islands/r3f-scroll-rig"

const CanvasEl = () => {

  return (
    <div className="canvas__container">
      <GlobalCanvas gl={{alpha: true}} />
    </div>
  )
}

export default CanvasEl
