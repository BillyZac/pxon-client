var app = angular.module('app', [])

// var pxonServerUrl = 'http://localhost:3030/'
var pxonServerUrl = 'https://pxon.herokuapp.com/'

app.controller('MainController', function($scope, $http) {
  $http({
    method: 'GET',
    url: pxonServerUrl
  })
  .then(function(pxonData) {
    var matrix = []

    for (var y=0; y<130; y++) {
      var row = []
      for (var x=0; x<130; x++) {
        var blankPixel = {
          x: x,
          y: y,
          color: "rgba(0, 80, 30, 0.1)",
          size: 15}
        row.push(blankPixel)
      }
      matrix.push(row)
    }

    // var i = 0
    // pxonData.data.pxif.pixels.forEach(function(pixel) {
    //   i++
    //   matrix[pixel.y][pixel.y] = pixel
    // })

    // Testing:
    // for (var y=0; y<130; y++) {
    //   for (var x=0; x<130; x++) {
    //     if (matrix[x][y].color != "rgba(0, 0, 0, 0)") {
    //       console.log(matrix[x][y])
    //     }
    //   }
    // }

    $scope.matrix = matrix
  })
})
