class HotelsCtr {
    constructor(hotels,$state, $scope, $stateParams) {
        'ngInject';

        this._$scope = $scope;
        this.hotels = hotels;
        
    }
        showHotels(category) {
            var hotelesFiltrados= new Array();
            this.hotels.forEach(hotel => {
              if(hotel.category==category){
                hotelesFiltrados.push(hotel);
              }
            });
            $scope.hotelesFiltrados=hotelesFiltrados;
          } 
    
}

export default HotelsCtr;
  