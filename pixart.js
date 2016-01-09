// pixel art

// Create an event that listens for a click on a button with the `id` of `set-color`
// Take the value from the color input field and set brush-color to inputColour

$('#set-color').click(function(){
  var $inputColor = $('#colour').val();
  $('.brush-color').css("background", $inputColor);

});

function changeColor(color, pixel) {
  color = $("#colour").val();
  pixel.css("background-color", color);
}

// Draw the canvas by adding squares to body div

function createCanvas() {
  var numSquares = 2059
  for (var i = 0; i < numSquares; i++) {
    var pixelDiv = $("<div>").addClass("square");
    pixelDiv.appendTo("body");
    pixelDiv.on("mouseover", function() {
      changeColor($("#colour").val(), $(this));
    })
  };
}

createCanvas();

var pixel = document.getElementsByClassName('square');

