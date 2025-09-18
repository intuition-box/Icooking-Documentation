import React, { useEffect, useState } from 'react';

type ExcalidrawViewerProps = {
  src: string;
};

const ExcalidrawViewer: React.FC<ExcalidrawViewerProps> = ({ src }) => {
  const [data, setData] = useState<any>(null);
  const [ExcalidrawComponent, setExcalidrawComponent] = useState<any>(null);

  useEffect(() => {
    // Import dynamique côté client seulement
    import('@excalidraw/excalidraw').then(mod => setExcalidrawComponent(() => mod.Excalidraw));
  }, []);

  useEffect(() => {
    fetch(src)
      .then(res => res.json())
      .then(json => setData(json));
  }, [src]);

  if (!ExcalidrawComponent) {
    return <p>Chargement du composant Excalidraw...</p>;
  }

  return (
    <div style={{ width: '100%', height: '600px' }}>
      {data ? (  <ExcalidrawComponent initialData={data} viewModeEnabled /> ) : ( <p>Chargement du schéma...</p>)}
    </div>
  );
};

export default ExcalidrawViewer;