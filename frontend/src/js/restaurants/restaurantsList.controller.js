class RestaurantsListCtrl {
  constructor(restaurants, $scope) {
    "ngInject";

  this._$scope = $scope;
  this.restaurants = restaurants.restaurants;
  }
}
export default RestaurantsListCtrl;
