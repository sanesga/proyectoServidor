class HomeCtrl {
  constructor(AppConstants, $scope, hotels) {
    "ngInject";

    console.log(hotels);

    this.appName = AppConstants.appName;
    this._$scope = $scope;

    if (hotels) {
      $scope.hotels = hotels;
    } else {
      $scope.hotels = "No hay hoteles";
    }
  }
}

export default HomeCtrl;
