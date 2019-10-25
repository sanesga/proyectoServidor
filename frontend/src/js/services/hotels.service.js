export default class Hotels {
  constructor(AppConstants, $http, $q,GraphQLClient) {
    "ngInject";

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
    this._GQL = GraphQLClient;
  }

  //API REST
  query() { //esta query se usa en el hotels-list component para obtener todos los hoteles
    // Create the $http object for this request
    let request = {
      //url: this._AppConstants.api + '/hotels' + ((config.type === 'feed') ? '/feed' : ''),
      url: this._AppConstants.api + '/hotels/',
      method: 'GET',
    };
    return this._$http(request).then((res) => res.data); //nos devuelve el array de hoteles
  }


  // //GRAPHQL SIN APOLLO-CLIENT (FUNCIONA!!!!)
  // getHotels() {
  //   return this._$http({
  //     url: this._AppConstants.api + '/graphql/graphql?query={hotel{ name slug description location category }}',
  //     method: 'GET',
  //   }).then((res) => res.data.data.hotel); //obtiene todos los hoteles
  // }

  // //GRAPHQL CON APOLLO-CLIENT
  getHotels() {
    let query = `
      query getHotels {
        hotel {
          name
          slug
          description
          location
          category
        }
      }
    `;
    return this._GQL.get(query);
  }

  // //API REST
  // getHotels() {
  //   return this._$http({
  //     url: this._AppConstants.api + "/hotels/",
  //     method: "GET"
  //   }).then(res => {
  //     return res.data.hotels;
  //   });
  // }

  getHotel(slug) {
    return this._$http({
      url: this._AppConstants.api + "/hotels/" + slug,
      method: "GET"
    }) //.then(res => res.data.hotel); //recibo 1 hotel
      .then(res => res.data.hotel);
  }
  getCategories() {
    return this._$http({
      url: this._AppConstants.api + "/hotels/hotel/category",
      method: "GET"
    }).then(res => res.data.category);
  }
  //botón favoritos
  favorite(slug) {
    return this._$http({
      url: this._AppConstants.api + "/hotels/" + slug + "/favorite",
      method: "POST"
    });
  }
  //botón favoritos
  unfavorite(slug) {
    return this._$http({
      url: this._AppConstants.api + "/hotels/" + slug + "/favorite",
      method: "DELETE"
    });
  }
}
