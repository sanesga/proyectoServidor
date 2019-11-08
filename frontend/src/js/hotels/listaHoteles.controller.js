class ListaHotelesCtrl {
  constructor(User,hotels) {
    "ngInject";
  this.hotels=hotels;
 
 // Set current list to either feed or all, depending on auth status.
 this.listConfig = {
  type: User.current ? 'feed' : 'all'
};

  }
  changeList(newList) {
    this._$scope.$broadcast('setListTo', newList);
  }

}

export default ListaHotelesCtrl;
