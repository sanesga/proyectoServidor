class EventsListCtrl {

  constructor($scope, $state){
    "ngInject";

    this._$scope = $scope;

    // this._$scope.openDetails = function (id) {
    //   this.id=id;
    //   $state.go("app.eventDetails", { id: this.id});
    // };
  }
}




let EventsList = {
  bindings: {
    events: '='
  },
  controller: EventsListCtrl,
  templateUrl: 'components/events-helpers/events-list.html'
};
export default EventsList;
