class RestaurantsListCtrl {
  constructor($scope) {
    "ngInject";
    this._$scope = $scope;
    
  }
}

let RestaurantsList = {
  bindings: {
    restaurants: "="
  },
  controller: RestaurantsListCtrl,
  templateUrl: "components/restaurants-helpers/restaurants-list.html"
};
export default RestaurantsList;
