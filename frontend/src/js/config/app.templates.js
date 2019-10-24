angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("article/article-actions.html","<article-meta article=\"$ctrl.article\">\n\n  <span ng-show=\"$ctrl.canModify\">\n    <a class=\"btn btn-sm btn-outline-secondary\"\n      ui-sref=\"app.editor({ slug: $ctrl.article.slug })\">\n      <i class=\"ion-edit\"></i> Edit Article\n    </a>\n\n    <button class=\"btn btn-sm btn-outline-danger\"\n      ng-class=\"{disabled: $ctrl.isDeleting}\"\n      ng-click=\"$ctrl.deleteArticle()\">\n      <i class=\"ion-trash-a\"></i> Delete Article\n    </button>\n  </span>\n\n  <span ng-hide=\"$ctrl.canModify\">\n    <follow-btn user=\"$ctrl.article.author\"></follow-btn>\n    <favorite-btn article=\"$ctrl.article\">\n      {{ $ctrl.article.favorited ? \'Unfavorite\' : \'Favorite\' }} Article <span class=\"counter\">({{$ctrl.article.favoritesCount}})</span>\n    </favorite-btn>\n  </span>\n\n</article-meta>\n");
$templateCache.put("article/article.html","<div class=\"article-page\">\n\n  <!-- Banner for article title, action buttons -->\n  <div class=\"banner\">\n    <div class=\"container\">\n\n      <h1 ng-bind=\"::$ctrl.article.title\"></h1>\n\n      <div class=\"article-meta\">\n        <!-- Show author info + favorite & follow buttons -->\n        <article-actions article=\"$ctrl.article\"></article-actions>\n\n      </div>\n\n    </div>\n  </div>\n\n\n\n  <!-- Main view. Contains article html and comments -->\n  <div class=\"container page\">\n\n    <!-- Article\'s HTML & tags rendered here -->\n    <div class=\"row article-content\">\n      <div class=\"col-xs-12\">\n\n        <div ng-bind-html=\"::$ctrl.article.body\"></div>\n\n        <ul class=\"tag-list\">\n          <li class=\"tag-default tag-pill tag-outline\"\n            ng-repeat=\"tag in ::$ctrl.article.tagList\">\n            {{ tag }}\n          </li>\n        </ul>\n\n      </div>\n    </div>\n\n    <hr />\n\n    <div class=\"article-actions\">\n\n      <!-- Show author info + favorite & follow buttons -->\n      <article-actions article=\"$ctrl.article\"></article-actions>\n\n    </div>\n\n    <!-- Comments section -->\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-8 offset-md-2\">\n\n        <div show-authed=\"true\">\n          <list-errors from=\"$crl.commentForm.errors\"></list-errors>\n          <form class=\"card comment-form\" ng-submit=\"$ctrl.addComment()\">\n            <fieldset ng-disabled=\"$ctrl.commentForm.isSubmitting\">\n              <div class=\"card-block\">\n                <textarea class=\"form-control\"\n                  placeholder=\"Write a comment...\"\n                  rows=\"3\"\n                  ng-model=\"$ctrl.commentForm.body\"></textarea>\n              </div>\n              <div class=\"card-footer\">\n                <img ng-src=\"{{::$ctrl.currentUser.image}}\" class=\"comment-author-img\" />\n                <button class=\"btn btn-sm btn-primary\" type=\"submit\">\n                 Post Comment\n                </button>\n              </div>\n            </fieldset>\n          </form>\n        </div>\n\n        <div show-authed=\"false\">\n          <a ui-sref=\"app.login\">Sign in</a> or <a ui-sref=\"app.register\">sign up</a> to add comments on this article.\n        </div>\n\n        <comment ng-repeat=\"cmt in $ctrl.comments\"\n          data=\"cmt\"\n          delete-cb=\"$ctrl.deleteComment(cmt.id, $index)\">\n        </comment>\n\n\n      </div>\n    </div>\n\n  </div>\n\n\n\n</div>\n");
$templateCache.put("article/comment.html","<div class=\"card\">\n  <div class=\"card-block\">\n    <p class=\"card-text\" ng-bind=\"::$ctrl.data.body\"></p>\n  </div>\n  <div class=\"card-footer\">\n    <a class=\"comment-author\" ui-sref=\"app.profile.main({ username: $ctrl.data.author.username })\">\n      <img ng-src=\"{{::$ctrl.data.author.image}}\" class=\"comment-author-img\" />\n    </a>\n    &nbsp;\n    <a class=\"comment-author\" ui-sref=\"app.profile.main({ username: $ctrl.data.author.username })\" ng-bind=\"::$ctrl.data.author.username\">\n    </a>\n    <span class=\"date-posted\"\n      ng-bind=\"::$ctrl.data.createdAt | date: \'longDate\'\">\n    </span>\n    <span class=\"mod-options\" ng-show=\"$ctrl.canModify\">\n      <i class=\"ion-trash-a\" ng-click=\"$ctrl.deleteCb()\"></i>\n    </span>\n  </div>\n</div>\n");
$templateCache.put("auth/auth.html","<div class=\"auth-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n        <h1 class=\"text-xs-center\" ng-bind=\"::$ctrl.title\"></h1>\n        <p class=\"text-xs-center\">\n          <a ui-sref=\"app.login\"\n            ng-show=\"$ctrl.authType === \'register\'\">\n            ¿Ya posees una cuenta?\n          </a>\n          <a ui-sref=\"app.register\"\n            ng-show=\"$ctrl.authType === \'login\'\">\n            Need an account?\n          </a>\n        </p>\n        <a href=\"http://localhost:3001/api/auth/github\" style=\"font-size: 25px; color:black\"><i class=\"ion-social-github\"></i>&nbsp;Github</a>\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form ng-submit=\"$ctrl.submitForm()\"> <!--llama a submitForm-->\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\" ng-show=\"$ctrl.authType === \'register\'\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Username\"\n                ng-model=\"$ctrl.formData.username\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"email\"\n                placeholder=\"Email\"\n                ng-model=\"$ctrl.formData.email\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"password\"\n                placeholder=\"Password\"\n                ng-model=\"$ctrl.formData.password\" />\n            </fieldset>\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n              type=\"submit\"\n              ng-bind=\"::$ctrl.title\">\n            </button>\n\n          </fieldset>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>\n");
$templateCache.put("components/list-errors.html","<ul class=\"error-messages\" ng-show=\"$ctrl.errors\">\n  <div ng-repeat=\"(field, errors) in $ctrl.errors\">\n    <li ng-repeat=\"error in errors\">\n      {{field}} {{error}}\n    </li>\n  </div>\n</ul>\n");
$templateCache.put("contact/contact.html","<div class=\"alert alert-success\" style=\"text-align: center; font-size:34px; height: 100px\">\n    <strong>CONTACT FORM</strong>\n  </div>\n<contact-form></contact-form>\n");
$templateCache.put("contact/contactForm.html","<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"well well-sm\">\n        <form id=\"contactForm\" name=\"contactForm\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label for=\"inputName\">Name</label>\n                <input\n                  required\n                  ng-model=\"$ctrl.contact.inputName\"\n                  id=\"inputName\"\n                  name=\"inputName\"\n                  type=\"text\"\n                  placeholder=\"Enter name\"\n                  class=\"form-control\"\n                  ng-minlength=\"3\"\n                  ng-maxlength=\"20\"\n                  ng-model-options=\"{  debounce: 500 }\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"inputEmail\">Email Address</label>\n                <div class=\"form-group\">\n                  <input\n                    required\n                    ng-model=\"$ctrl.contact.inputMail\"\n                    name=\"inputMail\"\n                    type=\"text\"\n                    id=\"inputMail\"\n                    class=\"form-control\"\n                    placeholder=\"Enter email\"\n                  />\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label for=\"inputMessage\">Message</label>\n                <textarea\n                  style=\"resize: none;\"\n                  required\n                  ng-model=\"$ctrl.contact.inputMessage\"\n                  name=\"inputMessage\"\n                  class=\"form-control\"\n                  rows=\"9\"\n                  cols=\"25\"\n                  id=\"inputMessage\"\n                  ng-minlength=\"20\"\n                  ng-maxlength=\"100\"\n                  ng-model-options=\"{  debounce: 500 }\"\n                  placeholder=\"Please enter your message here...\"\n                ></textarea>\n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <input\n                class=\"btn btn-primary pull-right\"\n                type=\"submit\"\n                id=\"inputSubmit\"\n                name=\"inputSubmit\"\n                value=\"Send\"\n                ng-click=\"$ctrl.submitForm()\"\n              />\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("editor/editor.html","<div class=\"editor-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-10 offset-md-1 col-xs-12\">\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form>\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                ng-model=\"$ctrl.article.title\"\n                type=\"text\"\n                placeholder=\"Article Title\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                ng-model=\"$ctrl.article.description\"\n                type=\"text\"\n                placeholder=\"What\'s this article about?\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control\"\n                rows=\"8\"\n                ng-model=\"$ctrl.article.body\"\n                placeholder=\"Write your article (in markdown)\">\n              </textarea>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"Enter tags\"\n                ng-model=\"$ctrl.tagField\"\n                ng-keyup=\"$event.keyCode == 13 && $ctrl.addTag()\" />\n\n              <div class=\"tag-list\">\n                <span ng-repeat=\"tag in $ctrl.article.tagList\"\n                  class=\"tag-default tag-pill\">\n                  <i class=\"ion-close-round\" ng-click=\"$ctrl.removeTag(tag)\"></i>\n                  {{ tag }}\n                </span>\n              </div>\n            </fieldset>\n\n            <button class=\"btn btn-lg pull-xs-right btn-primary\" type=\"button\" ng-click=\"$ctrl.submit()\">\n              Publish Article\n            </button>\n\n          </fieldset>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("home/home.html","<div id=\"home\">\n  <!-- <home-slider-cmp></home-slider-cmp> componente creado para el slider de imagenes-->\n\n  <div ng-repeat=\"c in category\"> <!--botón de categoría-->\n    <button ui-sref=\"app.hotels({filter:c})\">\n      {{ c }}\n    </button>\n  </div>\n  <!-- <p>ARTÍCULOS</p> componente que muestra los artículos del usuario logeado\n  <article-list limit=\"10\" list-config=\"$ctrl.listConfig\"></article-list> -->\n\n</div>");
$templateCache.put("home/homeSlider.html","<div style=\"height: 400px\">\n        <div uib-carousel active=\"active\" interval=\"$ctrl.myInterval\" no-wrap=\"$ctrl.noWrapSlides\">\n            <div uib-slide ng-repeat=\"slide in $ctrl.slides track by slide.id\" index=\"slide.id\" style=\"height: 400px\">\n            <img ng-src=\"{{slide.image}}\" class=\"img-fluid\" style=\"filter: blur(2px);\">\n            <div class=\"carousel-caption\" style=\"padding-bottom:100px;\">\n            </div>\n            </div>\n        </div>\n    </div>\n     \n ");
$templateCache.put("hotels/detailshotels.html","<div class=\"hotel\">\n<h2>{{hotel.name}}</h2>\n<p>{{hotel.description}}</p>\n<p>{{hotel.location}}</p>\n<!-- <button ui-sref=\"app.hotels({filter:hotel.category})\">Atrás </button> -->\n</div>\n\n\n\n");
$templateCache.put("hotels/hotels.html","<div class=\"hotel\" ng-repeat=\"hotel in hotelesFiltrados\">\n    <h2 > {{hotel.name}}</h2>\n    <p id=\"location\">{{hotel.location}}</p>\n   <button ng-click=\"openDetails()\">Visit</button> \n</div>");
$templateCache.put("hotels/listaHoteles.html","<hotels-list  limit=\"5\" list-config=\"$ctrl.listConfig\"></hotels-list>\n\n");
$templateCache.put("layout/app-view.html","<app-header></app-header>\n\n<div ui-view></div>\n\n<app-footer></app-footer>\n");
$templateCache.put("layout/footer.html","<footer>\n  \n  </footer>");
$templateCache.put("layout/header.html","<nav show-authed=\"false\">\n  <!-- Links -->\n  <ul class=\"menu\">\n    <li>\n      <a ui-sref=\"app.home\">Home</a>\n    </li>\n    <li>\n      <a ui-sref=\"app.contact\">Contact</a>\n    </li>\n    <li>\n      <a ui-sref=\"app.login\">Sign in</a>\n    </li>\n    <li>\n      <a ui-sref=\"app.register\">Register</a>\n    </li>\n    <li>\n      <a ui-sref=\"app.listaHoteles\"> Lista Hoteles\n      </a>\n    </li>\n    <li>\n      <a ui-sref=\"app.users\"> Usuarios\n      </a>\n    </li>\n  </ul>\n</nav>\n\n<!--cuando estamos logeados mostrará este menú-->\n<nav show-authed=\"true\">\n  <!-- Links -->\n  <ul class=\"menu\">\n    <li>\n      <a ui-sref=\"app.home\">Home</a>\n    </li>\n    <li>\n      <a ui-sref=\"app.contact\">Contact</a>\n    </li>\n    <li>\n      <a ui-sref=\"app.settings\">\n        <i class=\"ion-gear-a\"></i>Settings\n      </a>\n    </li>\n    <li>\n      <a ui-sref=\"app.profile.main({ username: $ctrl.currentUser.username})\">\n        <img id=\"imagenMenuPerfil\" ng-src=\"{{$ctrl.currentUser.image}}\" class=\"user-pic\" />\n        {{ $ctrl.currentUser.username }}\n      </a>\n    </li>\n    <li>\n      <a ui-sref=\"app.editor\">\n        <i class=\"ion-compose\"></i>&nbsp;New Article\n      </a>\n    </li>\n    <li>\n      <a ui-sref=\"app.listaHoteles\"> Lista Hoteles\n      </a>\n    </li>\n    <li>\n      <a ui-sref=\"app.users\"> Usuarios\n      </a>\n    </li>\n  </ul>\n</nav>\n\n\n<!--header title-->\n<div id=\"title\">\n  <h1>HOTELS BOOKING</h1>\n</div>");
$templateCache.put("profile/profile-articles.html","<article-list limit=\"5\" list-config=\"$ctrl.listConfig\"></article-list>\n");
$templateCache.put("profile/profile.html","<div class=\"profile-page\">\n\n  <!-- User\'s basic info & action buttons -->\n  <div class=\"user-info\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-md-10 offset-md-1\">\n\n          <img  ng-src=\"{{::$ctrl.profile.image}}\" class=\"user-img\" />\n          <h4 ng-bind=\"::$ctrl.profile.username\"></h4>\n          <p ng-bind=\"::$ctrl.profile.bio\"></p>\n\n          <a ui-sref=\"app.settings\"\n            class=\"btn btn-sm btn-outline-secondary action-btn\"\n            ng-show=\"$ctrl.isUser\">\n            <i class=\"ion-gear-a\"></i> Edit Profile Settings\n          </a>\n\n          <follow-btn user=\"$ctrl.profile\" ng-hide=\"$ctrl.isUser\"></follow-btn>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Container where User\'s posts & favs are list w/ toggle tabs -->\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-12 col-md-10 offset-md-1\">\n\n        <!-- Tabs for switching between author articles & favorites -->\n        <!-- <div class=\"articles-toggle\">\n          <ul class=\"nav nav-pills outline-active\">\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\"\n                ui-sref-active=\"active\"\n                ui-sref=\"app.profile.main({username: $ctrl.profile.username})\">\n                My Articles\n              </a>\n            </li>\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                ui-sref-active=\"active\"\n                ui-sref=\"app.profile.favorites({username: $ctrl.profile.username})\">\n                Favorited Articles\n              </a>\n            </li>\n\n          </ul>\n        </div> -->\n\n        <!-- List of articles -->\n        <!-- <div ui-view></div> -->\n\n\n      </div>\n\n    <!-- End row & container divs -->\n    </div>\n  </div>\n\n</div>\n");
$templateCache.put("settings/settings.html","<div class=\"settings-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n\n        <h1 class=\"text-xs-center\">Your Settings</h1>\n\n        <list-errors errors=\"$ctrl.errors\"></list-errors>\n\n        <form ng-submit=\"$ctrl.submitForm()\">\n          <fieldset ng-disabled=\"$ctrl.isSubmitting\">\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\"\n                type=\"text\"\n                placeholder=\"URL of profile picture\"\n                ng-model=\"$ctrl.formData.image\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"text\"\n                placeholder=\"Username\"\n                ng-model=\"$ctrl.formData.username\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control form-control-lg\"\n                rows=\"8\"\n                placeholder=\"Short bio about you\"\n                ng-model=\"$ctrl.formData.bio\">\n              </textarea>\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"email\"\n                placeholder=\"Email\"\n                ng-model=\"$ctrl.formData.email\" />\n            </fieldset>\n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control form-control-lg\"\n                type=\"password\"\n                placeholder=\"New Password\"\n                ng-model=\"$ctrl.formData.password\" />\n            </fieldset>\n\n            <button class=\"btn btn-lg btn-primary pull-xs-right\"\n              type=\"submit\">\n              Actualizar settings\n            </button>\n\n          </fieldset>\n        </form>\n\n        <!-- Line break for logout button -->\n        <hr />\n\n       <button class=\"btn btn-outline-danger\"\n          ng-click=\"$ctrl.logout()\">\n         Log out\n        </button>\n\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("users/users.html","\n<!-- <div ng-repeat=\"user in users\">\n    <p>{{user.username}}</p>\n</div> -->\n<users-list users=\"users\"></users-list>");
$templateCache.put("components/article-helpers/article-list.html","<article-preview\n  article=\"article\"\n  ng-repeat=\"article in $ctrl.list\">\n</article-preview>\n\n<div class=\"article-preview\"\n  ng-hide=\"!$ctrl.loading\">\n  Loading articles...\n</div>\n\n<div class=\"article-preview\"\n  ng-show=\"!$ctrl.loading && !$ctrl.list.length\">\n  No articles are here... yet.\n</div>\n\n<list-pagination\n total-pages=\"$ctrl.listConfig.totalPages\"\n current-page=\"$ctrl.listConfig.currentPage\"\n ng-hide=\"$ctrl.listConfig.totalPages <= 1\">\n</list-pagination>\n");
$templateCache.put("components/article-helpers/article-meta.html","<div class=\"article-meta\">\n  <a ui-sref=\"app.profile.main({ username:$ctrl.article.author.username })\">\n    <img id=\"imgArticlePreview\" ng-src=\"{{$ctrl.article.author.image}}\" />\n  </a>\n\n  <div class=\"info\">\n    <a class=\"author\"\n      ui-sref=\"app.profile.main({ username:$ctrl.article.author.username })\"\n      ng-bind=\"$ctrl.article.author.username\">\n    </a>\n    <span class=\"date\"\n      ng-bind=\"$ctrl.article.createdAt | date: \'longDate\' \">\n    </span>\n  </div>\n\n  <ng-transclude></ng-transclude>\n</div>");
$templateCache.put("components/article-helpers/article-preview.html","<div class=\"article-preview\">\n  <article-meta article=\"$ctrl.article\">\n    <favorite-btn\n      article=\"$ctrl.article\"\n      class=\"pull-xs-right\">\n      {{$ctrl.article.favoritesCount}}\n    </favorite-btn>\n  </article-meta>\n\n  <a ui-sref=\"app.article({ slug: $ctrl.article.slug })\" class=\"preview-link\">\n    <h1 ng-bind=\"$ctrl.article.title\"></h1>\n    <p ng-bind=\"$ctrl.article.description\"></p>\n    <span>Read more...</span>\n    <ul class=\"tag-list\">\n      <li class=\"tag-default tag-pill tag-outline\"\n        ng-repeat=\"tag in $ctrl.article.tagList\">\n        {{tag}}\n      </li>\n    </ul>\n  </a>\n</div>\n");
$templateCache.put("components/article-helpers/list-pagination.html","<nav>\n  <ul class=\"pagination\">\n\n    <li class=\"page-item\"\n      ng-class=\"{active: pageNumber === $ctrl.currentPage }\"\n      ng-repeat=\"pageNumber in $ctrl.pageRange($ctrl.totalPages)\"\n      ng-click=\"$ctrl.changePage(pageNumber)\">\n\n      <a class=\"page-link\" href=\"\">{{ pageNumber }}</a>\n\n    </li>\n\n  </ul>\n</nav>\n");
$templateCache.put("components/hotels-helpers/hotels-list.html"," <hotels-preview hotel=\"hotel\" ng-repeat=\"hotel in $ctrl.list\">\n</hotels-preview> \n\n\n<list-pagination\n total-pages=\"$ctrl.listConfig.totalPages\"\n current-page=\"$ctrl.listConfig.currentPage\"\n ng-hide=\"$ctrl.listConfig.totalPages <= 1\">\n</list-pagination> \n");
$templateCache.put("components/hotels-helpers/hotels-preview.html","<div class=\"hotel\">\n        <a ui-sref=\"app.detailsHotels({slug:$ctrl.hotel.slug})\">\n                <h2 ng-bind=\"$ctrl.hotel.name\"> </h2>\n        </a>\n        <p ng-bind=\"$ctrl.hotel.location\"> </p>\n        <favorite-btn hotel=\"$ctrl.hotel\" class=\"pull-xs-right\">\n                {{$ctrl.hotel.favoritesCount}}\n        </favorite-btn>\n</div>");
$templateCache.put("components/hotels-helpers/list-pagination.html","<p>Estamos en list pagination</p>\n<nav>\n  <ul class=\"pagination\">\n    <li class=\"page-item\" ng-class=\"{active: pageNumber === $ctrl.currentPage }\"\n      ng-repeat=\"pageNumber in $ctrl.pageRange($ctrl.totalPages)\" ng-click=\"$ctrl.changePage(pageNumber)\">\n      <a class=\"page-link\" href=\"\">{{ pageNumber }}</a>\n    </li>\n  </ul>\n</nav>");
$templateCache.put("components/buttons/favorite-btn.html","\n\n<button class=\"btn btn-sm\"\n  ng-class=\"{ \'disabled\' : $ctrl.isSubmitting,\n              \'btn-outline-primary\': !$ctrl.hotels.favorited,\n              \'btn-primary\': $ctrl.hotels.favorited }\"\n  ng-click=\"$ctrl.submit()\">\n  <i class=\"ion-heart\"></i> <ng-transclude></ng-transclude>\n</button>\n\n");
$templateCache.put("components/buttons/follow-btn.html","\n\n\n<button\n  class=\"btn btn-sm action-btn\"\n  ng-class=\"{ \'disabled\': $ctrl.isSubmitting,\n              \'btn-outline-secondary\': !$ctrl.user.following,\n              \'btn-secondary\': $ctrl.user.following }\"\n  ng-click=\"$ctrl.submit()\">\n  <i class=\"ion-plus-round\"></i>\n  &nbsp;\n  {{ $ctrl.user.following ? \'Unfollow\' : \'Follow\' }} {{ $ctrl.user.username }}\n\n</button>\n\n\n");
$templateCache.put("components/users-helpers/users-list.html","<div id=\"usuarios\" ng-repeat=\"user in $ctrl.users\">\n    <img src=\"{{user.image}}\"></img>\n    <h3>{{user.username}}</h3>\n    <p>{{user.bio}}</p>\n    <p>{{user.following}}</p>\n    <follow-btn user=\"user\"></follow-btn>\n</div>");}]);