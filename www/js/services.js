angular.module('starter.services', [])

.factory('Players', function() {
  var things = [];
  var players = [{
    id: 0,
    name: 'Talren Silvanos',
    ac: 'AC: 16',
    hp: 'HP: 69',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    ac: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    ac: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    ac: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    ac: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return players;
    },
    stuff: function() {
      return things;
    },
    delete: function(e) {
      things.splice(things.indexOf(e), 1);
    },
    remove: function(player) {
      players.splice(players.indexOf(player), 1);
    },
    get: function(playerId) {
      for (var i = 0; i < players.length; i++) {
        if (players[i].id === parseInt(playerId)) {
          return players[i];
        }
      }
      return null;
    }
  };
});
