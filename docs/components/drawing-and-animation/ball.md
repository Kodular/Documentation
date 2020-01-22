# Ball

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Drawing and Animation|6|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_<p>A round 'sprite' that can be placed on a <code>Canvas</code>, where it can react to touches and drags, interact with other sprites (<code>ImageSprite</code>s and other <code>Ball</code>s) and the edge of the Canvas, and move according to its property values.</p><p>For example, to have a <code>Ball</code> move 4 pixels toward the top of a <code>Canvas</code> every 500 milliseconds (half second), you would set the <code>Speed</code> property to 4 [pixels], the <code>Interval</code> property to 500 [milliseconds], the <code>Heading</code> property to 90 [degrees], and the <code>Enabled</code> property to <code>True</code>.</p><p>The difference between a <code>Ball</code> and an <code>ImageSprite</code> is that the latter can get its appearance from an image file, while a <code>Ball</code>'s appearance can be changed only by varying its <code>PaintColor</code> and <code>Radius</code> properties.</p>_

## Events

### Collided With

[[Event('Ball', 'Collided With', 'other')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |other|`component`|


Event handler called when two enabled sprites (Balls or ImageSprites)
 collide. Note that checking for collisions with a rotated ImageSprite currently
 checks against its unrotated position. Therefore, collision
 checking will be inaccurate for tall narrow or short wide sprites that are
 rotated.

### Dragged

[[Event('Ball', 'Dragged', 'startX startY prevX prevY currentX currentY')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |start X|`number`|
    |start Y|`number`|
    |prev X|`number`|
    |prev Y|`number`|
    |current X|`number`|
    |current Y|`number`|


Event handler called when a Ball is dragged. On all calls, the starting coordinates are where the screen was first touched, and the "current" coordinates describe the endpoint of the current line segment. On the first call within a given drag, the "previous" coordinates are the same as the starting coordinates; subsequently, they are the "current" coordinates from the prior call. Note that the Ball won't actually move anywhere in response to the Dragged event unless MoveTo is explicitly called. For smooth movement, each of its coordinates should be set to the sum of its initial value and the difference between its current and previous values.

### Edge Reached

[[Event('Ball', 'Edge Reached', 'edge')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |edge|`number`|


Event handler called when the Ball reaches an edge of the screen. If Bounce is then called with that edge, the Ball will appear to bounce off of the edge it reached. Edge here is represented as an integer that indicates one of eight directions north (1), northeast (2), east (3), southeast (4), south (-1), southwest (-2), west (-3), and northwest (-4).

### Flung

[[Event('Ball', 'Flung', 'x y speed heading xvel yvel')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|
    |speed|`number`|
    |heading|`number`|
    |x vel|`number`|
    |y vel|`number`|


Event handler called when a fling gesture (quick swipe) is made on an enabled Ball. This provides the x and y coordinates of the start of the fling (relative to the upper left of the canvas), the speed (pixels per millisecond), the heading (0-360 degrees), and the x and y velocity components of the fling's vector.

### No Longer Colliding With

[[Event('Ball', 'No Longer Colliding With', 'other')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |other|`component`|


Event handler called when a pair of sprites (Balls and ImageSprites) are no longer colliding.

### Touch Down

[[Event('Ball', 'Touch Down', 'x y')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|


Event handler called when the user begins touching an enabled Ball (placing their finger on a Ball and leaving it there). This provides the x and y coordinates of the touch, relative to the upper left of the canvas.

### Touch Up

[[Event('Ball', 'Touch Up', 'x y')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|


Event handler called when the user stops touching an enabled Ball (lifting their finger after a TouchDown event). This provides the x and y coordinates of the touch, relative to the upper left of the canvas.

### Touched

[[Event('Ball', 'Touched', 'x y')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|


Event handler called when the user touches an enabled Ball and then immediately lifts their finger. The provided x and y coordinates are relative to the upper left of the canvas.

## Methods

### Bounce

[[Method('Ball', 'Bounce', false, 'edge')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |edge|`number`|


Makes the Ball bounce, as if off a wall. For normal bouncing, the edge argument should be the one returned by EdgeReached.

### CollidingWith

[[Method('Ball', 'CollidingWith', true, 'other')]]

{>>Returns `boolean`<<}

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |other|`component`|


Indicates whether a collision has been registered between this Ball and the passed sprite (Ball or ImageSprite).

### MoveIntoBounds

[[Method('Ball', 'MoveIntoBounds', false)]]

Moves the Ball back in bounds if part of it extends out of bounds, having no effect otherwise. If the Ball is too wide to fit on the canvas, this aligns the left side of the Ball with the left side of the canvas. If the Ball is too tall to fit on the canvas, this aligns the top side of the Ball with the top side of the canvas.

### MoveTo

[[Method('Ball', 'MoveTo', false, 'x y')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|


Sets the x and y coordinates of the Ball. If CenterAtOrigin is true, the center of the Ball will be placed here. Otherwise, the top left edge of the Ball will be placed at the specified coordinates.

### PointInDirection

[[Method('Ball', 'PointInDirection', false, 'x y')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|


Sets the heading of the Ball toward the point with the coordinates (x, y).

### PointTowards

[[Method('Ball', 'PointTowards', false, 'target')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |target|`component`|


Turns the Ball to point towards a designated target sprite (Ball or ImageSprite). The new heading will be parallel to the line joining the centerpoints of the two sprites.

## Properties

### Enabled

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Ball', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Controls whether the Ball moves and can be interacted with through collisions, dragging, touching, and flinging.

### Heading

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Ball', 'Heading')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Sets heading in which sprite should move.  In addition to changing the
 local variables

### Interval

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Ball', 'Interval')]]

| Type | Default |
|:----:|:-------:|
|number|100|

The interval in milliseconds at which the Ball's position is updated.  For example, if the interval is 50 and the speed is 10, then every 50 milliseconds the sprite will move 10 pixels in the heading direction.

### Origin At Center

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Ball', 'Origin At Center')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the x- and y-coordinates should represent the center of the Ball (<code>true</code>) or its left and top edges (<code>false</code>).

### Paint Color

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Ball', 'Paint Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF000000|

The color of the Ball.

### Radius

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Ball', 'Radius')]]

| Type | Default |
|:----:|:-------:|
|number|5|

The distance from the edge of the Ball to its center.

### Speed

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Ball', 'Speed')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

The number of pixels that the Ball should move every interval, if enabled.

### Visible

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Ball', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether the Ball is visible.

### X

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Ball', 'X')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

The horizontal coordinate of the Ball, increasing as the Ball moves right. If the property OriginAtCenter is true, the coodinate is for the center of the Ball; otherwise, it is for the leftmost point of the Ball.

### Y

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Ball', 'Y')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

The vertical coordinate of the Ball, increasing as the Ball moves down. If the property OriginAtCenter is true, the coodinate is for the center of the Ball; otherwise, it is for the uppermost point of the Ball.

### Z

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Ball', 'Z')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

Sets the layer of the sprite, indicating whether it will appear in
 front of or behind other sprites.