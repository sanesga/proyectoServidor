class DetailsHotelsCtrl {
  constructor(hotel, $scope) {
    //esto se llama desde hotels.config (resolve)
    
    "ngInject";
    this._$scope = $scope;
    $scope.hotel = hotel;

    this._$scope.atras = function() {
      $state.go("app.hotels", { filter: this.hotel.category });
    };
  }
}
export default DetailsHotelsCtrl;
