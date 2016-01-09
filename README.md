#PixArt!

## Objectives
A app that uses jQuery and event listeners to create an interactive web interface that will paint pixels.

### Step 1: Set Color

When you click the `#set-color` button, it changes the color of the `.brush-color` palette to the color you specify in the input field.

An event listener listens for a click on the button with the `id` of `set-color`
and uses jQuery to take the value from the color input field and make the brush swatch that color.

### Step 2: Create the Canvas

Using jQuery, a pixel div with the class `square` is appended to the body. 
An event listener is added to this div so that it changes color on mouseover to the color of the brush swatch. This is repeated 2000 times to draw the canvas.

### Step 3

- Choose a CSS colour by typing in the input field and clicking the button.
- Use your mouse to paint a picture!
