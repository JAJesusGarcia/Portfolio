'use client';
// DynamicMap.js
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';

// Importa `Map` solo en el cliente
const MapComponent = dynamic(() => import('./Map.js'), { ssr: false });

const DynamicMap = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapComponent />
    </div>
  );
};

export default DynamicMap;
