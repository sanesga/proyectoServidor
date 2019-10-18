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
    }).then(res =>{
      console.log("estem en get hotles",res.data.hotels);
     return  res.data.hotels
      
    } );
  }

  getHotel(slug) {
    return this._$http({
      url: this._AppConstants.api + "/hotels/" + slug,
      method: "GET"
    }).then(res => res.data.hotel); //recibo 1 hotel
    //.then(res => console.log(res.data.hotel));
  }
  getCategories() {
    return this._$http({
      url: this._AppConstants.api + "/hotels/hotel/category",
      method: 'GET',
    }).then(res => res.data.category);
  }
  //botón favoritos
  favorite(slug) {
    return this._$http({
      url: this._AppConstants.api + '/hotels/' + slug + '/favorite',
      method: 'POST'
    })
  }
//botón favoritos
  unfavorite(slug) {
    return this._$http({
      url: this._AppConstants.api + '/hotels/' + slug + '/favorite',
      method: 'DELETE'
    })
  }
}
