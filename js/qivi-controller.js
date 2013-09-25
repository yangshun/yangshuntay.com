'use strict';

angular.module('qivi', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {templateUrl: 'templates/home1.html', controller: QiviController}).
    // when('/posts', {templateUrl: 'templates/all-posts.html', controller: AllPostsCtrl}).
    // when('/:post_id', {templateUrl: 'templates/single-post.html', controller: SinglePostCtrl}).
    // when('/page/:page', {templateUrl: 'templates/landing.html', controller: LandingCtrl}).
    otherwise({redirectTo: '/'});
}]);

function QiviController($scope, $http) {



}