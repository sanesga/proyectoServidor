function HotelsConfig($stateProvider) {
    'ngInject';
    
    $stateProvider
    .state('app.hotels', {
      url: '/hotels:filter',
      controller: 'HotelssCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'hotels/hotels.html',
      title: 'Hotels',
      resolve: {
        projects: function(Hotels) {
          return Hotels.getHotels().then(
            (hotels) => hotels
          )
        }
      }
    })
    /*.state('app.detailsproject', {
      url: '/projects/:slug',
      controller: 'DetailsProjectCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'projects/detailsproj.html',
      title: 'Details Project',
      resolve: {
        project: function(Projects, $stateParams) {
          return Projects.getProject($stateParams.slug).then(
            (Projects) => Projects
          )
        }
      }
    });*/
    
  };

  export default HotelsConfig;
  