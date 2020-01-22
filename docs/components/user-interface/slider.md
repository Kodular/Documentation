# Slider

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|5|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A Slider is a progress bar that adds a draggable thumb. You can touch the thumb and drag left or right to set the slider thumb position. As the Slider thumb is dragged, it will trigger the PositionChanged event, reporting the position of the Slider thumb. The reported position of the Slider thumb can be used to dynamically update another component attribute, such as the font size of a TextBox or the radius of a Ball._

## Events

### Position Changed

[[Event('Slider', 'Position Changed', 'thumbPosition')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |thumb Position|`number`|


_Indicates that position of the slider thumb has changed._

### Touch Down

[[Event('Slider', 'Touch Down')]]

_Event will be invoked on a touch down._

### Touch Up

[[Event('Slider', 'Touch Up')]]

_Event will be invoked on a touch up._

## Properties

### Color Left

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Slider', 'Color Left')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF00BCD3|

_The color of slider to the left of the thumb._

### Color Right

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Slider', 'Color Right')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF9E9E9E|

_The color of slider to the left of the thumb._

### Max Value

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Slider', 'Max Value')]]

| Type | Default |
|:----:|:-------:|
|number|50.0|

_Sets the maximum value of slider.  Changing the maximum value also resets Thumbposition to be halfway between the minimum and the (new) maximum. If the new maximum is less than the current minimum, then minimum and maximum will both be set to this value.  Setting MaxValue resets the thumb position to halfway between MinValue and MaxValue and signals the PositionChanged event._

### Min Value

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Slider', 'Min Value')]]

| Type | Default |
|:----:|:-------:|
|number|10.0|

_Sets the minimum value of slider.  Changing the minimum value also resets Thumbposition to be halfway between the (new) minimum and the maximum. If the new minimum is greater than the current maximum, then minimum and maximum will both be set to this value.  Setting MinValue resets the thumb position to halfway between MinValue and MaxValue and signals the PositionChanged event._

### Rotation Angle

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Slider', 'Rotation Angle')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

_Sets the degrees that the slider is rotated around the pivot point. Increasing values result in clockwise rotation._

### Thumb Color

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Slider', 'Thumb Color')]]

| Type | Default |
|:----:|:-------:|
|number|&HFF00BCD3|

_The color of slider thumb. This block works only on devices with api >= 16._

### Thumb Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Slider', 'Thumb Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Sets whether or not to display the slider thumb._

### Thumb Image

<small>Available as ^^Advanced^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Slider', 'Thumb Image')]]

| Type |
|:----:|
|text|

_No description available_

### Thumb Position

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Slider', 'Thumb Position')]]

| Type | Default |
|:----:|:-------:|
|number|30.0|

_Sets the position of the slider thumb. If this value is greater than MaxValue, then it will be set to same value as MaxValue. If this value is less than MinValue, then it will be set to same value as MinValue._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Slider', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Slider', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Slider', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Slider', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Slider', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._