
function PromotionsConfig($stateProvider) {
  "ngInject";

  $stateProvider

  .state("app.promotions", {
    url: "/promotions",
    controller: "PromotionsCtrl",
    controllerAs: "$ctrl",
    templateUrl: "promotions/promotions.html",
    title: "Promotions",
    resolve: {
      promotions: function(Promotions) {
        return Promotions.getPromotions().then(promotions =>promotions);
      }
    }
  
  })
  .state('app.promotionsDetails', {
    url: "/promotions/:id",
    controller: 'PromotionsDetailsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'promotions/promotionsDetails.html',
    title: 'Promotions Details',
    resolve: {
      promotion: function(Promotions, $state, $stateParams) {
        return Promotions.getPromotion($stateParams.id).then(
         (data) => data.promotion
        )
      }
    }
  })
};

export default PromotionsConfig;
