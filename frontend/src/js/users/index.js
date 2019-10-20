import angular from 'angular';

let usersModule = angular.module('app.users',[]);

import UsersConfig from './users.config';
usersModule.config(UsersConfig);

import UsersCtrl from './users.controller';
usersModule.controller('UsersCtrl', UsersCtrl);



export default usersModule;