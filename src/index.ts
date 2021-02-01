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

esriConfig.portalUrl = 'https://gisportal.vernonia-or.gov/portal';

const mill = new MapImageLayer({
  portalItem: {
    id: '180b6898a8664e7580f5454cb41416f9',
  },
  opacity: 0.4,
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
      wkid: 102100,
    },
    xmin: -13714517,
    ymin: 5756035,
    xmax: -13710781,
    ymax: 5758249,
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
    }),
    'bottom-left',
  );
});

const app = new FullMap({
  view,
  title: 'Oregon-American Mill',
  container: document.createElement('div'),
});

document.body.append(app.container);
