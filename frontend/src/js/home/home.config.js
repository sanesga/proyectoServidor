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
      hotels: function(Hotels) {
        return Hotels.getHotels().then(
          (hotels) => hotels
        )
      }
    }
  });

};

export default HomeConfig;
