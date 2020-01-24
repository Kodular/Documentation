# Canvas

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Drawing and Animation**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">13</span>|

## Overview

A two-dimensional touch-sensitive rectangular panel on which drawing can be done and sprites can be moved.

 

The `` BackgroundColor ``, `` PaintColor ``, `` BackgroundImage ``, `` Width ``, and `` Height `` of the Canvas can be set in either the Designer or in the Blocks Editor. The `` Width `` and `` Height `` are measured in pixels and must be positive.

Any location on the Canvas can be specified as a pair of (X, Y) values, where 

 *   X is the number of pixels away from the left edge of the Canvas
*   Y is the number of pixels away from the top edge of the Canvas

.

 

There are events to tell when and where a Canvas has been touched or a `` Sprite `` (`` ImageSprite `` or `` Ball ``) has been dragged. There are also methods for drawing points, lines, and circles.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.WRITE_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#WRITE_EXTERNAL_STORAGE)


## Events

### Dragged

When the user does a drag from one point (prevX, prevY) toanother (x, y). The pair (startX, startY) indicates where theuser first touched the screen, and "draggedAnySprite" indicates whether asprite is being dragged.

[[Event('Canvas', 'Dragged', 'startX', 'startY', 'prevX', 'prevY', 'currentX', 'currentY', 'draggedAnySprite')]]

| Params | []() |
|--------|------|
|start X|<span class="chip chip-number">Number</span>|
|start Y|<span class="chip chip-number">Number</span>|
|prev X|<span class="chip chip-number">Number</span>|
|prev Y|<span class="chip chip-number">Number</span>|
|current X|<span class="chip chip-number">Number</span>|
|current Y|<span class="chip chip-number">Number</span>|
|dragged Any Sprite|<span class="chip chip-boolean">Boolean</span>|


### Flung

When a fling gesture (quick swipe) is made on the canvas: providesthe (x,y) position of the start of the fling, relative to the upperleft of the canvas. Also provides the speed (pixels per millisecond) and heading(0-360 degrees) of the fling, as well as the x velocity and y velocitycomponents of the fling's vector. The value "flungSprite" is true if a spritewas located near the the starting point of the fling gesture.

[[Event('Canvas', 'Flung', 'x', 'y', 'speed', 'heading', 'xvel', 'yvel', 'flungSprite')]]

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|
|speed|<span class="chip chip-number">Number</span>|
|heading|<span class="chip chip-number">Number</span>|
|x vel|<span class="chip chip-number">Number</span>|
|y vel|<span class="chip chip-number">Number</span>|
|flung Sprite|<span class="chip chip-boolean">Boolean</span>|


### Scaled

This event is invoked when two-finger pinches. ScaleFactor is the ratio of the average distance between two-fingers from current and previous scale event.

[[Event('Canvas', 'Scaled', 'scaleFactor')]]

| Params | []() |
|--------|------|
|scale Factor|<span class="chip chip-number">Number</span>|


### Touch Down

When the user begins touching the canvas (places finger on canvas andleaves it there): provides the (x,y) position of the touch, relativeto the upper left of the canvas

[[Event('Canvas', 'Touch Down', 'x', 'y')]]

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Touch Up

When the user stops touching the canvas (lifts finger after aTouchDown event): provides the (x,y) position of the touch, relativeto the upper left of the canvas

[[Event('Canvas', 'Touch Up', 'x', 'y')]]

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Touched

When the user touches the canvas and then immediately lifts finger: providesthe (x,y) position of the touch, relative to the upper left of the canvas. TouchedAnySpriteis true if the same touch also touched a sprite, and false otherwise.

[[Event('Canvas', 'Touched', 'x', 'y', 'touchedAnySprite')]]

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|
|touched Any Sprite|<span class="chip chip-boolean">Boolean</span>|


## Methods

### Clear

Clears anything drawn on this Canvas but not any background color or image.

[[Method('Canvas', 'Clear', False)]]

### Draw Arc

Draw an arc on Canvas, by drawing an arc from a specified oval (specified by left, top, right &amp; bottom). Start angle is 0 when heading to the right, and increase when rotate clockwise. When useCenter is true, a sector will be drawed instead of an arc. When fill is true, a filled arc (or sector) will be drawed instead of just an outline.

[[Method('Canvas', 'Draw Arc', False, 'left', 'top', 'right', 'bottom', 'startAngle', 'sweepAngle', 'useCenter', 'fill')]]

| Params | []() |
|--------|------|
|left|<span class="chip chip-number">Number</span>|
|top|<span class="chip chip-number">Number</span>|
|right|<span class="chip chip-number">Number</span>|
|bottom|<span class="chip chip-number">Number</span>|
|start Angle|<span class="chip chip-number">Number</span>|
|sweep Angle|<span class="chip chip-number">Number</span>|
|use Center|<span class="chip chip-boolean">Boolean</span>|
|fill|<span class="chip chip-boolean">Boolean</span>|


### Draw Circle

Draws a circle (filled in) with the given radius centered at the given coordinates on the canvas

[[Method('Canvas', 'Draw Circle', False, 'centerX', 'centerY', 'radius', 'fill')]]

| Params | []() |
|--------|------|
|center X|<span class="chip chip-number">Number</span>|
|center Y|<span class="chip chip-number">Number</span>|
|radius|<span class="chip chip-number">Number</span>|
|fill|<span class="chip chip-boolean">Boolean</span>|


### Draw Line

Draws a line between the given coordinates on the canvas.

[[Method('Canvas', 'Draw Line', False, 'x1', 'y1', 'x2', 'y2')]]

| Params | []() |
|--------|------|
|x1|<span class="chip chip-number">Number</span>|
|y1|<span class="chip chip-number">Number</span>|
|x2|<span class="chip chip-number">Number</span>|
|y2|<span class="chip chip-number">Number</span>|


### Draw Point

Draws a point at the given coordinates on the canvas.

[[Method('Canvas', 'Draw Point', False, 'x', 'y')]]

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Draw Polygon

Creates a polygon with with specified number of sides from a radius.

[[Method('Canvas', 'Draw Polygon', False, 'centerX', 'centerY', 'numSides', 'polyRadius', 'cornerRadius', 'rotation', 'fill')]]

| Params | []() |
|--------|------|
|center X|<span class="chip chip-number">Number</span>|
|center Y|<span class="chip chip-number">Number</span>|
|num Sides|<span class="chip chip-number">Number</span>|
|poly Radius|<span class="chip chip-number">Number</span>|
|corner Radius|<span class="chip chip-number">Number</span>|
|rotation|<span class="chip chip-number">Number</span>|
|fill|<span class="chip chip-boolean">Boolean</span>|


### Draw Shape

Draws a shape on the canvas. pointList should be a list contains sub-lists with two number which represents a coordinate. The first point and last point does not need to be the same. e.g. ((x1 y1) (x2 y2) (x3 y3)) When fill is true, the shape will be filled.

[[Method('Canvas', 'Draw Shape', False, 'pointList', 'fill')]]

| Params | []() |
|--------|------|
|point List|<span class="chip chip-list">List</span>|
|fill|<span class="chip chip-boolean">Boolean</span>|


### Draw Text

Draws the specified text relative to the specified coordinates using the values of the FontSize and TextAlignment properties.

[[Method('Canvas', 'Draw Text', False, 'text', 'x', 'y')]]

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Draw Text At Angle

Draws the specified text starting at the specified coordinates at the specified angle using the values of the FontSize and TextAlignment properties.

[[Method('Canvas', 'Draw Text At Angle', False, 'text', 'x', 'y', 'angle')]]

| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|
|angle|<span class="chip chip-number">Number</span>|


### Get Background Pixel Color

<span class="chip chip-number">Returns: <i>Number</i></span> 

Gets the color of the specified point. This includes the background and any drawn points, lines, or circles but not sprites.

[[Method('Canvas', 'Get Background Pixel Color', True, 'x', 'y')]]

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Get Pixel Color

<span class="chip chip-number">Returns: <i>Number</i></span> 

Gets the color of the specified point.

[[Method('Canvas', 'Get Pixel Color', True, 'x', 'y')]]

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Save

<span class="chip chip-text">Returns: <i>Text</i></span> 

Saves a picture of this Canvas to the device's external storage. If an error occurs, the Screen's ErrorOccurred event will be called.

[[Method('Canvas', 'Save', True)]]

### Save As

<span class="chip chip-text">Returns: <i>Text</i></span> 

Saves a picture of this Canvas to the device's external storage in the file named fileName. fileName must end with one of .jpg, .jpeg, or .png, which determines the file type.

[[Method('Canvas', 'Save As', True, 'fileName')]]

| Params | []() |
|--------|------|
|file Name|<span class="chip chip-text">Text</span>|


### Set Background Pixel Color

Sets the color of the specified point. This differs from DrawPoint by having an argument for color.

[[Method('Canvas', 'Set Background Pixel Color', False, 'x', 'y', 'color')]]

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|


## Properties

### Background Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The color of the canvas background.

[[PropertyBlockGetterAndSetter('Canvas', 'Background Color')]]

### Background Image

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The name of a file containing the background image for the canvas

[[PropertyBlockGetterAndSetter('Canvas', 'Background Image')]]

### Extend Moves Outside Canvas

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Determines whether moves can extend beyond the canvas borders. Default is false. This should normally be false, and the property is provided for backwards compatibility.

[[PropertyBlockGetterAndSetter('Canvas', 'Extend Moves Outside Canvas')]]

### Font Bold

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

### Font Italic

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

### Font Size

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>14.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The font size of text drawn on the canvas.

[[PropertyBlockGetterAndSetter('Canvas', 'Font Size')]]

### Font Typeface

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

### Font Typeface Import

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

<small>Available as ^^Advanced^^ Property</small>

Set a custom font.

[[PropertyBlockGetterAndSetter('Canvas', 'Font Typeface Import')]]

### Line Width

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>2.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The width of lines drawn on the canvas.

[[PropertyBlockGetterAndSetter('Canvas', 'Line Width')]]

### Paint Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The color in which lines are drawn

[[PropertyBlockGetterAndSetter('Canvas', 'Paint Color')]]

### Text Alignment

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Determines the alignment of the text drawn by DrawText() or DrawAngle() with respect to the point specified by that command: point at the left of the text, point at the center of the text, or point at the right of the text.

[[PropertyBlockGetterAndSetter('Canvas', 'Text Alignment')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Returns true iff the component is visible.

[[PropertyBlockGetterAndSetter('Canvas', 'Visible')]]

### Column

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Column property getter method.

### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Set the canvas heightThe height can only be set to &gt;0 or -1 (automatic) or -2 (fill parent) orto a value less then or equal to LENGTH_PERCENT_TAG (which is laterconverted to pixels.

[[PropertyBlockGetterAndSetter('Canvas', 'Height')]]

### Height Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's vertical height as a percentageof the height of its parent Component.

[[PropertyBlockGetterAndSetter('Canvas', 'Height Percent')]]

### Row

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - 

Row property getter method.

### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Set the canvas widthThe width can only be set to &gt;0 or -1 (automatic) or -2 (fill parent)or to a value less then or equal to LENGTH_PERCENT_TAG (which is laterconverted to pixels.

[[PropertyBlockGetterAndSetter('Canvas', 'Width')]]

### Width Percent

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

[[PropertyBlockGetterAndSetter('Canvas', 'Width Percent')]]