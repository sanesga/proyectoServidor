export default class Promotions {
  constructor(AppConstants, $http) {
    "ngInject";

    this._AppConstants = AppConstants;
    this._$http = $http;
  
  }


//////////////////////////////////////////PETICIONES POR API REST//////////////////////////////////////////////////

  getPromotions() {
    return this._$http({
      url: this._AppConstants.apiMoleculer+ "/promotions/",
      method: "GET"
    }).then(res => res.data);
  }
   
  getPromotion(id) {
    return this._$http({
      url: this._AppConstants.apiMoleculer + "/promotions/" + id,
      method: "GET"
    }) 
      .then(res => res.data);
  }
}
