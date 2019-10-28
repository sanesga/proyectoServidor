class HotelsCtrl {
  constructor(hotels, $state, $scope, $stateParams) {
    "ngInject";

    this._$scope = $scope;
    //this.hotels = hotels.hotel; SI VAMOS POR GRAPHQL

    this.hotels=hotels;

    this.filter = $stateParams.filter;

    var hotelesFiltrados = new Array();
    this.hotels.forEach(hotel => {
      if (hotel.category == this.filter) {
        hotelesFiltrados.push(hotel);
      }
    });
    $scope.hotelesFiltrados = hotelesFiltrados;

    this._$scope.openDetails = function () {
      $state.go("app.detailsHotels", { slug: this.hotel["slug"] });
    };
  }
}

export default HotelsCtrl;
