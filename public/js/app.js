var app = angular.module('app', [])

// var pxonServerUrl = 'http://localhost:3030/'
var pxonServerUrl = 'https://pxon.herokuapp.com/'
var scalingFactor = 0.25 // Ratio between original pixel dimensions and the "pixelated" image we're about to show in the DOM
var pixelWidth = 50 // Using this for width and height of the resulting image

app.controller('MainController', function($scope, $http) {
  $http({
    method: 'GET',
    url: pxonServerUrl
  })
  .then(function(pxonData) {

    // Initialize the matrix with blank pixels
    var matrix = []
    for (var y=0; y<pixelWidth; y++) {
      var row = []
      for (var x=0; x<pixelWidth; x++) {
        var blankPixel = {
          x: x,
          y: y,
          color: "rgba(10, 10, 30, 0.03)",
          size: 15}
        row.push(blankPixel)
      }
      matrix.push(row)
    }

    // Put the pixels in the pxon in the matrix
    pxonData.data.pxif.pixels.forEach(function(pixel) {
      var x = Math.ceil(pixel.x * scalingFactor)
      var y = Math.ceil(pixel.y * scalingFactor)
      matrix[y][x] = pixel
    })

    // Testing:
    // for (var y=0; y<pixelWidth; y++) {
    //   for (var x=0; x<pixelWidth; x++) {
    //     if (matrix[x][y].color != "rgba(0, 0, 0, 0)") {
    //       console.log(matrix[x][y])
    //     }
    //   }
    // }

    $scope.matrix = matrix
  })
})
