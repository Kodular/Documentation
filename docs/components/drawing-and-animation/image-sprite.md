# Image Sprite

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Drawing and Animation|6|API 19 | Android 4.4 - 4.4.4 KitKat|

## Overview

A 'sprite' that can be placed on a `` Canvas ``, where it can react to touches and drags, interact with other sprites (`` Ball ``s and other `` ImageSprite ``s) and the edge of the Canvas, and move according to its property values. Its appearance is that of the image specified in its `` Picture `` property (unless its `` Visible `` property is `` False ``).

 

To have an `` ImageSprite `` move 10 pixels to the left every 1000 milliseconds (one second), for example, you would set the `` Speed `` property to 10 \[pixels\], the `` Interval `` property to 1000 \[milliseconds\], the `` Heading `` property to 180 \[degrees\], and the `` Enabled `` property to `` True ``. A sprite whose `` Rotates `` property is `` True `` will rotate its image as the sprite's `` Heading `` changes. Checking for collisions with a rotated sprite currently checks the sprite's unrotated position so that collision checking will be inaccurate for tall narrow or short wide sprites that are rotated. Any of the sprite properties can be changed at any time under program control.

 

## Events

### Collided With

[[Event('Image Sprite', 'Collided With', 'other')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |other|`component`|


Event handler called when two enabled sprites (Balls or ImageSprites)collide. Note that checking for collisions with a rotated ImageSprite currentlychecks against its unrotated position. Therefore, collisionchecking will be inaccurate for tall narrow or short wide sprites that arerotated.

### Dragged

[[Event('Image Sprite', 'Dragged', 'startX', 'startY', 'prevX', 'prevY', 'currentX', 'currentY')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |start X|`number`|
    |start Y|`number`|
    |prev X|`number`|
    |prev Y|`number`|
    |current X|`number`|
    |current Y|`number`|


Event handler called when a ImageSprite is dragged. On all calls, the starting coordinates are where the screen was first touched, and the "current" coordinates describe the endpoint of the current line segment. On the first call within a given drag, the "previous" coordinates are the same as the starting coordinates; subsequently, they are the "current" coordinates from the prior call. Note that the ImageSprite won't actually move anywhere in response to the Dragged event unless MoveTo is explicitly called. For smooth movement, each of its coordinates should be set to the sum of its initial value and the difference between its current and previous values.

### Edge Reached

[[Event('Image Sprite', 'Edge Reached', 'edge')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |edge|`number`|


Event handler called when the ImageSprite reaches an edge of the screen. If Bounce is then called with that edge, the ImageSprite will appear to bounce off of the edge it reached. Edge here is represented as an integer that indicates one of eight directions north (1), northeast (2), east (3), southeast (4), south (-1), southwest (-2), west (-3), and northwest (-4).

### Flung

[[Event('Image Sprite', 'Flung', 'x', 'y', 'speed', 'heading', 'xvel', 'yvel')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|
    |speed|`number`|
    |heading|`number`|
    |x vel|`number`|
    |y vel|`number`|


Event handler called when a fling gesture (quick swipe) is made on an enabled ImageSprite. This provides the x and y coordinates of the start of the fling (relative to the upper left of the canvas), the speed (pixels per millisecond), the heading (0-360 degrees), and the x and y velocity components of the fling's vector.

### No Longer Colliding With

[[Event('Image Sprite', 'No Longer Colliding With', 'other')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |other|`component`|


Event handler called when a pair of sprites (Balls and ImageSprites) are no longer colliding.

### Touch Down

[[Event('Image Sprite', 'Touch Down', 'x', 'y')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|


Event handler called when the user begins touching an enabled ImageSprite (placing their finger on a ImageSprite and leaving it there). This provides the x and y coordinates of the touch, relative to the upper left of the canvas.

### Touch Up

[[Event('Image Sprite', 'Touch Up', 'x', 'y')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|


Event handler called when the user stops touching an enabled ImageSprite (lifting their finger after a TouchDown event). This provides the x and y coordinates of the touch, relative to the upper left of the canvas.

### Touched

[[Event('Image Sprite', 'Touched', 'x', 'y')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|


Event handler called when the user touches an enabled ImageSprite and then immediately lifts their finger. The provided x and y coordinates are relative to the upper left of the canvas.

## Methods

### Bounce

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |edge|`number`|


Makes the ImageSprite bounce, as if off a wall. For normal bouncing, the edge argument should be the one returned by EdgeReached.

### CollidingWith

_Block preview not available_

{>>Returns `boolean`<<}

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |other|`component`|


Indicates whether a collision has been registered between this ImageSprite and the passed sprite (Ball or ImageSprite).

### MoveIntoBounds

_Block preview not available_

Moves the ImageSprite back in bounds if part of it extends out of bounds, having no effect otherwise. If the ImageSprite is too wide to fit on the canvas, this aligns the left side of the ImageSprite with the left side of the canvas. If the ImageSprite is too tall to fit on the canvas, this aligns the top side of the ImageSprite with the top side of the canvas.

### MoveTo

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|


Moves the ImageSprite so that its left top corner is at the specfied x and y coordinates.

### PointInDirection

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |x|`number`|
    |y|`number`|


Sets the heading of the ImageSprite toward the point with the coordinates (x, y).

### PointTowards

_Block preview not available_

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |target|`component`|


Turns the ImageSprite to point towards a designated target sprite (Ball or ImageSprite). The new heading will be parallel to the line joining the centerpoints of the two sprites.

## Properties

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Controls whether the ImageSprite moves and can be interacted with through collisions, dragging, touching, and flinging.

### Heading

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Heading')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Sets heading in which sprite should move. In addition to changing thelocal variables

### Interval

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Interval')]]

| Type | Default |
|:----:|:-------:|
|number|100|

The interval in milliseconds at which the ImageSprite's position is updated. For example, if the interval is 50 and the speed is 10, then every 50 milliseconds the sprite will move 10 pixels in the heading direction.

### Picture

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Picture')]]

| Type |
|:----:|
|text|

The picture that determines the ImageSprite's appearance.

### Rotates

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Rotates')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether the image should rotate to match the ImageSprite's heading. The sprite rotates around its centerpoint.

### Speed

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Speed')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

The number of pixels that the ImageSprite should move every interval, if enabled.

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether the ImageSprite is visible.

### X

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'X')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

The horizontal coordinate of the left edge of the ImageSprite, increasing as the ImageSprite moves right.

### Y

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Y')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

The vertical coordinate of the top edge of the ImageSprite, increasing as the ImageSprite moves down.

### Z

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Z')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

Sets the layer of the sprite, indicating whether it will appear infront of or behind other sprites.

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

The height of the ImageSprite in pixels.

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

The width of the ImageSprite in pixels.