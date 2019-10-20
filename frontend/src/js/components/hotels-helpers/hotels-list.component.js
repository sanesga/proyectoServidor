class HotelsListCtrl{
  constructor(Hotels, $scope) {
    'ngInject';

    this._Hotels = Hotels;
    console.log("hoteles" + this._Hotels);

    this.setListTo(this.listConfig);


    $scope.$on('setListTo', (ev, newList) => {
      this.setListTo(newList);
    });

    $scope.$on('setPageTo', (ev, pageNumber) => {
      this.setPageTo(pageNumber);
    });

  }
  setListTo(newList) {
    // Set the current list to an empty array
    this.list = [];

    // Set listConfig to the new list's config
    this.hotels = newList;

    this.runQuery();
  }

  setPageTo(pageNumber) {
    this.hotels.currentPage = pageNumber;

    this.runQuery();
  }


 runQuery() {
    // Show the loading indicator
    this.loading = true;
    this.hotels = this.listConfig || {};

    // Create an object for this query
    let queryConfig = {
      type: this.hotels.type || undefined,
      filters: this.hotels.filters || {}
    };

    // Set the limit filter from the component's attribute
    queryConfig.filters.limit = this.limit;

    // If there is no page set, set page as 1
    if (!this.hotels.currentPage) {
      this.hotels.currentPage = 1;
    }

    // Add the offset filter
    //queryConfig.filters.offset = (this.limit * (this.listConfig.currentPage - 1));
    queryConfig.filters.offset = 0;

    // Run the query
    this._Hotels
      .query(queryConfig)
      .then(
        (res) => {
          this.loading = false;

          // Update list and total pages
          this.list = res.hotels;
          this.hotels.totalPages = Math.ceil(res.articlesCount / this.limit);
        }
      );
  }
}


let HotelsList = {
  bindings: {
    hotels: '='
  },
  templateUrl: 'components/hotels-helpers/hotels-list.html'
};
export default HotelsList;
