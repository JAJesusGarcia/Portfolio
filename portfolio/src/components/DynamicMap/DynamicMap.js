'use client';

import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('../Map/Map.js'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-quaternary rounded animate-pulse" />
  ),
});

export default DynamicMap;
