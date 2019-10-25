
function RestaurantsConfig($stateProvider) {
  "ngInject";

  $stateProvider

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
};
export default RestaurantsConfig;
