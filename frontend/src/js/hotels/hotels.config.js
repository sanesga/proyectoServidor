function HotelsConfig($stateProvider) {
  "ngInject";

  $stateProvider
    .state("app.hotels", {
      url: "/hotels:filter",
      controller: "HotelsCtrl",
      controllerAs: "$ctrl",
      templateUrl: "hotels/hotels.html",
      title: "Hotels",
      resolve: {
        hotels: function(Hotels) {
          return Hotels.getHotels().then(hotels => hotels);
        }
      }
    })

    .state("app.detailsHotels", {
      url: "/hotels/:slug",
      controller: "DetailsHotelsCtrl",
      controllerAs: "$ctrl",
      templateUrl: "hotels/detailshotels.html",
      title: "Details Hotels",
      resolve: {
        hotel: function(Hotels, $stateParams) {
          //este nombre es el que recibe el controlador
          return Hotels.getHotel($stateParams.slug).then(hotel => hotel); //recibo 1 hotel
        }
      }
    });
}

export default HotelsConfig;
