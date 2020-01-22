# Ball

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Drawing and Animation|6|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_<p>A round 'sprite' that can be placed on a <code>Canvas</code>, where it can react to touches and drags, interact with other sprites (<code>ImageSprite</code>s and other <code>Ball</code>s) and the edge of the Canvas, and move according to its property values.</p><p>For example, to have a <code>Ball</code> move 4 pixels toward the top of a <code>Canvas</code> every 500 milliseconds (half second), you would set the <code>Speed</code> property to 4 [pixels], the <code>Interval</code> property to 500 [milliseconds], the <code>Heading</code> property to 90 [degrees], and the <code>Enabled</code> property to <code>True</code>.</p><p>The difference between a <code>Ball</code> and an <code>ImageSprite</code> is that the latter can get its appearance from an image file, while a <code>Ball</code>'s appearance can be changed only by varying its <code>PaintColor</code> and <code>Radius</code> properties.</p>_

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