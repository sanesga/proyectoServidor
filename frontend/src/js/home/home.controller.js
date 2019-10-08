class HomeCtrl {
  constructor(AppConstants, $scope, category) {
    "ngInject";
  
    this.appName = AppConstants.appName;
    this._$scope = $scope;
    //this.hotels = hotels;

    // if (this.hotels) {
    //   var categories = new Array();
    //   var existe= false;
    //   this.hotels.forEach(hotel => {
    //     categories.forEach(category => {
    //       if (hotel.category == category) {
    //         existe=true;
    //       }
    //     });
    //     if(!existe){
    //       categories.push(hotel.category);
    //       console.log(categories);
    //     }
    //     existe=false;
    //   });
    //   $scope.categories = categories;
    // } else {
    //   $scope.hotels = "No hay hoteles";
    // }
    $scope.category=category;
  }
}

export default HomeCtrl;
