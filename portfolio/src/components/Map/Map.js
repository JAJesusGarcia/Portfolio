'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

const Map = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Indica que estamos en el cliente

    // Desmontar el mapa si ya existe para evitar reinicializaciones
    return () => {
      const mapContainer = document.getElementById('map');
      if (mapContainer && mapContainer._leaflet_id) {
        mapContainer._leaflet_id = null;
      }
    };
  }, []);

  if (!isClient) return null; // Evita renderizar en el servidor

  const position = [-32.9595, -60.6393];

  return (
    <MapContainer
      id="map"
      center={position}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Tu ubicación aquí.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
