class PromotionsCtrl {
  constructor( $state, $scope, $stateParams, promotions) {
    "ngInject";
    this._$scope = $scope;
    this.promotions = promotions;
  }
}
export default PromotionsCtrl;
