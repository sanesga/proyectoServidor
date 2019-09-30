export default class Contact {
  constructor(AppConstants, $http) {
    "ngInject";

    this._AppConstants = AppConstants;
    this._$http = $http;

    //cridar a send i al servidor
  }

  sendMail(message) {
    console.log("entra a send mail en contact.service.js en el backend");
    return this._$http({
      url: `${this._AppConstants.api}/contact`,
      method: 'POST',
      data: message
    }).then(success)
    .catch(fail);
    function success() {
      return true;
    }
    function fail() {
      return false;
    }
  }
}
