class DetailsHotelsCtrl {
    constructor(hotel, $scope) { //esto se llama desde hotels.config (resolve)
         
        'ngInject';

       // console.log("CONTROLADOR DETALLE HOTEL");
      
        this._$scope = $scope;
       
       // console.log("el hotel que recibo es");
       // console.log(hotel.name);
    
        $scope.hotel = hotel;
     
       //para ir a otra ventana
       // $state.go('app.login');

    
    }
}
export default DetailsHotelsCtrl;