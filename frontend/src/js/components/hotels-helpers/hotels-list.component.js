
let HotelsList = {
  bindings: {
    hotels: '='
  },
  templateUrl: 'components/hotels-helpers/hotels-list.html'
};
console.log("estamos en el controlador del componente");
console.log(HotelsList.bindings.hotels);

export default HotelsList;
