import angular from 'angular';

let restaurantsModule = angular.module('app.restaurants',[]);

import RestaurantsConfig from './restaurants.config';
restaurantsModule.config(RestaurantsConfig);

import RestaurantsCtrl from './restaurants.controller';
restaurantsModule.controller('RestaurantsCtrl', RestaurantsCtrl);

// import DetailsHotelsCtrl from './detailshotels.controller';
// restaurantsModule.controller('DetailsHotelsCtrl', DetailsHotelsCtrl);

// import ListaHotelesCtrl from './listaHoteles.controller';
// restaurantsModule.controller('ListaHotelesCtrl', ListaHotelesCtrl);

export default restaurantsModule;