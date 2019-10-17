class FavoriteBtnCtrl {
  constructor(User, Hotels, $state) {
    'ngInject';

    this._User = User;
    this._Hotels = Hotels;
    this._$state = $state;

  }

  submit() {
    this.isSubmitting = true;

    if (!this._User.current) {
      this._$state.go('app.login'); //redirigimos a login si no hay usuario logeado
      return;
    }

    if (this.hotel.favorited) {
      this._Hotels.unfavorite(this.hotel.slug).then(
        () => {
          this.isSubmitting = false;
          this.hotel.favorited = false;
          this.hotel.favoritesCount--;
        }
      )

    } else {
      this._Hotels.favorite(this.hotel.slug).then(
        () => {
          this.isSubmitting = false;
          this.hotel.favorited = true;
          this.hotel.favoritesCount++;
        }
      )
    }

  }

}

let FavoriteBtn= {
  bindings: {
    hotel: '='
  },
  transclude: true,
  controller: FavoriteBtnCtrl,
  templateUrl: 'components/buttons/favorite-btn.html'
};

export default FavoriteBtn;
