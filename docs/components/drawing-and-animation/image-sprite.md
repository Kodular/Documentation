# Image Sprite

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Drawing and Animation**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">6</span>|

## Overview

A 'sprite' that can be placed on a `` Canvas ``, where it can react to touches and drags, interact with other sprites (`` Ball ``s and other `` ImageSprite ``s) and the edge of the Canvas, and move according to its property values. Its appearance is that of the image specified in its `` Picture `` property (unless its `` Visible `` property is `` False ``).

 

To have an `` ImageSprite `` move 10 pixels to the left every 1000 milliseconds (one second), for example, you would set the `` Speed `` property to 10 \[pixels\], the `` Interval `` property to 1000 \[milliseconds\], the `` Heading `` property to 180 \[degrees\], and the `` Enabled `` property to `` True ``. A sprite whose `` Rotates `` property is `` True `` will rotate its image as the sprite's `` Heading `` changes. Checking for collisions with a rotated sprite currently checks the sprite's unrotated position so that collision checking will be inaccurate for tall narrow or short wide sprites that are rotated. Any of the sprite properties can be changed at any time under program control.

 

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)


## Events

### Collided With

Event handler called when two enabled sprites (Balls or ImageSprites)collide. Note that checking for collisions with a rotated ImageSprite currentlychecks against its unrotated position. Therefore, collisionchecking will be inaccurate for tall narrow or short wide sprites that arerotated.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Collided%20With%22,%20%22params%22:%20%5B%22other%22%5D%7D"></div>


| Params | []() |
|--------|------|
|other|<span class="chip chip-component">Component</span>|


### Dragged

Event handler called when a ImageSprite is dragged. On all calls, the starting coordinates are where the screen was first touched, and the "current" coordinates describe the endpoint of the current line segment. On the first call within a given drag, the "previous" coordinates are the same as the starting coordinates; subsequently, they are the "current" coordinates from the prior call. Note that the ImageSprite won't actually move anywhere in response to the Dragged event unless MoveTo is explicitly called. For smooth movement, each of its coordinates should be set to the sum of its initial value and the difference between its current and previous values.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Dragged%22,%20%22params%22:%20%5B%22start%20X%22,%20%22start%20Y%22,%20%22prev%20X%22,%20%22prev%20Y%22,%20%22current%20X%22,%20%22current%20Y%22%5D%7D"></div>


| Params | []() |
|--------|------|
|start X|<span class="chip chip-number">Number</span>|
|start Y|<span class="chip chip-number">Number</span>|
|prev X|<span class="chip chip-number">Number</span>|
|prev Y|<span class="chip chip-number">Number</span>|
|current X|<span class="chip chip-number">Number</span>|
|current Y|<span class="chip chip-number">Number</span>|


### Edge Reached

Event handler called when the ImageSprite reaches an edge of the screen. If Bounce is then called with that edge, the ImageSprite will appear to bounce off of the edge it reached. Edge here is represented as an integer that indicates one of eight directions north (1), northeast (2), east (3), southeast (4), south (-1), southwest (-2), west (-3), and northwest (-4).

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Edge%20Reached%22,%20%22params%22:%20%5B%22edge%22%5D%7D"></div>


| Params | []() |
|--------|------|
|edge|<span class="chip chip-number">Number</span>|


### Flung

Event handler called when a fling gesture (quick swipe) is made on an enabled ImageSprite. This provides the x and y coordinates of the start of the fling (relative to the upper left of the canvas), the speed (pixels per millisecond), the heading (0-360 degrees), and the x and y velocity components of the fling's vector.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Flung%22,%20%22params%22:%20%5B%22x%22,%20%22y%22,%20%22speed%22,%20%22heading%22,%20%22x%20vel%22,%20%22y%20vel%22%5D%7D"></div>


| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|
|speed|<span class="chip chip-number">Number</span>|
|heading|<span class="chip chip-number">Number</span>|
|x vel|<span class="chip chip-number">Number</span>|
|y vel|<span class="chip chip-number">Number</span>|


### No Longer Colliding With

Event handler called when a pair of sprites (Balls and ImageSprites) are no longer colliding.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22No%20Longer%20Colliding%20With%22,%20%22params%22:%20%5B%22other%22%5D%7D"></div>


| Params | []() |
|--------|------|
|other|<span class="chip chip-component">Component</span>|


### Touch Down

Event handler called when the user begins touching an enabled ImageSprite (placing their finger on a ImageSprite and leaving it there). This provides the x and y coordinates of the touch, relative to the upper left of the canvas.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Touch%20Down%22,%20%22params%22:%20%5B%22x%22,%20%22y%22%5D%7D"></div>


| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Touch Up

Event handler called when the user stops touching an enabled ImageSprite (lifting their finger after a TouchDown event). This provides the x and y coordinates of the touch, relative to the upper left of the canvas.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Touch%20Up%22,%20%22params%22:%20%5B%22x%22,%20%22y%22%5D%7D"></div>


| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Touched

Event handler called when the user touches an enabled ImageSprite and then immediately lifts their finger. The provided x and y coordinates are relative to the upper left of the canvas.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Touched%22,%20%22params%22:%20%5B%22x%22,%20%22y%22%5D%7D"></div>


| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


## Methods

### Bounce

Makes the ImageSprite bounce, as if off a wall. For normal bouncing, the edge argument should be the one returned by EdgeReached.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Bounce%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22edge%22%5D%7D"></div>


| Params | []() |
|--------|------|
|edge|<span class="chip chip-number">Number</span>|


### Colliding With

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Indicates whether a collision has been registered between this ImageSprite and the passed sprite (Ball or ImageSprite).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Colliding%20With%22,%20%22output%22:%20true,%20%22params%22:%20%5B%22other%22%5D%7D"></div>


| Params | []() |
|--------|------|
|other|<span class="chip chip-component">Component</span>|


### Move Into Bounds

Moves the ImageSprite back in bounds if part of it extends out of bounds, having no effect otherwise. If the ImageSprite is too wide to fit on the canvas, this aligns the left side of the ImageSprite with the left side of the canvas. If the ImageSprite is too tall to fit on the canvas, this aligns the top side of the ImageSprite with the top side of the canvas.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Move%20Into%20Bounds%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Move To

Moves the ImageSprite so that its left top corner is at the specfied x and y coordinates.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Move%20To%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22x%22,%20%22y%22%5D%7D"></div>


| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Point In Direction

Sets the heading of the ImageSprite toward the point with the coordinates (x, y).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Point%20In%20Direction%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22x%22,%20%22y%22%5D%7D"></div>


| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Point Towards

Turns the ImageSprite to point towards a designated target sprite (Ball or ImageSprite). The new heading will be parallel to the line joining the centerpoints of the two sprites.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Point%20Towards%22,%20%22output%22:%20false,%20%22params%22:%20%5B%22target%22%5D%7D"></div>


| Params | []() |
|--------|------|
|target|<span class="chip chip-component">Component</span>|


## Properties

### Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Controls whether the ImageSprite moves and can be interacted with through collisions, dragging, touching, and flinging.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>


### Heading

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets heading in which sprite should move. In addition to changing thelocal variables

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Heading%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Heading%22,%20%22getter%22:%20false%7D"></div>


### Interval

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>100</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The interval in milliseconds at which the ImageSprite's position is updated. For example, if the interval is 50 and the speed is 10, then every 50 milliseconds the sprite will move 10 pixels in the heading direction.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Interval%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Interval%22,%20%22getter%22:%20false%7D"></div>


### Picture

<span class="chip chip-text">Text</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The picture that determines the ImageSprite's appearance.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Picture%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Picture%22,%20%22getter%22:%20false%7D"></div>


### Rotates

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the image should rotate to match the ImageSprite's heading. The sprite rotates around its centerpoint.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Rotates%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Rotates%22,%20%22getter%22:%20false%7D"></div>


### Speed

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The number of pixels that the ImageSprite should move every interval, if enabled.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Speed%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Speed%22,%20%22getter%22:%20false%7D"></div>


### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the ImageSprite is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>


### X

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The horizontal coordinate of the left edge of the ImageSprite, increasing as the ImageSprite moves right.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22X%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22X%22,%20%22getter%22:%20false%7D"></div>


### Y

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The vertical coordinate of the top edge of the ImageSprite, increasing as the ImageSprite moves down.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Y%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Y%22,%20%22getter%22:%20false%7D"></div>


### Z

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the layer of the sprite, indicating whether it will appear infront of or behind other sprites.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Z%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Z%22,%20%22getter%22:%20false%7D"></div>


### Height

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

The height of the ImageSprite in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>


### Width

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span> 

The width of the ImageSprite in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%20Sprite%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>
