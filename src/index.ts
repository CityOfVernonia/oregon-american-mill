import esriConfig from '@arcgis/core/config';

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import { Extent } from '@arcgis/core/geometry';

import Basemap from '@arcgis/core/Basemap';
import BingMapsLayer from '@arcgis/core/layers/BingMapsLayer';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';

import FullMap from 'cov/layouts/FullView';
import Home from '@arcgis/core/widgets/Home';
import MadeWith from 'cov/widgets/MadeWith';

// need type definition
import Share from 'cov-arcgis-esm/src/widgets/Share';

esriConfig.portalUrl = 'https://gisportal.vernonia-or.gov/portal';

const mill = new MapImageLayer({
  portalItem: {
    id: '8b656510513a4bd7a2a82356118db5ab',
  },
});

const view = new MapView({
  map: new Map({
    basemap: new Basemap({
      baseLayers: [
        new BingMapsLayer({
          style: 'aerial',
          key: 'Ao8BC5dsixV4B1uhNaUAK_ejjm6jtZ8G3oXQ5c5Q-WtmpORHOMklBvzqSIEXwdxe',
        }),
      ],
    }),
    layers: [mill],
  }),
  extent: new Extent({
    spatialReference: {
      wkid: 102100
    },
    xmin: -13712544.899086168,
    ymin: 5757024.595500431,
    xmax: -13711777.542981794,
    ymax: 5757460.52542743
  }),
  constraints: {
    rotationEnabled: false,
  },
});

view.when((): void => {
  view.ui.add(new Home({ view }), 'top-left');
  view.ui.add(
    new MadeWith({
      color: '#FFFFFF',
      size: '14px',
    }),
    'bottom-left',
  );
  view.ui.add(
    new Share(),
    'bottom-right',
  );
});

const app = new FullMap({
  view,
  title: 'Oregon American Mill',
  container: document.createElement('div'),
});

document.body.append(app.container);
