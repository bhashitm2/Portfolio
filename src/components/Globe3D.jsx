import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const Globe3D = () => {
  const containerRef = useRef();
  const globeEl = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Destination: Udaipur, Rajasthan
  const MAP_CENTER = { lat: 24.562139, lng: 73.725132, altitude: 0.6 };

  useEffect(() => {
    // 1. Resize Observer for dimensions
    const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
            const { width, height } = entry.contentRect;
            setDimensions({ width, height });
        }
    });

    if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
    }

    // 2. Intersection Observer for animation trigger
    const intersectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && globeEl.current) {
             // Start sequence when visible
             globeEl.current.controls().autoRotate = true;
             globeEl.current.controls().autoRotateSpeed = 2.0;
             globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 2.5 }); // Reset view

             setTimeout(() => {
                if (globeEl.current) {
                    globeEl.current.controls().autoRotate = false;
                    globeEl.current.pointOfView(MAP_CENTER, 2500); // Fly to location
                }
             }, 3000); // Rotate for 3 seconds before flying

             intersectionObserver.disconnect(); // Run once
        }
    }, { threshold: 0.5 }); // Trigger when 50% visible

    if (containerRef.current) {
        intersectionObserver.observe(containerRef.current);
    }

    return () => {
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
    };
  }, []); // Run once on mount to set up observers

  // Remove the old independent useEffect that ran immediately

  const attractions = [
    { lat: 24.562139, lng: 73.725132, label: "Home" }
  ];

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {dimensions.width > 0 && (
          <Globe
            ref={globeEl}
            width={dimensions.width}
            height={dimensions.height}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            backgroundColor="rgba(0,0,0,0)"
            atmosphereColor="#0575E6"
            atmosphereAltitude={0.25}
            htmlElementsData={attractions}
            htmlElement={d => {
              const el = document.createElement('div');
              el.innerHTML = `
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="animation: float-pulse 2s ease-in-out infinite;">
                  <path d="M4 2V22" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round"/>
                  <path d="M4 4H18.5L14 9L18.5 14H4" fill="#FF6B6B" stroke="#FF6B6B" stroke-width="2" stroke-linejoin="round"/>
                </svg>
              `;
              el.style.textAlign = 'center';
              el.style.pointerEvents = 'none';
              return el;
            }}
          />
      )}
    </div>
  );
};

export default Globe3D;
