class HotelsCtrl {
  constructor(hotels, $state, $scope, $stateParams, $filter) {
    "ngInject";

    this._$scope = $scope;
    this.hotels = hotels;
    this.filter = $stateParams.filter;
    


    var hotelesFiltrados = new Array();
    this.hotels.forEach(hotel => {
      if (hotel.category == this.filter) {
        hotelesFiltrados.push(hotel);
      }
    });
    $scope.hotelesFiltrados = hotelesFiltrados;
    console.log("hoteles filtrados");
    console.log(hotelesFiltrados);

    this._$scope.openDetails = function(){
      console.log("entra a details");
      console.log("slug");
      $state.go('app.detailsHotels', {slug: this.hotel['slug'] });
      console.log(this.hotel['slug']);
  };
  }
}

export default HotelsCtrl;
