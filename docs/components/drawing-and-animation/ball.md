# Ball

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Drawing and Animation|API 19, Android 4.4 - 4.4.4 KitKat|6|

## Overview

A round 'sprite' that can be placed on a `` Canvas ``, where it can react to touches and drags, interact with other sprites (`` ImageSprite ``s and other `` Ball ``s) and the edge of the Canvas, and move according to its property values.

For example, to have a `` Ball `` move 4 pixels toward the top of a `` Canvas `` every 500 milliseconds (half second), you would set the `` Speed `` property to 4 \[pixels\], the `` Interval `` property to 500 \[milliseconds\], the `` Heading `` property to 90 \[degrees\], and the `` Enabled `` property to `` True ``.

The difference between a `` Ball `` and an `` ImageSprite `` is that the latter can get its appearance from an image file, while a `` Ball ``'s appearance can be changed only by varying its `` PaintColor `` and `` Radius `` properties.

## Events

### Collided With

Event handler called when two enabled sprites (Balls or ImageSprites)collide. Note that checking for collisions with a rotated ImageSprite currentlychecks against its unrotated position. Therefore, collisionchecking will be inaccurate for tall narrow or short wide sprites that arerotated.

[[Event('Ball', 'Collided With', 'other')]]

| Params | []() |
|--------|------|
|other|<span class="chip chip-component">Component</span>|


### Dragged

Event handler called when a Ball is dragged. On all calls, the starting coordinates are where the screen was first touched, and the "current" coordinates describe the endpoint of the current line segment. On the first call within a given drag, the "previous" coordinates are the same as the starting coordinates; subsequently, they are the "current" coordinates from the prior call. Note that the Ball won't actually move anywhere in response to the Dragged event unless MoveTo is explicitly called. For smooth movement, each of its coordinates should be set to the sum of its initial value and the difference between its current and previous values.

[[Event('Ball', 'Dragged', 'startX', 'startY', 'prevX', 'prevY', 'currentX', 'currentY')]]

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

[[Event('Ball', 'Edge Reached', 'edge')]]

| Params | []() |
|--------|------|
|edge|<span class="chip chip-number">Number</span>|


### Flung

Event handler called when a fling gesture (quick swipe) is made on an enabled Ball. This provides the x and y coordinates of the start of the fling (relative to the upper left of the canvas), the speed (pixels per millisecond), the heading (0-360 degrees), and the x and y velocity components of the fling's vector.

[[Event('Ball', 'Flung', 'x', 'y', 'speed', 'heading', 'xvel', 'yvel')]]

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

[[Event('Ball', 'No Longer Colliding With', 'other')]]

| Params | []() |
|--------|------|
|other|<span class="chip chip-component">Component</span>|


### Touch Down

Event handler called when the user begins touching an enabled Ball (placing their finger on a Ball and leaving it there). This provides the x and y coordinates of the touch, relative to the upper left of the canvas.

[[Event('Ball', 'Touch Down', 'x', 'y')]]

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Touch Up

Event handler called when the user stops touching an enabled Ball (lifting their finger after a TouchDown event). This provides the x and y coordinates of the touch, relative to the upper left of the canvas.

[[Event('Ball', 'Touch Up', 'x', 'y')]]

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Touched

Event handler called when the user touches an enabled Ball and then immediately lifts their finger. The provided x and y coordinates are relative to the upper left of the canvas.

[[Event('Ball', 'Touched', 'x', 'y')]]

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


## Methods

### Bounce

Makes the Ball bounce, as if off a wall. For normal bouncing, the edge argument should be the one returned by EdgeReached.

[[Method('Ball', 'Bounce', False, 'edge')]]

| Params | []() |
|--------|------|
|edge|<span class="chip chip-number">Number</span>|


### Colliding With

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Indicates whether a collision has been registered between this Ball and the passed sprite (Ball or ImageSprite).

[[Method('Ball', 'Colliding With', True, 'other')]]

| Params | []() |
|--------|------|
|other|<span class="chip chip-component">Component</span>|


### Move Into Bounds

Moves the Ball back in bounds if part of it extends out of bounds, having no effect otherwise. If the Ball is too wide to fit on the canvas, this aligns the left side of the Ball with the left side of the canvas. If the Ball is too tall to fit on the canvas, this aligns the top side of the Ball with the top side of the canvas.

[[Method('Ball', 'Move Into Bounds', False)]]

### Move To

Sets the x and y coordinates of the Ball. If CenterAtOrigin is true, the center of the Ball will be placed here. Otherwise, the top left edge of the Ball will be placed at the specified coordinates.

[[Method('Ball', 'Move To', False, 'x', 'y')]]

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Point In Direction

Sets the heading of the Ball toward the point with the coordinates (x, y).

[[Method('Ball', 'Point In Direction', False, 'x', 'y')]]

| Params | []() |
|--------|------|
|x|<span class="chip chip-number">Number</span>|
|y|<span class="chip chip-number">Number</span>|


### Point Towards

Turns the Ball to point towards a designated target sprite (Ball or ImageSprite). The new heading will be parallel to the line joining the centerpoints of the two sprites.

[[Method('Ball', 'Point Towards', False, 'target')]]

| Params | []() |
|--------|------|
|target|<span class="chip chip-component">Component</span>|


## Properties

### Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Controls whether the Ball moves and can be interacted with through collisions, dragging, touching, and flinging.

[[PropertyBlockGetterAndSetter('Ball', 'Enabled')]]

### Heading

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets heading in which sprite should move. In addition to changing thelocal variables

[[PropertyBlockGetterAndSetter('Ball', 'Heading')]]

### Interval

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>100</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The interval in milliseconds at which the Ball's position is updated. For example, if the interval is 50 and the speed is 10, then every 50 milliseconds the sprite will move 10 pixels in the heading direction.

[[PropertyBlockGetterAndSetter('Ball', 'Interval')]]

### Origin At Center

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the x- and y-coordinates should represent the center of the Ball (`` true ``) or its left and top edges (`` false ``).

[[PropertyBlockGetterAndSetter('Ball', 'Origin At Center')]]

### Paint Color

<span class="chip chip-number">Number</span> <span class="chip chip-number" style="background-color: #000000;">Default: <i>#000000FF</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The color of the Ball.

[[PropertyBlockGetterAndSetter('Ball', 'Paint Color')]]

### Radius

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>5</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The distance from the edge of the Ball to its center.

[[PropertyBlockGetterAndSetter('Ball', 'Radius')]]

### Speed

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The number of pixels that the Ball should move every interval, if enabled.

[[PropertyBlockGetterAndSetter('Ball', 'Speed')]]

### Visible

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the Ball is visible.

[[PropertyBlockGetterAndSetter('Ball', 'Visible')]]

### X

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The horizontal coordinate of the Ball, increasing as the Ball moves right. If the property OriginAtCenter is true, the coodinate is for the center of the Ball; otherwise, it is for the leftmost point of the Ball.

[[PropertyBlockGetterAndSetter('Ball', 'X')]]

### Y

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>0.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The vertical coordinate of the Ball, increasing as the Ball moves down. If the property OriginAtCenter is true, the coodinate is for the center of the Ball; otherwise, it is for the uppermost point of the Ball.

[[PropertyBlockGetterAndSetter('Ball', 'Y')]]

### Z

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>1.0</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Sets the layer of the sprite, indicating whether it will appear infront of or behind other sprites.

[[PropertyBlockGetterAndSetter('Ball', 'Z')]]