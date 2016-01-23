var app = angular.module('app', [])

// var pxonServerUrl = 'http://localhost:3030/'
var pxonServerUrl = 'https://pxon.herokuapp.com/'


app.controller('MainController', function($scope) {
  $scope.row = []
  for (var i = 0; i < 10; i++) {
    $scope.row.push({
      id: 'pixel-' + i,
      color: 'tomato'
    })
  }
})
