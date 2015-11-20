angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Players) {

  $scope.things = Players.stuff();
  $scope.del = function(e) {
    Players.delete(e);
  };
})

.controller('ChatsCtrl', function($scope, Players) {

  $scope.players = Players.all();
  $scope.remove = function(player) {
    Players.remove(player);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Players) {
  $scope.player = Players.get($stateParams.playerId);
})

.controller('EntryCtrl', function($scope, Players) {
  $scope.things = Players.stuff();
  $scope.addEntity = function(e) {
    $scope.things.push(e);
  };
});
