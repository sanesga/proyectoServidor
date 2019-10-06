import angular from 'angular';

let hotelsModule = angular.module('app.hotels',[]);

import HotelsConfig from './hotels.config';
hotelsModule.config(HotelsConfig);

import HotelsCtrl from './hotels.controller';
hotelsModule.controller('HotelsCtrl', HotelsCtrl);

import DetailsHotelsCtrl from './detailshotels.controller';
hotelsModule.controller('DetailsHotelsCtrl', DetailsHotelsCtrl);


export default hotelsModule;