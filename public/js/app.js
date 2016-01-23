var app = angular.module('app', [])

// var pxonServerUrl = 'http://localhost:3030/'
var pxonServerUrl = 'https://pxon.herokuapp.com/'

app.controller('MainController', function($scope, $http) {
  $http({
    method: 'GET',
    url: pxonServerUrl
  })
  .then(function(pxonData) {
    $scope.row = []
    for (var i = 0; i < 150; i++) {
      $scope.row.push({
        id: i,
        color: 'rgba(200, 0, 10, 0.1)'
      })
    }
    console.log(pxonData.data.pxif.pixels)
    // List the pixels:
    pxonData.data.pxif.pixels.forEach(function(pixel) {
      console.log('x:' + pixel.x + '  y:' + pixel.y)
      $scope.row[pixel.x].color = pixel.color
    })
  })
})
