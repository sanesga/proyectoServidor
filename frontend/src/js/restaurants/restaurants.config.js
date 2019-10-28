
function RestaurantsConfig($stateProvider) {
  "ngInject";

  $stateProvider

    .state("app.restaurants", {
      url: "/restaurants",
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
};
export default RestaurantsConfig;
