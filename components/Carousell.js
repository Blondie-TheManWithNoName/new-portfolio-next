import React, { useRef, useEffect } from "react";
import styles from "../styles/carousell.module.scss";

export default function Carousell() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    // Load the globe image
    const img = new Image();
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Wkipedia_blank_world_map.jpg"; // Provide a valid URL or local path to an equirectangular map of the Earth

    let angle = 0;

    img.onload = function () {
      // Start the animation
      animate();
    };

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Calculate the current angle
      angle += 0.01;
      if (angle > 2 * Math.PI) {
        angle -= 2 * Math.PI;
      }

      // Draw the globe
      drawGlobe(angle);

      // Loop the animation
      requestAnimationFrame(animate);
    }

    function drawGlobe(angle) {
      const radius = width / 2;

      // Draw the globe as a circle
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, radius, 0, 2 * Math.PI);
      ctx.clip();

      // Draw the image in a way that it rotates with the angle
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(angle);
      ctx.drawImage(img, -width / 2, -height / 2, width, height);
      ctx.restore();
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width="600"
      height="600"
      className={styles.canvas}
    ></canvas>
  );
}
