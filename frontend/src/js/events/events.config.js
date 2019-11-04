
function EventsConfig($stateProvider) {
  "ngInject";

  $stateProvider

  .state("app.events", {
    url: "/events",
    controller: "EventsCtrl",
    controllerAs: "$ctrl",
    templateUrl: "events/events.html",
    title: "Events",
    resolve: {
      events: function(Events) {
        return Events.getEvents().then(events =>events);
      }
    }
  })

  .state('app.eventsDetails', {
    url: "/events/:id",
    controller: 'EventsDetailsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'events/eventsDetails.html',
    title: 'Events Details',
    resolve: {
      event: function(Events, $state, $stateParams) {
        return Events.getEvent($stateParams.id).then(
         (data) => data.event
        )
      }
    }
  })


};



export default EventsConfig;
