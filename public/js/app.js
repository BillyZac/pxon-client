var app = angular.module('app', [])

// var pxonServerUrl = 'http://localhost:3030/'
var pxonServerUrl = 'https://pxon.herokuapp.com/'

app.controller('MainController', function($scope) {
  $scope.something = 'Foo'
})
