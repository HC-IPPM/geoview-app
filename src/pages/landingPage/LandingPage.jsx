import { useEffect, useRef, useState } from 'react';
import {
  GcdsButton,
  GcdsContainer,
  GcdsGrid,
  GcdsHeading,
  GcdsText,
} from '@cdssnc/gcds-components-react';
import { useTranslation } from 'react-i18next';

const configPath = '/configs/sample-config.json';

export default function LandingPage() {
  const { t, i18n } = useTranslation();
  const containerRef = useRef(null);
  const scriptRef = useRef(null);
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);


  useEffect(() => {
    let isMounted = true;
  
    fetch(configPath)
      .then((res) => res.json())
      .then((config) => {
        if (!isMounted) return;
  
        // Avoid duplicate map
        if (window.cgpv?.api?.mapExists?.('mapOne')) {
          console.warn('Map "mapOne" already exists, skipping...');
          return;
        }
  
        const mapDiv = document.createElement('div');
        mapDiv.id = 'mapOne';
        mapDiv.className = 'geoview-map';
        mapDiv.setAttribute('data-lang', 'en');
        mapDiv.setAttribute('data-config', JSON.stringify(config));
        mapDiv.style.height = '70vh';
        mapRef.current = mapDiv;
  
        if (containerRef.current) {
          containerRef.current.appendChild(mapDiv);
        }
  
        const script = document.createElement('script');
        script.src = 'https://canadian-geospatial-platform.github.io/geoview/public/cgpv-main.js';
        script.async = true;
  
        script.onload = () => {
          if (window.cgpv?.init && !window.cgpv.api?.mapExists?.('mapOne')) {
            window.cgpv.init(() => {
              console.log(' GeoView initialized');
            });
          }
        };
  
        document.body.appendChild(script);
        scriptRef.current = script;
      })
      .catch((err) => console.error('GeoView config load error:', err));
  
    return () => {
      isMounted = false;
  
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
      }
  
      if (mapRef.current && containerRef.current?.contains(mapRef.current)) {
        containerRef.current.removeChild(mapRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Map Section */}
      <div ref={containerRef} style={{ width: '100%', minHeight: '70vh', marginTop: 0, paddingTop: 0 }} />
      {/* <div
    ref={containerRef}
    style={{
      width: '100%',
      minHeight: '70vh',
      marginTop: 0,
      paddingTop: 0,
      paddingLeft: '1rem',
      paddingRight: '1rem',
      boxSizing: 'border-box', // ensures padding doesn't overflow container
    }}
  /> */}

    </>
  );
}

// import { useEffect, useRef, useState } from 'react';
// import {
//   GcdsContainer,
// } from '@cdssnc/gcds-components-react';
// import { useTranslation } from 'react-i18next';

// const configPath = '/configs/sample-config.json';

// export default function LandingPage() {
//   const { t } = useTranslation();
//   const containerRef = useRef(null);
//   const scriptRef = useRef(null);
//   const mapRef = useRef(null);

//   const [mapLoaded, setMapLoaded] = useState(false);

//   useEffect(() => {
//     let isMounted = true;

//     fetch(configPath)
//       .then((res) => res.json())
//       .then((config) => {
//         if (!isMounted) return;

//         if (window.cgpv?.api?.mapExists?.('mapOne')) {
//           console.warn('Map "mapOne" already exists, skipping...');
//           return;
//         }

//         const mapDiv = document.createElement('div');
//         mapDiv.id = 'mapOne';
//         mapDiv.className = 'geoview-map';
//         mapDiv.setAttribute('data-lang', 'en');
//         mapDiv.setAttribute('data-config', JSON.stringify(config));
//         mapDiv.style.height = '70vh';
//         mapRef.current = mapDiv;

//         if (containerRef.current) {
//           containerRef.current.appendChild(mapDiv);
//         }

//         const script = document.createElement('script');
//         script.src = 'https://canadian-geospatial-platform.github.io/geoview/public/cgpv-main.js';
//         script.async = true;

//         script.onload = () => {
//           if (window.cgpv?.init && !window.cgpv.api?.mapExists?.('mapOne')) {
//             window.cgpv.init(() => {
//               console.log('GeoView initialized');
//             });
//           }
//         };

//         document.body.appendChild(script);
//         scriptRef.current = script;
//       })
//       .catch((err) => console.error('GeoView config load error:', err));

//     return () => {
//       isMounted = false;

//       if (scriptRef.current && document.body.contains(scriptRef.current)) {
//         document.body.removeChild(scriptRef.current);
//       }

//       if (mapRef.current && containerRef.current?.contains(mapRef.current)) {
//         containerRef.current.removeChild(mapRef.current);
//       }
//     };
//   }, []);

//   return (
//     <GcdsContainer size="xl" centered>
//       <div
//         ref={containerRef}
//         style={{ width: '100%', minHeight: '70vh', marginTop: 0, paddingTop: 0 }}
//       />
//     </GcdsContainer>
//   );
// }
