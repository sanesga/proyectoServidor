class EventsCtrl {
  constructor(events,$state, $scope, $stateParams) {
    "ngInject";
    this._$scope = $scope;
    this.events = events.events;
    this.filter = $stateParams.filter;
    $scope.events = this.events;
  
  }
}
export default EventsCtrl;
