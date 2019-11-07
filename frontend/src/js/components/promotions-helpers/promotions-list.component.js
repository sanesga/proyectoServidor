class PromotionsListCtrl {
  constructor($scope, $state) {
    "ngInject";
    this._$scope = $scope;
  }
}

let PromotionsList = {
  bindings: {
    promotions: "="
  },
  controller: PromotionsListCtrl,
  templateUrl: "components/promotions-helpers/promotions-list.html"
};
export default PromotionsList;
