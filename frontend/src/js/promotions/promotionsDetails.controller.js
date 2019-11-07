class PromotionsDetailsCtrl {
  constructor(promotion, $scope) {
   
    "ngInject";
    this._$scope = $scope;
    this.promotion = promotion;

  }
}
export default PromotionsDetailsCtrl;
