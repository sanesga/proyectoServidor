class ListaHotelesCtrl {
  constructor(User,hotels) {
    "ngInject";
//console.log("estamos en el controlador de listaHoteles");
  this.hotels=hotels;
  //console.log(this.hotels);
  //console.log(User.current);
  

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
