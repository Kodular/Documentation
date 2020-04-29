# Ball

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Drawing and Animation**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">6</span>|

## Overview

A round 'sprite' that can be placed on a `` Canvas ``, where it can react to touches and drags, interact with other sprites (`` ImageSprite ``s and other `` Ball ``s) and the edge of the Canvas, and move according to its property values.

For example, to have a `` Ball `` move 4 pixels toward the top of a `` Canvas `` every 500 milliseconds (half second), you would set the `` Speed `` property to 4 \[pixels\], the `` Interval `` property to 500 \[milliseconds\], the `` Heading `` property to 90 \[degrees\], and the `` Enabled `` property to `` True ``.

The difference between a `` Ball `` and an `` ImageSprite `` is that the latter can get its appearance from an image file, while a `` Ball ``'s appearance can be changed only by varying its `` PaintColor `` and `` Radius `` properties.

## Events

### Collided With

Event handler called when two enabled sprites (Balls or ImageSprites)collide. Note that checking for collisions with a rotated ImageSprite currentlychecks against its unrotated position. Therefore, collisionchecking will be inaccurate for tall narrow or short wide sprites that arerotated.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Collided%20With%22,%20%22param%22:%20%5B%22other%22%5D%7D"></div>

| Params | []() |
|--------|------|
|other|<span class="chip chip-component">Component</span>|

### Dragged

Event handler called when a Ball is dragged. On all calls, the starting coordinates are where the screen was first touched, and the "current" coordinates describe the endpoint of the current line segment. On the first call within a given drag, the "previous" coordinates are the same as the starting coordinates; subsequently, they are the "current" coordinates from the prior call. Note that the Ball won't actually move anywhere in response to the Dragged event unless MoveTo is explicitly called. For smooth movement, each of its coordinates should be set to the sum of its initial value and the difference between its current and previous values.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Dragged%22,%20%22param%22:%20%5B%22start%20X%22,%20%22start%20Y%22,%20%22prev%20X%22,%20%22prev%20Y%22,%20%22current%20X%22,%20%22current%20Y%22%5D%7D"></div>

| Params | []() |
|--------|------|
|start X|<span class="chip chip-number">Number</span>|
|start Y|<span class="chip chip-number">Number</span>|
|prev X|<span class="chip chip-number">Number</span>|
|prev Y|<span class="chip chip-number">Number</span>|
|current X|<span class="chip chip-number">Number</span>|
|current Y|<span class="chip chip-number">Number</span>|

### Edge Reached

Event handler called when the Ball reaches an edge of the screen. If Bounce is then called with that edge, the Ball will appear to bounce off of the edge it reached. Edge here is represented as an integer that indicates one of eight directions north (1), northeast (2), east (3), southeast (4), south (-1), southwest (-2), west (-3), and northwest (-4).

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Edge%20Reached%22,%20%22param%22:%20%5B%22edge%22%5D%7D"></div>

| Params | []() |
|--------|------|
|edge|<span class="chip chip-number">Number</span>|

### Flung

Event handler called when a fling gesture (quick swipe) is made on an enabled Ball. This provides the x and y coordinates of the start of the fling (relative to the upper left of the canvas), the speed (pixels per millisecond), the heading (0-360 degrees), and the x and y velocity components of the fling's vector.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Flung%22,%20%22param%22:%20%5B%22x%22,%20%22y%22,%20%22speed%22,%20%22heading%22,%20%22x%20vel%22,%20%22y%20vel%22%5D%7D"></div>

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

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22No%20Longer%20Colliding%20With%22,%20%22param%22:%20%5B%22other%22%5D%7D"></div>

| Params | []() |
|--------|------|
|other|<span class="chip chip-component">Component</span>|

### Touch Down

Event handler called when the user begins touching an enabled Ball (placing their finger on a Ball and leaving it there). This provides the x and y coordinates of the touch, relative to the upper left of the canvas.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Touch%20Down%22,%20%22param%22:%20%5B%22x%22,%20%22y%22%5D%7D"></div>

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|

### Touch Up

Event handler called when the user stops touching an enabled Ball (lifting their finger after a TouchDown event). This provides the x and y coordinates of the touch, relative to the upper left of the canvas.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Touch%20Up%22,%20%22param%22:%20%5B%22x%22,%20%22y%22%5D%7D"></div>

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|

### Touched

Event handler called when the user touches an enabled Ball and then immediately lifts their finger. The provided x and y coordinates are relative to the upper left of the canvas.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Touched%22,%20%22param%22:%20%5B%22x%22,%20%22y%22%5D%7D"></div>

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|

## Methods

### Bounce

Makes the Ball bounce, as if off a wall. For normal bouncing, the edge argument should be the one returned by EdgeReached.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Bounce%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22edge%22%5D%7D"></div>

| Params | []() |
|--------|------|
|edge|<span class="chip chip-number">Number</span>|

### Colliding With

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Indicates whether a collision has been registered between this Ball and the passed sprite (Ball or ImageSprite).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Colliding%20With%22,%20%22output%22:%20true,%20%22param%22:%20%5B%22other%22%5D%7D"></div>

| Params | []() |
|--------|------|
|other|<span class="chip chip-component">Component</span>|

### Move Into Bounds

Moves the Ball back in bounds if part of it extends out of bounds, having no effect otherwise. If the Ball is too wide to fit on the canvas, this aligns the left side of the Ball with the left side of the canvas. If the Ball is too tall to fit on the canvas, this aligns the top side of the Ball with the top side of the canvas.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Move%20Into%20Bounds%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Move To

Sets the x and y coordinates of the Ball. If CenterAtOrigin is true, the center of the Ball will be placed here. Otherwise, the top left edge of the Ball will be placed at the specified coordinates.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Move%20To%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22x%22,%20%22y%22%5D%7D"></div>

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|

### Point In Direction

Sets the heading of the Ball toward the point with the coordinates (x, y).

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Point%20In%20Direction%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22x%22,%20%22y%22%5D%7D"></div>

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|

### Point Towards

Turns the Ball to point towards a designated target sprite (Ball or ImageSprite). The new heading will be parallel to the line joining the centerpoints of the two sprites.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Point%20Towards%22,%20%22output%22:%20false,%20%22param%22:%20%5B%22target%22%5D%7D"></div>

| Params | []() |
|--------|------|
|target|<span class="chip chip-component">Component</span>|

## Properties

### Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Controls whether the Ball moves and can be interacted with through collisions, dragging, touching, and flinging.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>

### Heading

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets heading in which sprite should move. In addition to changing thelocal variables

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Heading%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Heading%22,%20%22getter%22:%20false%7D"></div>

### Interval

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>100</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The interval in milliseconds at which the Ball's position is updated. For example, if the interval is 50 and the speed is 10, then every 50 milliseconds the sprite will move 10 pixels in the heading direction.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Interval%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Interval%22,%20%22getter%22:%20false%7D"></div>

### Origin At Center

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Whether the x- and y-coordinates should represent the center of the Ball (`` true ``) or its left and top edges (`` false ``).

### Paint Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-color">Color</span> <span class="chip chip-color">Default: <i>#000000FF</i>&nbsp;<span style="width: 15px; height: 15px; margin: auto; display: inline-block; border: 1px solid white; vertical-align: middle; border-radius: 3px; background-color: #000000;"></span></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The color of the Ball.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Paint%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Paint%20Color%22,%20%22getter%22:%20false%7D"></div>

### Radius

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>5</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The distance from the edge of the Ball to its center.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Radius%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Radius%22,%20%22getter%22:%20false%7D"></div>

### Speed

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The number of pixels that the Ball should move every interval, if enabled.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Speed%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Speed%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Whether the Ball is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### X

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The horizontal coordinate of the Ball, increasing as the Ball moves right. If the property OriginAtCenter is true, the coodinate is for the center of the Ball; otherwise, it is for the leftmost point of the Ball.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22X%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22X%22,%20%22getter%22:%20false%7D"></div>

### Y

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The vertical coordinate of the Ball, increasing as the Ball moves down. If the property OriginAtCenter is true, the coodinate is for the center of the Ball; otherwise, it is for the uppermost point of the Ball.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Y%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Y%22,%20%22getter%22:%20false%7D"></div>

### Z

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1.0</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Sets the layer of the sprite, indicating whether it will appear infront of or behind other sprites.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Z%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Ball%22,%20%22name%22:%20%22Z%22,%20%22getter%22:%20false%7D"></div>
