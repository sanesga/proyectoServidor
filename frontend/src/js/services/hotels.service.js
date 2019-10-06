export default class Hotels {
  constructor(AppConstants, $http, $q) {
    "ngInject";

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  getHotels() {
    return this._$http({
      url: this._AppConstants.api + "/hotels/",
      method: "GET"
    }).then(res => res.data.hotels);
  }

  getHotel(slug) {
    //console.log("ESTOY DENTRO DE GET HOTEL");
    return this._$http({
      url: this._AppConstants.api + "/hotels/" + slug,
      method: "GET"
    }).then(res => res.data.hotel); //recibo 1 hotel
    //.then(res => console.log(res.data.hotel));
  }
  getCategories() {
    return this._$http({
      url: this._AppConstants.api + "/hotels/category",
      method: 'GET',
    }).then(res => res.data.category);
  }
}
