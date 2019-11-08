
function RestaurantsConfig($stateProvider) {
  "ngInject";
  $stateProvider

    .state("app.restaurants", {
      url: "/restaurants:filter",
      controller: "RestaurantsCtrl",
      controllerAs: "$ctrl",
      templateUrl: "restaurants/restaurants.html",
      title: "Restaurants",
      resolve: {
        restaurants: function(Restaurants) {
          return Restaurants.getRestaurants().then(restaurants =>restaurants);
        }
      }
    })

    .state('app.restaurantsDetails', {
      url: "/restaurants/:slug",
      controller: 'RestaurantsDetailsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'restaurants/restaurantsDetails.html',
      title: 'Restaurants Details',
      resolve: {
        restaurant: function(Restaurants, $state, $stateParams) {
          return Restaurants.getRestaurant($stateParams.slug).then(
           (data) => data.restaurant
          )
        }
      }
    })
    .state("app.listaRestaurants", {
      url: "/listaRestaurants",
      controller: "ListaRestaurantsCtrl",
      controllerAs: "$ctrl",
      templateUrl: "restaurants/listaRestaurants.html",
      title: "Lista de restaurantes",
      resolve: {
        restaurants: function(Restaurants) {
          return Restaurants.getRestaurants().then(restaurants => restaurants);
        }
      }
    })

};
export default RestaurantsConfig;
