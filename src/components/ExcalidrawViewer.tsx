import React, { useEffect, useState } from 'react';
import { Excalidraw } from "@excalidraw/excalidraw";

type ExcalidrawViewerProps = {
  src: string;
};

const ExcalidrawViewer: React.FC<ExcalidrawViewerProps> = ({ src }) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(src)
      .then(res => res.json())
      .then(json => setData(json));
  }, [src]);

  return (
    <div>
      {data ? ( <Excalidraw initialData={data} viewModeEnabled={true} /> ) : ( <p>Chargement du schéma...</p>)}
    </div>
  );
};

export default ExcalidrawViewer;