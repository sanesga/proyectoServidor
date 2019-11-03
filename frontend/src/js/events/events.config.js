
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
};

export default EventsConfig;
