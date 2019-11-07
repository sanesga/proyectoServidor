import angular from 'angular';

let componentsModule = angular.module('app.components', []);


import ListErrors from './list-errors.component'
componentsModule.component('listErrors', ListErrors);

import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

import FollowBtn from './buttons/follow-btn.component';
componentsModule.component('followBtn', FollowBtn);

import ArticleMeta from './article-helpers/article-meta.component';
componentsModule.component('articleMeta', ArticleMeta);

import FavoriteBtn from './buttons/favorite-btn.component';
componentsModule.component('favoriteBtn', FavoriteBtn);

import ArticlePreview from './article-helpers/article-preview.component';
componentsModule.component('articlePreview', ArticlePreview);

import ArticleList from './article-helpers/article-list.component';
componentsModule.component('articleList', ArticleList);

import ListPagination from './hotels-helpers/list-pagination.component';
componentsModule.component('listPagination', ListPagination);

import HotelsList from './hotels-helpers/hotels-list.component';
componentsModule.component('hotelsList', HotelsList);

import HotelsPreview from './hotels-helpers/hotels-preview.component';
componentsModule.component('hotelsPreview', HotelsPreview);

import UsersList from './users-helpers/users-list.component';
componentsModule.component('usersList', UsersList);

import EventsList from './events-helpers/events-list.component';
componentsModule.component('eventsList', EventsList);

import EventsDetail from './events-helpers/events-detail.component';
componentsModule.component('eventsDetail', EventsDetail);

import RestaurantsList from './restaurants-helpers/restaurants-list.component';
componentsModule.component('restaurantsList', RestaurantsList);

import RestaurantsDetail from './restaurants-helpers/restaurants-detail.component';
componentsModule.component('restaurantsDetail', RestaurantsDetail);

import PromotionsList from './promotions-helpers/promotions-list.component';
componentsModule.component('promotionsList', PromotionsList);


export default componentsModule;
