class DetailsHotelsCtrl {
    constructor(hotel, $scope) { //esto se llama desde hotels.config (resolve)
         
        'ngInject';
        this._$scope = $scope;
        $scope.hotel = hotel;

       //para ir a otra ventana
       // $state.go('app.login');
    }
}
export default DetailsHotelsCtrl;