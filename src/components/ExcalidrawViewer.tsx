import React, { useEffect, useState } from 'react';
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

type ExcalidrawInitialData = {
  elements?: any[];
  appState?: Record<string, any>;
  files?: Record<string, any>;
};

export default function ExcalidrawViewer({ src }: { src: string }) {
  const [data, setData] = useState<ExcalidrawInitialData>();

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then((json) => {
       
        const { elements, appState, files } = json;
        console.log("Données envoyées à Excalidraw:", data);
        setData({ elements, appState, files });
      })
      .catch((err) => console.error("Erreur Excalidraw JSON:", err));
  }, [src]);

  return (
    <div style={{ height: 600, border: "1px solid #333", borderRadius: 12 }}>
    {data ? (
      <Excalidraw initialData={data} viewModeEnabled />
    ) : (
      <p>Chargement du schéma...</p>
    )}
  </div>
  );
}