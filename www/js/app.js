angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.entry', {
    url: '/entry',
    views: {
      'tab-entry': {
        templateUrl: 'templates/tab-entry.html',
        controller: 'EntryCtrl'
      }
    }
  })

  .state('tab.init', {
    url: '/init',
    views: {
      'tab-init': {
        templateUrl: 'templates/tab-init.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.players', {
      url: '/players',
      views: {
        'tab-players': {
          templateUrl: 'templates/tab-players.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.players-detail', {
      url: '/players/:playerId',
      views: {
        'tab-players': {
          templateUrl: 'templates/players-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/entry');

});
