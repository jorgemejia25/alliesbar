"use client";

import "@google/model-viewer";
import { createElement } from "react";

/**
 * Interactive GLB brand mark for the Hero section.
 * Designed to float prominently in the background/center of the hero.
 */
export default function HeroGlbModel({
  className = "",
}: {
  className?: string;
}) {
  const modelViewer = createElement("model-viewer", {
    src: "/3dsvg.glb",
    alt: "Allie's Bar 3D mark",
    loading: "eager",
    exposure: "1.2",
    style: {
      width: "100%",
      height: "100%",
      backgroundColor: "transparent",
      touchAction: "none",
    },
    // We disable zoom so scrolling the page isn't blocked by the 3D model
    "disable-zoom": true,
    "camera-controls": true,
    "auto-rotate": true,
    "auto-rotate-delay": "1000",
    "rotation-per-second": "15deg",
    "shadow-intensity": "0.5",
    "interaction-prompt": "none",
  });

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        touchAction: "pan-y",
      }}
    >
      {modelViewer}
    </div>
  );
}
