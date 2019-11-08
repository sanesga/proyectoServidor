import EventsConfig from "../events/events.config";

class HomeCtrl {
  constructor(AppConstants, $scope, category, events, restaurants, promotions) {
    "ngInject";

    this.appName = AppConstants.appName;
    this._$scope = $scope;
    this.category = category;
    this.events = events.events;
    this.restaurants = restaurants.restaurants;
    this.promotions = promotions;
    

    
    //ordenamos de menor a mayor precio, para mostrarlo en el home
    var k=0;
    for(var i=1;i<this.events.length;i++){
			for(var j=0;j<(this.events.length-i);j++){
				if(this.events[j].price>this.events[j+1].price){
					k=this.events[j+1];
					this.events[j+1]=this.events[j];
					this.events[j]=k;
				}
			}
    }
  }
}

export default HomeCtrl;
