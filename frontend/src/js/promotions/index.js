import angular from 'angular';

let promotionsModule = angular.module('app.promotions',[]);

import PromotionsConfig from './promotions.config';
promotionsModule.config(PromotionsConfig);

import PromotionsCtrl from './promotions.controller';
promotionsModule.controller('PromotionsCtrl', PromotionsCtrl);

import PromotionsDetailsCtrl from './promotionsDetails.controller';
promotionsModule.controller('PromotionsDetailsCtrl', PromotionsDetailsCtrl);

export default promotionsModule;