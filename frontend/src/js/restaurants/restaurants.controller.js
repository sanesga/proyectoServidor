class HotelsCtrl {
  constructor(restaurants, $state, $scope, $stateParams) {
    "ngInject";

    this._$scope = $scope;
    this.restaurants = restaurants.restaurant;
    //console.log(this.restaurants);
    

    this.filter = $stateParams.filter;

    // var hotelesFiltrados = new Array();
    // this.hotels.forEach(hotel => {
    //   if (hotel.category == this.filter) {
    //     hotelesFiltrados.push(hotel);
    //   }
    // });
    //$scope.hotelesFiltrados = hotelesFiltrados;
    $scope.restaurants = this.restaurants;

    // this._$scope.openDetails = function () {
    //   $state.go("app.detailsHotels", { slug: this.hotel["slug"] });
    // };
  }
}

export default HotelsCtrl;
