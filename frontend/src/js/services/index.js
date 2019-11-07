import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

import GraphQLClientService from './graphql.service';
servicesModule.service('GraphQLClient', GraphQLClientService);

import PrismaService from './prisma.service';
servicesModule.service('Prisma', PrismaService);

import UserService from './user.service';
servicesModule.service('User', UserService);

import JwtService from './jwt.service'
servicesModule.service('JWT', JwtService);

import ProfileService from './profile.service';
servicesModule.service('Profile', ProfileService);

import ArticlesService from './articles.service';
servicesModule.service('Articles', ArticlesService);

import ContactService from './contact.service';
servicesModule.service('Contact', ContactService);

import CommentsService from './comments.service';
servicesModule.service('Comments', CommentsService);

import TagsService from './tags.service';
servicesModule.service('Tags', TagsService);

import ToastrService from './toastr.service';
servicesModule.service('Toastr', ToastrService);

import HotelsService from './hotels.service';
servicesModule.service('Hotels', HotelsService);

import RestaurantsService from './restaurants.service';
servicesModule.service('Restaurants', RestaurantsService);

import EventsService from './events.service';
servicesModule.service('Events', EventsService);

import PromotionsService from './promotions.service';
servicesModule.service('Promotions', PromotionsService);


export default servicesModule;
