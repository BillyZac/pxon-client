var app = angular.module('app', [])

// var pxonServerUrl = 'http://localhost:3030/'
var pxonServerUrl = 'https://pxon.herokuapp.com/'

app.controller('MainController', function($scope, $http) {
  $http({
    method: 'GET',
    url: pxonServerUrl
  })
  .then(function(pxonData) {

    // Initialize the matrix with blank pixels
    var matrix = []
    for (var y=0; y<130; y++) {
      var row = []
      for (var x=0; x<150; x++) {
        var blankPixel = {
          x: x,
          y: y,
          color: "rgba(0, 0, 0, 0)",
          size: 15}
        row.push(blankPixel)
      }
      matrix.push(row)
    }

    // Put the pixels in the pxon in the matrix
    pxonData.data.pxif.pixels.forEach(function(pixel) {
      matrix[pixel.y][pixel.x] = pixel
    })

    // Testing:
    for (var y=0; y<130; y++) {
      for (var x=0; x<130; x++) {
        if (matrix[x][y].color != "rgba(0, 0, 0, 0)") {
          console.log(matrix[x][y])
        }
      }
    }

    $scope.matrix = matrix
  })
})
