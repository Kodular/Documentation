# Canvas

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Drawing and Animation|13|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_<p>A two-dimensional touch-sensitive rectangular panel on which drawing can be done and sprites can be moved.</p> <p>The <code>BackgroundColor</code>, <code>PaintColor</code>, <code>BackgroundImage</code>, <code>Width</code>, and <code>Height</code> of the Canvas can be set in either the Designer or in the Blocks Editor.  The <code>Width</code> and <code>Height</code> are measured in pixels and must be positive.</p><p>Any location on the Canvas can be specified as a pair of (X, Y) values, where <ul> <li>X is the number of pixels away from the left edge of the Canvas</li><li>Y is the number of pixels away from the top edge of the Canvas</li></ul>.</p> <p>There are events to tell when and where a Canvas has been touched or a <code>Sprite</code> (<code>ImageSprite</code> or <code>Ball</code>) has been dragged.  There are also methods for drawing points, lines, and circles.</p>_

## Events

### Dragged

[[Event('Canvas', 'Dragged', 'startX startY prevX prevY currentX currentY draggedAnySprite')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |start X|`number`|
    |start Y|`number`|
    |prev X|`number`|
    |prev Y|`number`|
    |current X|`number`|
    |current Y|`number`|
    |dragged Any Sprite|`boolean`|


_When the user does a drag from one point (prevX, prevY) to
 another (x, y).  The pair (startX, startY) indicates where the
 user first touched the screen, and "draggedAnySprite" indicates whether a
 sprite is being dragged._

### Flung

[[Event('Canvas', 'Flung', 'x y speed heading xvel yvel flungSprite')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|
    |speed|`number`|
    |heading|`number`|
    |x vel|`number`|
    |y vel|`number`|
    |flung Sprite|`boolean`|


_When a fling gesture (quick swipe) is made on the canvas: provides
 the (x,y) position of the start of the fling, relative to the upper
 left of the canvas. Also provides the speed (pixels per millisecond) and heading
 (0-360 degrees) of the fling, as well as the x velocity and y velocity
 components of the fling's vector. The value "flungSprite" is true if a sprite
 was located near the the starting point of the fling gesture._

### Scaled

[[Event('Canvas', 'Scaled', 'scaleFactor')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |scale Factor|`number`|


_This event is invoked when two-finger pinches. ScaleFactor is the ratio of the average distance between two-fingers from current and previous scale event._

### Touch Down

[[Event('Canvas', 'Touch Down', 'x y')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|


_When the user begins touching the canvas (places finger on canvas and
 leaves it there): provides the (x,y) position of the touch, relative
 to the upper left of the canvas_

### Touch Up

[[Event('Canvas', 'Touch Up', 'x y')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|


_When the user stops touching the canvas (lifts finger after a
 TouchDown event): provides the (x,y) position of the touch, relative
 to the upper left of the canvas_

### Touched

[[Event('Canvas', 'Touched', 'x y touchedAnySprite')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|
    |touched Any Sprite|`boolean`|


_When the user touches the canvas and then immediately lifts finger: provides
 the (x,y) position of the touch, relative to the upper left of the canvas.  TouchedAnySprite
 is true if the same touch also touched a sprite, and false otherwise._

## Methods

### Clear

[[Method('Canvas', 'Clear', false)]]

_Clears anything drawn on this Canvas but not any background color or image._

### DrawArc

[[Method('Canvas', 'DrawArc', false, 'left top right bottom startAngle sweepAngle useCenter fill')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |left|`number`|
    |top|`number`|
    |right|`number`|
    |bottom|`number`|
    |start Angle|`number`|
    |sweep Angle|`number`|
    |use Center|`boolean`|
    |fill|`boolean`|


_Draw an arc on Canvas, by drawing an arc from a specified oval (specified by left, top, right & bottom). Start angle is 0 when heading to the right, and increase when rotate clockwise. When useCenter is true, a sector will be drawed instead of an arc. When fill is true, a filled arc (or sector) will be drawed instead of just an outline._

### DrawCircle

[[Method('Canvas', 'DrawCircle', false, 'centerX centerY radius fill')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |center X|`number`|
    |center Y|`number`|
    |radius|`number`|
    |fill|`boolean`|


_Draws a circle (filled in) with the given radius centered at the given coordinates on the canvas_

### DrawLine

[[Method('Canvas', 'DrawLine', false, 'x1 y1 x2 y2')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x1|`number`|
    |y1|`number`|
    |x2|`number`|
    |y2|`number`|


_Draws a line between the given coordinates on the canvas._

### DrawPoint

[[Method('Canvas', 'DrawPoint', false, 'x y')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|


_Draws a point at the given coordinates on the canvas._

### DrawPolygon

[[Method('Canvas', 'DrawPolygon', false, 'centerX centerY numSides polyRadius cornerRadius rotation fill')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |center X|`number`|
    |center Y|`number`|
    |num Sides|`number`|
    |poly Radius|`number`|
    |corner Radius|`number`|
    |rotation|`number`|
    |fill|`boolean`|


_Creates a polygon with with specified number of sides from a radius._

### DrawShape

[[Method('Canvas', 'DrawShape', false, 'pointList fill')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |point List|`list`|
    |fill|`boolean`|


_Draws a shape on the canvas. pointList should be a list contains sub-lists with two number which represents a coordinate. The first point and last point does not need to be the same. e.g. ((x1 y1) (x2 y2) (x3 y3)) When fill is true, the shape will be filled._

### DrawText

[[Method('Canvas', 'DrawText', false, 'text x y')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |text|`text`|
    |x|`number`|
    |y|`number`|


_Draws the specified text relative to the specified coordinates using the values of the FontSize and TextAlignment properties._

### DrawTextAtAngle

[[Method('Canvas', 'DrawTextAtAngle', false, 'text x y angle')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |text|`text`|
    |x|`number`|
    |y|`number`|
    |angle|`number`|


_Draws the specified text starting at the specified coordinates at the specified angle using the values of the FontSize and TextAlignment properties._

### GetBackgroundPixelColor

[[Method('Canvas', 'GetBackgroundPixelColor', true, 'x y')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|


_Gets the color of the specified point. This includes the background and any drawn points, lines, or circles but not sprites._

### GetPixelColor

[[Method('Canvas', 'GetPixelColor', true, 'x y')]]

{>>Returns `number`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|


_Gets the color of the specified point._

### Save

[[Method('Canvas', 'Save', true)]]

{>>Returns `text`<<}

_Saves a picture of this Canvas to the device's external storage. If an error occurs, the Screen's ErrorOccurred event will be called._

### SaveAs

[[Method('Canvas', 'SaveAs', true, 'fileName')]]

{>>Returns `text`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |file Name|`text`|


_Saves a picture of this Canvas to the device's external storage in the file named fileName. fileName must end with one of .jpg, .jpeg, or .png, which determines the file type._

### SetBackgroundPixelColor

[[Method('Canvas', 'SetBackgroundPixelColor', false, 'x y color')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|
    |color|`number`|


_Sets the color of the specified point. This differs from DrawPoint by having an argument for color._

## Properties

### Background Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Canvas', 'Background Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFFFFFFFF|

_The color of the canvas background._

### Background Image

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Canvas', 'Background Image')]]

| Type |
|:----:|
|text|

_The name of a file containing the background image for the canvas_

### Extend Moves Outside Canvas

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Canvas', 'Extend Moves Outside Canvas')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Determines whether moves can extend beyond the canvas borders.   Default is false. This should normally be false, and the property is provided for backwards compatibility._

### Font Bold

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Canvas', 'Font Bold')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_No description available_

### Font Italic

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Canvas', 'Font Italic')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_No description available_

### Font Size

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Canvas', 'Font Size')]]

| Type | Default |
|:----:|:-------:|
|number|14.0|

_The font size of text drawn on the canvas._

### Font Typeface

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Canvas', 'Font Typeface')]]

| Type | Default |
|:----:|:-------:|
|number|0|

_No description available_

### Font Typeface Import

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Canvas', 'Font Typeface Import')]]

| Type |
|:----:|
|text|

_Set a custom font._

### Line Width

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Canvas', 'Line Width')]]

| Type | Default |
|:----:|:-------:|
|number|2.0|

_The width of lines drawn on the canvas._

### Paint Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Canvas', 'Paint Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

_The color in which lines are drawn_

### Text Alignment

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Canvas', 'Text Alignment')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_Determines the alignment of the text drawn by DrawText() or DrawAngle() with respect to the point specified by that command: point at the left of the text, point at the center of the text, or point at the right of the text._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Canvas', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Canvas', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Canvas', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Set the canvas height

 The height can only be set to >0 or -1 (automatic) or -2 (fill parent) or
 to a value less then or equal to LENGTH_PERCENT_TAG (which is later
 converted to pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Canvas', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Canvas', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Canvas', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Set the canvas width

 The width can only be set to >0 or -1 (automatic) or -2 (fill parent)
 or to a value less then or equal to LENGTH_PERCENT_TAG (which is later
 converted to pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Canvas', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._