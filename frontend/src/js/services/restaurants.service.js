export default class Restaurants {
  constructor(AppConstants, $http, $q,GraphQLClient) {
    "ngInject";
    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
    this._GQL = GraphQLClient;
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

  getRestaurants() {
    let query = `
      query getRestaurants {
        restaurants {
          slug
          name
          description
          location
          category
        }
      }
    `;
    return this._GQL.get(query);
  }

  getRestaurant(slug) {
    let query = `
    {
    restaurant(slug:"${slug}"){
      name
      description
      location
      category
    }
  }
    `;
    return this._GQL.get(query);
  }
 }
