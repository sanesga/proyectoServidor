
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

    .state("app.listaHoteles", {
      url: "/listaHoteles",
      controller: "ListaHotelesCtrl",
      controllerAs: "$ctrl",
      templateUrl: "hotels/listaHoteles.html",
      title: "Lista de hoteles",
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
    })

    .state("app.hotelslist", {
      url: "/hotelslist",
      controller: "HotelsListCtrl",
      controllerAs: "$ctrl",
      templateUrl: "hotels/hotelslist.html",
      title: "Hotels List",
      resolve: {
        hotels: function(Hotels) {
          console.log("entra al config de hotelslist");
          return Hotels.getHotels().then(hotels => hotels);
        }
      }
    });
};

export default HotelsConfig;
