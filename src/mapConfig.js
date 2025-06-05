export default {
  map: {
    interaction: 'dynamic',
    viewSettings: {
      projection: 3978,
      zoomAndCenter: [4, [-95, 60]],
    },
    basemapOptions: {
      basemapId: 'transport',
      shaded: true,
      labeled: true,
    },
    listOfGeoviewLayerConfig: [
      {
        geoviewLayerId: 'canada',
        geoviewLayerName: 'Canada Admin Boundaries',
        geoviewLayerType: 'ogcWms',
        metadataAccessPath:
          'https://maps.geogratis.gc.ca/wms/canvec_en?SERVICE=WMS&REQUEST=GetCapabilities',
        listOfLayerEntryConfig: [
          {
            layerId: 'canvec:MunicipalBoundaries',
          },
        ],
      },
    ],
  },
  theme: 'geo.ca',
  components: [],
  corePackages: [],
  externalPackages: [],
};
