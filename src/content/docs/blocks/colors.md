---
title: Colors
---

There are three main types of color blocks:

* [a color box](#basic-color-blocks)
* [make color](#make-color)
* [split color](#split-color)

## basic color blocks

![](@assets/images/blocks/colors/basiccolorblock.png)

This is a basic color block. It has a small square shape and has a color in the middle that represents the color stored internally in this block.

If you click on the color in the middle, a pop-up appears on the screen with a table of 70 colors that you can choose from. Clicking on a new color will change the current color of your basic color block.

![](@assets/images/blocks/colors/colorblock.gif)

Each basic color block that you drag from the Colors drawer to the Blocks Editor screen will display a table with the same colors when clicked.

## make color

![](@assets/images/blocks/colors/makecolor.png)

`make color` takes in a list of 3 or 4 numbers. These numbers in this list represent values in an RGB code. RGB codes are used to make colors on the Internet. An RGB color chart is available [here](http://www.tayloredmktg.com/rgb/). This first number in this list represents the R value of the code. The second represents the G. The third represents the B. The fourth value is optional and represents the alpha value or how saturated the color is. The default alpha value is 100. Experiment with different values and see how the colors change using this block.

## split color

![](@assets/images/blocks/colors/splitcolor.png)

`split color` does the opposite of `make color`. It takes in a color: a color block, variable holding a color, or property from one of the components representing a color and returns a list of the RGB values in that color's RGB code.
