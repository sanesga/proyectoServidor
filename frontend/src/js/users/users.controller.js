class UsersCtrl {
  constructor(users,$scope) {
    "ngInject";
    this._$scope = $scope;
    this._$scope.users = users;
    
  }
}
export default UsersCtrl;
