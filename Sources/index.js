import * as cornerstone from 'cornerstone-core';
import * as cornerstoneTools from 'cornerstone-tools';
import * as cornerstoneMath from 'cornerstone-math';

import CornerstoneToolControl from './CornerstoneToolControl';
import ImageLoader from './CornerstoneImageLoader';
import proxyConfig from './proxyConfig';

cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstone.registerImageLoader('vtkImage', ImageLoader.loader);

export function registerToGlance(Glance) {
  if (Glance) {
    Glance.setActiveProxyConfiguration(proxyConfig);

    Glance.registerControlTab(
      'CornerstoneTools',
      CornerstoneToolControl,
      1,
      'pencil-alt'
    );
  }
}

export default {
  registerToGlance,
};

const Glance = (typeof window === 'undefined' ? {} : window).Glance;
registerToGlance(Glance);
