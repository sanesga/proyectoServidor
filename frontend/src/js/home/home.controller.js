class HomeCtrl {
  constructor(User, Tags, AppConstants, $scope, hotels) {
    'ngInject';

   console.log(hotels);

   

    if (hotels){
      $scope.hotels = hotels;
    }else{
      $scope.hotels = "No hay hoteles";
    }

    $scope.load = function () {
        $scope.infoSect = sectors.slice(0, sectors.length + 3);
    }

    this.appName = AppConstants.appName;
    this._$scope = $scope;

    // Get list of all tags
    Tags
      .getAll()
      .then(
        (tags) => {
          this.tagsLoaded = true;
          this.tags = tags
        }
      );

    // Set current list to either feed or all, depending on auth status.
    this.listConfig = {
      type: User.current ? 'feed' : 'all'
    };

    




  }

  changeList(newList) {
    this._$scope.$broadcast('setListTo', newList);
  }


}

export default HomeCtrl;
