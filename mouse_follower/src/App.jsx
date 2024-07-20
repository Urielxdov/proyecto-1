import { useEffect, useState } from "react";

export function App() {
    const[mounted, setMounted] = useState(true);
  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        Toggle mounted FollowMouse component
      </button>
    </main>
  );
}

function FollowMouse() {
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("Efecto ", { enable });

    const handleMove = (e) => {
      const { clientX, clientY } = e;
      console.log("handleMove ", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };
    if (enable) window.addEventListener("pointermove", handleMove);

    return () => window.removeEventListener("pointermove", handleMove);
  }, [enable]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <h3>Seguidor de Mouse</h3>
      <button onClick={() => setEnable(!enable)}>
        {enable ? "Desactivar" : "Activar"} puntero
      </button>
    </>
  );
}
