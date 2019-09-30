function ContactConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.contact', {
    url: '/contact',
    controller: 'ContactCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'contact/contact.html',
    title: 'Contact',
    //resolve: {
      /*article: function(Articles, $state, $stateParams) {
        return Articles.get($stateParams.slug).then(
          (article) => article,
          (err) => $state.go('app.home')
        )
      }*/
   // }
  });
};

export default ContactConfig;
