import angular from 'angular';

let hotelsModule = angular.module('app.hotels',[]);

import HotelsConfig from './hotels.config';
hotelsModule.config(HotelsConfig);

import HotelsCtrl from './hotels.controller';
hotelsModule.controller('HotelsCtrl', HotelsCtrl);

/*import DetailsProjectCtrl from './detailsproj.controller';
projectsModule.controller('DetailsProjectCtrl', DetailsProjectCtrl);*/


export default hotelsModule;