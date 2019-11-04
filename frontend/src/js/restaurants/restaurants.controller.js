class HotelsCtrl {
  constructor(restaurants, $state, $scope, $stateParams) {
    "ngInject";

    this._$scope = $scope;
    this.restaurants = restaurants.restaurant;
    $scope.restaurants = this.restaurants;

  }
}

export default HotelsCtrl;
