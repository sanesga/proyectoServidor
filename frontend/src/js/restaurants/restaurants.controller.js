class RestaurantsCtrl {
  constructor(restaurants, $state, $scope, $stateParams) {
    "ngInject";

    this._$scope = $scope;
    this.restaurants = restaurants.restaurants;
    this.filter = $stateParams.filter;
    var restaurantesFiltrados = new Array();
    this.restaurants.forEach(restaurant => {
      if (restaurant.category == this.filter) {
        restaurantesFiltrados.push(restaurant);
      }
    });
    $scope.restaurantesFiltrados = restaurantesFiltrados;
  }
}

export default RestaurantsCtrl;
