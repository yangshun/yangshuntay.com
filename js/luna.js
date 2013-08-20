'use strict';

angular.module('luna', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {templateUrl: 'templates/landing.html', controller: LandingCtrl}).
    when('/posts', {templateUrl: 'templates/all-posts.html', controller: AllPostsCtrl}).
    when('/:post_id', {templateUrl: 'templates/single-post.html', controller: SinglePostCtrl}).
    when('/page/:page', {templateUrl: 'templates/landing.html', controller: LandingCtrl}).
    otherwise({redirectTo: '/'});
}]);

function LunaCtrl($scope, $http, $timeout) {
  console.log('luna ctrl init');
  $scope.disable_animations = !CONFIG.ENABLE_ANIMATIONS;
  $scope.all_posts_loaded = false;
  $scope.blog = { 
    title: CONFIG.BLOG_TITLE,
    nav_title: CONFIG.NAV_TITLE,
    use_disqus: CONFIG.USE_DISQUS
  }

  $http.get('content/posts.json').success(function(data) {
    $scope.posts = data;
    for (var i = 0; i < $scope.posts.length; i++) {
      $scope.posts[i].content = converter.makeHtml($scope.posts[i].content);
      var d = new Date($scope.posts[i].timestamp * 1000);
      $scope.posts[i].date = d.toString();
    }
    console.log('all posts loaded');
    $scope.all_posts_loaded = true;
    $timeout(function() {
      $scope.$broadcast('allPostsLoaded');
    }, 0);
  });
}

function LandingCtrl($scope, $routeParams) {
  console.log('landing ctrl init');
  if ($scope.$parent.all_posts_loaded) {
    getPagePosts();
  } else {
    $scope.$on('allPostsLoaded', getPagePosts);
  }
  
  function getPagePosts() {
    $scope.current_page = $routeParams.page ? parseInt($routeParams.page) : 1;
    $scope.prev_page = $scope.current_page - 1 > 0 ? $scope.current_page - 1 : undefined;
    $scope.next_page = ($scope.current_page * CONFIG.NUM_POSTS_PER_PAGE) < $scope.posts.length ? $scope.current_page + 1 : undefined;
    var starting_index = Math.max($scope.current_page - 1, 0) * CONFIG.NUM_POSTS_PER_PAGE;
    $scope.current_page_posts = $scope.posts.slice(starting_index, starting_index + CONFIG.NUM_POSTS_PER_PAGE);
    $scope.orderProp = 'timestamp';
  }

  angular.element(document.getElementById('disqus_thread')).html('');
}

function AllPostsCtrl($scope) {
  $scope.orderProp = 'timestamp';

  angular.element(document.getElementById('disqus_thread')).html('');
}

function SinglePostCtrl($scope, $routeParams) {
  
  $scope.post_loaded = false;
  $scope.newer_post_id = undefined;
  $scope.older_post_id = undefined;

  if ($scope.$parent.all_posts_loaded) {
    loadSinglePost();
  } else {
    $scope.$on('allPostsLoaded', loadSinglePost);
  }

  function loadSinglePost() {
    $scope.current_post = findPostFromPostId($routeParams.post_id);
    function findPostFromPostId(post_id) {
      for (var i = 0; i < $scope.$parent.posts.length; i++) {
        if ($scope.$parent.posts[i].post_id === post_id) {          
          $scope.post_loaded = true;
          $scope.newer_post_id = i - 1 >= 0 ? $scope.$parent.posts[i-1].post_id : undefined;
          $scope.older_post_id = i + 1 <= $scope.$parent.posts.length - 1 ? $scope.$parent.posts[i+1].post_id : undefined;
          return $scope.$parent.posts[i];
        }
      }
      return ''; // TODO: Redirect to a 404 page
    }
  }

  function loadDisqus() {
    var currentPageId = $routeParams.post_id;
    window.disqus_shortname = CONFIG.DISQUS_SHORT_NAME;
    window.disqus_identifier = currentPageId;
    window.disqus_url = 'http://' + CONFIG.SITE_DOMAIN + '/' + currentPageId;
    
    console.log(window.disqus_url);
    
    (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] ||
        document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();

    angular.element(document.getElementById('disqus_thread')).html('');
  }

  console.log('before partial loaded')
  if ($scope.$parent.blog.use_disqus) {
    loadDisqus();
  }
}