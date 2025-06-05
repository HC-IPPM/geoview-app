import { useEffect, useRef } from 'react';

export default function GeoViewMap() {
  const containerRef = useRef(null);
  const scriptRef = useRef(null);
  const mapDivRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the map container div
    const mapDiv = document.createElement('div');
    mapDiv.id = 'mapOne';
    mapDiv.className = 'geoview-map';
    mapDiv.style.height = '100vh';
    mapDiv.setAttribute('data-lang', 'en');
    mapDivRef.current = mapDiv;

    // Add the inline config to the data-config attribute
    mapDiv.setAttribute(
      'data-config',
      JSON.stringify({
        map: {
          interaction: 'dynamic',
          viewSettings: {
            projection: 3978,
            zoomAndCenter: [4, [-100, 60]],
          },
          basemapOptions: {
            basemapId: 'transport',
            shaded: true,
            labeled: true,
          },
          listOfGeoviewLayerConfig: [
            {
              geoviewLayerId: 'esriDynamicLYR2',
              geoviewLayerName: 'Energy',
              metadataAccessPath:
                'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
              geoviewLayerType: 'esriDynamic',
              listOfLayerEntryConfig: [{ layerId: '0' }, { layerId: '6' }],
            },
          ],
        },
        theme: 'geo.ca',
        components: [
          'north-arrow',
          'overview-map',
          'legend',
          'app-bar',
          'map-nav',
          'footer-bar',
          'details-panel',
        ],
        appBar: {
          tabs: {
            core: ['geoview', 'layers', 'legend', 'details'],
          },
        },
      })
    );

    // Append the map container inside the React DOM node
    containerRef.current.appendChild(mapDiv);

    // Load the GeoView runtime script
    const script = document.createElement('script');
    script.src =
      'https://canadian-geospatial-platform.github.io/geoview/public/cgpv-main.js';
    script.async = true;

    script.onload = () => {
      if (window.cgpv?.init) {
        window.cgpv.init(() => {
          console.log('GeoView initialized');
          console.log('Maps:', window.cgpv.api.getMapViewerIds());
        });
      } else {
        console.error('GeoView failed to initialize.');
      }
    };

    document.body.appendChild(script);
    scriptRef.current = script;

    // Cleanup on unmount
    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }

      if (
        mapDivRef.current &&
        mapDivRef.current.parentNode &&
        mapDivRef.current.parentNode.contains(mapDivRef.current)
      ) {
        mapDivRef.current.parentNode.removeChild(mapDivRef.current);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ height: '100vh' }} />;
}





// import { useEffect, useRef } from 'react';

// export default function GeoViewMap() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Only add if not already mounted
//     if (!containerRef.current) return;

//     const mapDiv = document.createElement('div');
//     mapDiv.id = 'mapOne';
//     mapDiv.className = 'geoview-map';
//     mapDiv.style.height = '100vh';
//     mapDiv.setAttribute('data-lang', 'en');

//     mapDiv.setAttribute(
//       'data-config',
//       JSON.stringify({
//         map: {
//           interaction: 'dynamic',
//           viewSettings: {
//             projection: 3978,
//             zoomAndCenter: [4, [-100, 60]],
//           },
//           basemapOptions: {
//             basemapId: 'transport',
//             shaded: true,
//             labeled: true,
//           },
//           listOfGeoviewLayerConfig: [
//             {
//               geoviewLayerId: 'esriDynamicLYR2',
//               geoviewLayerName: 'Energy',
//               metadataAccessPath:
//                 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
//               geoviewLayerType: 'esriDynamic',
//               listOfLayerEntryConfig: [{ layerId: '0' }, { layerId: '6' }],
//             },
//           ],
//         },
//         theme: 'geo.ca',
//         components: [
//           'north-arrow',
//           'overview-map',
//           'legend',
//           'app-bar',
//           'map-nav'
//         ],
//         // corePackages: [
//         //   'swiper',
//         //   'time-slider',
//         // ],
//         appBar: {
//           tabs: {
//             core: [
//               'geoview',
//               'layers',
//               'legend'
//             ],
//           },
//         },
//         // footerBar: {
//         //   tabs: {
//         //     core: ['time-slider'],
//         //   },
//         // },
//       })
//     );

//     containerRef.current.appendChild(mapDiv);

//     const script = document.createElement('script');
//     script.src =
//       'https://canadian-geospatial-platform.github.io/geoview/public/cgpv-main.js';
//     script.async = true;
//     script.onload = () => {
//       if (window.cgpv?.init) {
//         window.cgpv.init(() => {
//           console.log('✅ GeoView initialized');
//           console.log('🗺️ Map IDs:', window.cgpv.api.getMapViewerIds());
//         });
//       } else {
//         console.error('❌ GeoView failed to initialize.');
//       }
//     };

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//       if (mapDiv && mapDiv.parentNode) {
//         mapDiv.parentNode.removeChild(mapDiv);
//       }
//     };
//   }, []);

//   return <div ref={containerRef} style={{ height: '100vh' }} />;
// }








// window.cgpv.api.createMapFromConfig('mapWM', {
//   map: {
//     interaction: 'dynamic',
//     viewSettings: {
//       zoomAndCenter: [4, [-100, 60]],
//       projection: 3978,
//     },
//     basemapOptions: {
//       basemapId: 'transport',
//       shaded: true,
//       labeled: true,
//     },
//     listOfGeoviewLayerConfig: [
//       {
//         geoviewLayerId: 'esriDynamicLYR2',
//         geoviewLayerName: 'Energy',
//         metadataAccessPath:
//           'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
//         geoviewLayerType: 'esriDynamic',
//         listOfLayerEntryConfig: [{ layerId: '0' }, { layerId: '6' }],
//       },
//     ],
//   },
//   theme: 'geo.ca',
//   components: [
//     'north-arrow',
//     'overview-map',
//     'legend',
//     'layer-list',
//     'geolocator',
//     'export',
//     'app-bar',
//     'map-nav',
//     'footer-bar',
//     'nav-bar',
//     'details-panel'
//   ],
//   appBar: {
//     tabs: {
//       core: ['geoview', 'layers', 'legend', 'details', 'settings', 'data-table', 'upload'],
//     },
//   },
//   corePackages: [],
//   externalPackages: [],
// });
