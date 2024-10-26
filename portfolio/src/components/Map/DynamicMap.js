import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <p>Cargando mapa...</p>,
});

export default DynamicMap;
