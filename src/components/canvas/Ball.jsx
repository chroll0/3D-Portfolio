import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.7}>
        <icosahedronGeometry args={[1, 7]} />
        <meshStandardMaterial
          color="#B9B1DE"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};
const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 570);
    };
    // Set the initial value of `isMobile`
    handleResize();

    // Add the listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove the listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const frameloop = isMobile ? "demand" : "always";

  return (
    <>
      {!isMobile && (
        <Canvas
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          frameloop="always"
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={true}
              // minAzimuthAngle={-Math.PI / 8}
              // maxAzimuthAngle={Math.PI / 8}
              minPolarAngle={1.3}
              maxPolarAngle={Math.PI / 1.6}
            />
            <Ball imgUrl={icon} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
      {isMobile && (
        <div className="relative flex flex-row justify-center items-center w-[120px] h-[115px] rounded-full bg-gradient-to-br from-[#c4bad9] via-[#332a54] to-[#07050a]">
          <div className="relative w-2/3 h-2/3">
            <img className="w-full h-full rounded-full" src={icon} alt="Icon" />
          </div>
          <div className="absolute inset-0 rounded-full"></div>
        </div>
      )}
    </>
  );
};
export default BallCanvas;
