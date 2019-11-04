function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Home',
    resolve: {
      category: function(Hotels) {
        return Hotels.getCategories().then(
          (category) => category
        )
      },
      events: function(Events) {
        return Events.getEvents().then(
          (event) => event
        )
      },
      restaurants: function(Restaurants) {
        return Restaurants.getRestaurants().then(
          (restaurant) => restaurant
        )
      }
    }
  })

};

export default HomeConfig;
