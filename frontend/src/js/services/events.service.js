export default class Events {
  constructor(AppConstants, $http, $q,Prisma) {
    "ngInject";

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
    this._GQL = Prisma;
  }

 ////////////////////////////////////////////PETICIONES POR GRAPHQL//////////////////////////////////////////////

  //GRAPHQL SIN APOLLO-CLIENT
  
  // getHotels() {
  //   return this._$http({
  //     url: this._AppConstants.api + '/graphql/graphql?query={hotel{ name slug description location category }}',
  //     method: 'GET',
  //   }).then((res) => res.data.data.hotel); //obtiene todos los hoteles
  // }



  //GRAPHQL CON APOLLO-CLIENT

  getEvents() {
    let query = `
    {
    events{
      title
      pricePerPerson
      popularity
      address
      activities
    }
  }
    `;
    return this._GQL.get(query);
  }
}
