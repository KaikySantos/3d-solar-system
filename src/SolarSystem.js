import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, Html } from '@react-three/drei';
import { DoubleSide, TextureLoader, Vector3 } from 'three';
import planetList from './api/planetsList';
import './styles.css';

function SolarSystem() {
  const welcomeHtmlRef = useRef();
  const startButtonRef = useRef();
  const informationAreaRef = useRef();
  const returnButtonRef = useRef();
  const orbitControlRef = useRef();
  const mainCamera = useRef();
  let nameObjectSelected = "none";

  const startButton = () => {
    orbitControlRef.current.enableRotate = true;
    orbitControlRef.current.enableZoom = true;
    welcomeHtmlRef.current.style.transform = "translateX(-150%)";
    startButtonRef.current.style.transform = "translateX(-150%)";
    returnButtonRef.current.style.transform = "translateX(0%)";
    informationAreaRef.current.style.transform = "translateX(0%)";
    informationAreaRef.current.innerHTML = "<h1>Clique em algum planeta <br/> para saber mais!</h1>";
  }
  const returnButton = () => {
    if(nameObjectSelected !== "none"){
      informationAreaRef.current.innerHTML = "<h1>Clique em algum planeta <br/> para saber mais!</h1>";
      returnButtonRef.current.innerHTML = "❌ Voltar ao menu";
      nameObjectSelected = "none";
    }else{
      orbitControlRef.current.enableRotate = false;
      orbitControlRef.current.enableZoom = false;
      welcomeHtmlRef.current.style.transform = "translateX(0%)";
      startButtonRef.current.style.transform = "translateX(0%)";
      returnButtonRef.current.style.transform = "translateX(-150%)";
      informationAreaRef.current.style.transform = "translateX(-150%)";
      nameObjectSelected = "none";
    }
  }
  const objectSelected = (planetName, information) => {
    informationAreaRef.current.style.animation = "";
    setTimeout(() => {
      informationAreaRef.current.style.animation = "informationAreaAnimation 0.5s 1"
      nameObjectSelected = planetName;
      const newText = `
        <h1>${planetName}</h1>
        <p>${information}</p>
      `;
      informationAreaRef.current.innerHTML = newText;
      returnButtonRef.current.innerHTML = "Voltar à exploração";
    }, 5);
  }

  const ObjectInSolarSystem = ({ data }) => {
    const plantetRef = useRef();
    const htmlRef = useRef();
    const texturePlanet = new TextureLoader().load(data.texture);

    useFrame(() => {
      plantetRef.current.position.x = data.distance * Math.sin(data.position);
      plantetRef.current.position.z = data.distance * Math.cos(data.position);
      data.position += data.velocity;
      plantetRef.current.rotation.y += 0.04;
      htmlRef.current.style.display = nameObjectSelected === data.name ? "block" : "none";
    })

    return (
      <>
        <mesh
          ref={plantetRef}
          scale={data.scale}
          onPointerOver={() => {
            if(orbitControlRef.current.enableRotate){
              document.documentElement.style.cursor = "pointer";
            }else{
              document.documentElement.style.cursor = "default";
            }
          }}
          onPointerOut={() => document.documentElement.style.cursor = "default"}
          onClick={() => {
            if(orbitControlRef.current.enableRotate){
              objectSelected(data.name, data.information)
            }
          }}
        >
          <icosahedronGeometry args={[1,6]} />
          <meshPhysicalMaterial map={texturePlanet} />
          
          <Html 
            style={{ transform: `translateY(-${(data.scale * (data.scale < 1 ? 10 : 30)) + 50}px)`, display: 'none' }} 
            sprite transform className="objectSelected" ref={htmlRef}
          >!</Html>

          {data.name === "Saturno" && (
            <mesh
              rotation={[Math.PI / 2, 0, 0]}
            > 
              <ringBufferGeometry args={[1.3,2.1,70]} />
              <meshPhysicalMaterial color={'#7F8188'} side={DoubleSide} transparent={true} opacity={0.8} />
            </mesh>
          )}
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[data.distance-0.03,data.distance,70]} />
          <meshBasicMaterial color={'white'} side={DoubleSide} transparent={true} opacity={0.5} />
        </mesh>
      </>
    );
  }

  const MouseEffect = () => {
    const { mouse } = useThree();
    const vec = new Vector3();
    return useFrame(() => {
      if(!orbitControlRef.current.enableRotate){
        mainCamera.current.position.lerp(vec.set(mouse.x * 15, mouse.y*5 + 10, 20), 0.01);
      }
    });
  }

  return (
    <>
    <div className="welcomeArea" ref={welcomeHtmlRef}>
      <h1>
        Bem-Vindo(a) ao explorador do <br/> 
        <span>Sistema Solar</span>
      </h1>
      <p>Feito com ❤️ por <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/KaikySantos">Kaiky Santos</a></p>
    </div>

    <button
      className="startButton"
      onClick={startButton}
      ref={startButtonRef}
    >
      🚀 Iniciar exploração
    </button>
    <div className="informationArea" ref={informationAreaRef}></div>
    <button
      className="returnButton"
      onClick={returnButton}
      ref={returnButtonRef}
    >
      ❌ Voltar ao menu
    </button>

    <Canvas
      onCreated={state => state.gl.setClearColor("#131A3D")}
    >
        <PerspectiveCamera
          makeDefault={true}
          fov={75}
          near={0.1}
          far={1000}
          position={[20, 15, 0]}
          ref={mainCamera}
        />
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} ref={orbitControlRef} />
        <MouseEffect />
        <Stars factor={2} />
        <ambientLight />
        {planetList.map((planet,key) => (
          <ObjectInSolarSystem
            key={key}
            data={planet}
          />
        ))}
    </Canvas>
    </>
  );
}

export default SolarSystem;