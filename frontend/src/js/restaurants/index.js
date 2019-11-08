import angular from 'angular';

let restaurantsModule = angular.module('app.restaurants',[]);

import RestaurantsConfig from './restaurants.config';
restaurantsModule.config(RestaurantsConfig);

import RestaurantsCtrl from './restaurants.controller';
restaurantsModule.controller('RestaurantsCtrl', RestaurantsCtrl);

import RestaurantsDetailsCtrl from './restaurantsDetails.controller';
restaurantsModule.controller('RestaurantsDetailsCtrl', RestaurantsDetailsCtrl);

import ListaRestaurantsCtrl from './listaRestaurants.controller';
restaurantsModule.controller('ListaRestaurantsCtrl', ListaRestaurantsCtrl);

export default restaurantsModule;