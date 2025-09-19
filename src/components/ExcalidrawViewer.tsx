import React, { useEffect, useState } from 'react';


type ExcalidrawInitialData = {
  elements?: any[];
  appState?: Record<string, any>;
  files?: Record<string, any>;
};

export default function ExcalidrawViewer({ src }: { src: string }) {
  const [ExcalidrawComponent, setExcalidrawComponent] = useState<any>(null);
  const [data, setData] = useState<ExcalidrawInitialData>();

  useEffect(() => {
    // Import dynamique seulement côté client
    const loadExcalidraw = async () => {
      const mod = await import('@excalidraw/excalidraw');
      await import('@excalidraw/excalidraw/index.css');
      setExcalidrawComponent(() => mod.Excalidraw);
    };
    loadExcalidraw();
  }, []);

  useEffect(() => {
    const loadJSON = async () => {
      try {
        const res = await fetch(src);
        if (!res.ok) throw new Error(`Erreur fetch ${res.status}`);
        const json = await res.json();
        const { elements, appState, files } = json;
        console.log("JSON récupéré:", { elements, appState, files });
        setData({ elements, appState, files });
      } catch (err) {
        console.error('Erreur Excalidraw JSON:', err);
      }
    };
    loadJSON();
  }, [src]);

  
  if (!ExcalidrawComponent) return <p>Chargement du composant Excalidraw...</p>;
  if (!data) return <p>Chargement du schéma...</p>;

  return (
    <div style={{ height: 600, border: '1px solid #333', borderRadius: 12 }}>
      <ExcalidrawComponent initialData={data} viewModeEnabled />
    </div>
  );
}