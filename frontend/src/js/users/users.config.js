
function UsersConfig($stateProvider) {
  "ngInject";
  $stateProvider

    .state("app.users", {
      url: "/users",
      controller: "UsersCtrl",
      controllerAs: "$ctrl",
      templateUrl: "users/users.html",
      title: "Users",
      resolve: {
        users: function(User) {
          return User.getAllProfiles().then(users => users);
        }
      }
    });
};

export default UsersConfig;
