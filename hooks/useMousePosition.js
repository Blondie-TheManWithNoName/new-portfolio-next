import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMovement = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMovement);

    return () => {
      window.removeEventListener("mousemove", handleMovement);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
