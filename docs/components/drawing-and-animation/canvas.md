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

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Dragged%22,%20%22params%22:%20%5B%22start%20X%22,%20%22start%20Y%22,%20%22prev%20X%22,%20%22prev%20Y%22,%20%22current%20X%22,%20%22current%20Y%22,%20%22dragged%20Any%20Sprite%22%5D%7D"></div>

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

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Flung%22,%20%22params%22:%20%5B%22x%22,%20%22y%22,%20%22speed%22,%20%22heading%22,%20%22x%20vel%22,%20%22y%20vel%22,%20%22flung%20Sprite%22%5D%7D"></div>

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

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Scaled%22,%20%22params%22:%20%5B%22scale%20Factor%22%5D%7D"></div>

| Params | []() |
|--------|------|
|scale Factor|<span class="chip chip-number">Number</span>|


### Touch Down

When the user begins touching the canvas (places finger on canvas andleaves it there): provides the (x,y) position of the touch, relativeto the upper left of the canvas

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Touch%20Down%22,%20%22params%22:%20%5B%22x%22,%20%22y%22%5D%7D"></div>

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Touch Up

When the user stops touching the canvas (lifts finger after aTouchDown event): provides the (x,y) position of the touch, relativeto the upper left of the canvas

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Touch%20Up%22,%20%22params%22:%20%5B%22x%22,%20%22y%22%5D%7D"></div>

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Touched

When the user touches the canvas and then immediately lifts finger: providesthe (x,y) position of the touch, relative to the upper left of the canvas. TouchedAnySpriteis true if the same touch also touched a sprite, and false otherwise.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Touched%22,%20%22params%22:%20%5B%22x%22,%20%22y%22,%20%22touched%20Any%20Sprite%22%5D%7D"></div>

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|
|touched Any Sprite|<span class="chip chip-boolean">Boolean</span>|


## Methods

### Clear

Clears anything drawn on this Canvas but not any background color or image.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Clear%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Draw Arc

Draw an arc on Canvas, by drawing an arc from a specified oval (specified by left, top, right &amp; bottom). Start angle is 0 when heading to the right, and increase when rotate clockwise. When useCenter is true, a sector will be drawed instead of an arc. When fill is true, a filled arc (or sector) will be drawed instead of just an outline.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Draw%20Arc%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22left%22,%20%22top%22,%20%22right%22,%20%22bottom%22,%20%22start%20Angle%22,%20%22sweep%20Angle%22,%20%22use%20Center%22,%20%22fill%22%5D%7D"></div>


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

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Draw%20Circle%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22center%20X%22,%20%22center%20Y%22,%20%22radius%22,%20%22fill%22%5D%7D"></div>


| Params | []() |
|--------|------|
|center X|<span class="chip chip-number">Number</span>|
|center Y|<span class="chip chip-number">Number</span>|
|radius|<span class="chip chip-number">Number</span>|
|fill|<span class="chip chip-boolean">Boolean</span>|


### Draw Line

Draws a line between the given coordinates on the canvas.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Draw%20Line%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22x1%22,%20%22y1%22,%20%22x2%22,%20%22y2%22%5D%7D"></div>


| Params | []() |
|--------|------|
|x1|<span class="chip chip-number">Number</span>|
|y1|<span class="chip chip-number">Number</span>|
|x2|<span class="chip chip-number">Number</span>|
|y2|<span class="chip chip-number">Number</span>|


### Draw Point

Draws a point at the given coordinates on the canvas.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Draw%20Point%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22x%22,%20%22y%22%5D%7D"></div>


| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Draw Polygon

Creates a polygon with with specified number of sides from a radius.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Draw%20Polygon%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22center%20X%22,%20%22center%20Y%22,%20%22num%20Sides%22,%20%22poly%20Radius%22,%20%22corner%20Radius%22,%20%22rotation%22,%20%22fill%22%5D%7D"></div>


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

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Draw%20Shape%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22point%20List%22,%20%22fill%22%5D%7D"></div>


| Params | []() |
|--------|------|
|point List|<span class="chip chip-list">List</span>|
|fill|<span class="chip chip-boolean">Boolean</span>|


### Draw Text

Draws the specified text relative to the specified coordinates using the values of the FontSize and TextAlignment properties.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Draw%20Text%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22text%22,%20%22x%22,%20%22y%22%5D%7D"></div>


| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Draw Text At Angle

Draws the specified text starting at the specified coordinates at the specified angle using the values of the FontSize and TextAlignment properties.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Draw%20Text%20At%20Angle%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22text%22,%20%22x%22,%20%22y%22,%20%22angle%22%5D%7D"></div>


| Params | []() |
|--------|------|
|text|<span class="chip chip-text">Text</span>|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|
|angle|<span class="chip chip-number">Number</span>|


### Get Background Pixel Color

<span class="chip chip-number">Returns: <i>Number</i></span> 

Gets the color of the specified point. This includes the background and any drawn points, lines, or circles but not sprites.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Get%20Background%20Pixel%20Color%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22x%22,%20%22y%22%5D%7D"></div>


| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Get Pixel Color

<span class="chip chip-number">Returns: <i>Number</i></span> 

Gets the color of the specified point.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Get%20Pixel%20Color%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22x%22,%20%22y%22%5D%7D"></div>


| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Save

<span class="chip chip-text">Returns: <i>Text</i></span> 

Saves a picture of this Canvas to the device's external storage. If an error occurs, the Screen's ErrorOccurred event will be called.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Save%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Save As

<span class="chip chip-text">Returns: <i>Text</i></span> 

Saves a picture of this Canvas to the device's external storage in the file named fileName. fileName must end with one of .jpg, .jpeg, or .png, which determines the file type.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Save%20As%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22file%20Name%22%5D%7D"></div>


| Params | []() |
|--------|------|
|file Name|<span class="chip chip-text">Text</span>|


### Set Background Pixel Color

Sets the color of the specified point. This differs from DrawPoint by having an argument for color.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Set%20Background%20Pixel%20Color%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22x%22,%20%22y%22,%20%22color%22%5D%7D"></div>


| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|
|color|<span class="chip chip-number">Number</span>|


## Properties

### Background Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #FFFFFF;">Default: <i>#FFFFFFFF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The color of the canvas background.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Background%20Color%22,%20%22getter%22:%20false%7D"></div>


### Background Image

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The name of a file containing the background image for the canvas

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Background%20Image%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Background%20Image%22,%20%22getter%22:%20false%7D"></div>


### Extend Moves Outside Canvas

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Determines whether moves can extend beyond the canvas borders. Default is false. This should normally be false, and the property is provided for backwards compatibility.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Extend%20Moves%20Outside%20Canvas%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Extend%20Moves%20Outside%20Canvas%22,%20%22getter%22:%20false%7D"></div>


### Font Bold

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>


### Font Italic

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>


### Font Size

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>14.0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The font size of text drawn on the canvas.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Font%20Size%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Font%20Size%22,%20%22getter%22:%20false%7D"></div>


### Font Typeface

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>


### Font Typeface Import

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

<small>Available as ^^Advanced^^ Property</small>

Set a custom font.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Font%20Typeface%20Import%22,%20%22getter%22:%20false%7D"></div>


### Line Width

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>2.0</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The width of lines drawn on the canvas.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Line%20Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Line%20Width%22,%20%22getter%22:%20false%7D"></div>


### Paint Color

<span class="chip chip-color">Color</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-color" style="background-color: #000000;">Default: <i>#000000FF</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The color in which lines are drawn

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Paint%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Paint%20Color%22,%20%22getter%22:%20false%7D"></div>


### Text Alignment

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>1</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Determines the alignment of the text drawn by DrawText() or DrawAngle() with respect to the point specified by that command: point at the left of the text, point at the center of the text, or point at the right of the text.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Text%20Alignment%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Text%20Alignment%22,%20%22getter%22:%20false%7D"></div>


### Visible

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>True</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>


### Column

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Non-Visible</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span>

Column property getter method.


### Height

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set the canvas heightThe height can only be set to &gt;0 or -1 (automatic) or -2 (fill parent) orto a value less then or equal to LENGTH_PERCENT_TAG (which is laterconverted to pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>


### Height Percent

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>


### Row

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Non-Visible</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span>

Row property getter method.


### Width

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Set the canvas widthThe width can only be set to &gt;0 or -1 (automatic) or -2 (fill parent)or to a value less then or equal to LENGTH_PERCENT_TAG (which is laterconverted to pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>


### Width Percent

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Canvas%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
