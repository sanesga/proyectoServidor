
function RestaurantsConfig($stateProvider) {
  "ngInject";
console.log("entra al config de restaurants");
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

};
export default RestaurantsConfig;
