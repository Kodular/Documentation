# Image Sprite

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Drawing and Animation|6|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_<p>A 'sprite' that can be placed on a <code>Canvas</code>, where it can react to touches and drags, interact with other sprites (<code>Ball</code>s and other <code>ImageSprite</code>s) and the edge of the Canvas, and move according to its property values.  Its appearance is that of the image specified in its <code>Picture</code> property (unless its <code>Visible</code> property is <code>False</code>).</p> <p>To have an <code>ImageSprite</code> move 10 pixels to the left every 1000 milliseconds (one second), for example, you would set the <code>Speed</code> property to 10 [pixels], the <code>Interval</code> property to 1000 [milliseconds], the <code>Heading</code> property to 180 [degrees], and the <code>Enabled</code> property to <code>True</code>.  A sprite whose <code>Rotates</code> property is <code>True</code> will rotate its image as the sprite's <code>Heading</code> changes.  Checking for collisions with a rotated sprite currently checks the sprite's unrotated position so that collision checking will be inaccurate for tall narrow or short wide sprites that are rotated.  Any of the sprite properties can be changed at any time under program control.</p> _

## Properties

### Enabled

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Controls whether the ImageSprite moves and can be interacted with through collisions, dragging, touching, and flinging.

### Heading

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Heading')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Sets heading in which sprite should move.  In addition to changing the
 local variables

### Interval

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Interval')]]

| Type | Default |
|:----:|:-------:|
|number|100|

The interval in milliseconds at which the ImageSprite's position is updated.  For example, if the interval is 50 and the speed is 10, then every 50 milliseconds the sprite will move 10 pixels in the heading direction.

### Picture

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Picture')]]

| Type |
|:----:|
|text|

The picture that determines the ImageSprite's appearance.

### Rotates

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Rotates')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether the image should rotate to match the ImageSprite's heading. The sprite rotates around its centerpoint.

### Speed

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Speed')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

The number of pixels that the ImageSprite should move every interval, if enabled.

### Visible

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Whether the ImageSprite is visible.

### X

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'X')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

The horizontal coordinate of the left edge of the ImageSprite, increasing as the ImageSprite moves right.

### Y

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Y')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

The vertical coordinate of the top edge of the ImageSprite, increasing as the ImageSprite moves down.

### Z

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image Sprite', 'Z')]]

| Type | Default |
|:----:|:-------:|
|number|1.0|

Sets the layer of the sprite, indicating whether it will appear in
 front of or behind other sprites.

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

## Methods

### Bounce



[[Method('Image Sprite', 'Bounce', false, 'edge')]]

**Parameters**

| Name | Type |
|------|------|
|edge|`number`|


Makes the ImageSprite bounce, as if off a wall. For normal bouncing, the edge argument should be the one returned by EdgeReached.

### CollidingWith



[[Method('Image Sprite', 'CollidingWith', true, 'other')]]

{>>Returns `boolean`<<}


**Parameters**

| Name | Type |
|------|------|
|other|`component`|


Indicates whether a collision has been registered between this ImageSprite and the passed sprite (Ball or ImageSprite).

### MoveIntoBounds



[[Method('Image Sprite', 'MoveIntoBounds', false)]]

Moves the ImageSprite back in bounds if part of it extends out of bounds, having no effect otherwise. If the ImageSprite is too wide to fit on the canvas, this aligns the left side of the ImageSprite with the left side of the canvas. If the ImageSprite is too tall to fit on the canvas, this aligns the top side of the ImageSprite with the top side of the canvas.

### MoveTo



[[Method('Image Sprite', 'MoveTo', false, 'x y')]]

**Parameters**

| Name | Type |
|------|------|
|x|`number`|
|y|`number`|


Moves the ImageSprite so that its left top corner is at the specfied x and y coordinates.

### PointInDirection



[[Method('Image Sprite', 'PointInDirection', false, 'x y')]]

**Parameters**

| Name | Type |
|------|------|
|x|`number`|
|y|`number`|


Sets the heading of the ImageSprite toward the point with the coordinates (x, y).

### PointTowards



[[Method('Image Sprite', 'PointTowards', false, 'target')]]

**Parameters**

| Name | Type |
|------|------|
|target|`component`|


Turns the ImageSprite to point towards a designated target sprite (Ball or ImageSprite). The new heading will be parallel to the line joining the centerpoints of the two sprites.