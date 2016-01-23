var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

$.get('https://pxon.firebaseapp.comx/', function (pxonData) {
  console.log('got the pxonz: ' + pxonData)
  pxonData.pxif.pixels.forEach(function(e, i, a){
    drawPixel(e.x, e.y, e.color, e.size );
  })
})

// drawPixel(50, 50, 'rgba(100, 20, 200, 0.5)', 20)

function drawPixel (x, y, color, size) {
    console.log('drawing it.')
    ctx.beginPath();
    x = ( Math.ceil(x/size) * size ) - size;
    y = ( Math.ceil(y/size) * size ) - size;
    ctx.moveTo (x, y);
    ctx.fillStyle = color;
    ctx.lineHeight = 0;

    if ( color === 'rgba(0, 0, 0, 0)' ) {
      ctx.clearRect(x,y,size,size);
    }
    else {
      ctx.fillRect(x,y,size,size);
    }

    return {
      x: x,
      y: y
    };
  };
