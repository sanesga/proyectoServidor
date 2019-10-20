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


export default componentsModule;
