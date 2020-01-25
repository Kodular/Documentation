# Slider

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**User Interface**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">5</span>|

## Overview

A Slider is a progress bar that adds a draggable thumb. You can touch the thumb and drag left or right to set the slider thumb position. As the Slider thumb is dragged, it will trigger the PositionChanged event, reporting the position of the Slider thumb. The reported position of the Slider thumb can be used to dynamically update another component attribute, such as the font size of a TextBox or the radius of a Ball.

## Events

### Position Changed

Indicates that position of the slider thumb has changed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Position%20Changed%22,%20%22param%22:%20%5B%22thumb%20Position%22%5D%7D"></div>

| Params | []() |
|--------|------|
|thumb Position|<span class="chip chip-number">Number</span>|

### Touch Down

Event will be invoked on a touch down.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Touch%20Down%22,%20%22param%22:%20%5B%5D%7D"></div>

### Touch Up

Event will be invoked on a touch up.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Touch%20Up%22,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Color Left

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color" style="background-color: #00BCD3;">Default: <i>#00BCD3FF</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

The color of slider to the left of the thumb.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Color%20Left%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Color%20Left%22,%20%22getter%22:%20false%7D"></div>

### Color Right

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color" style="background-color: #9E9E9E;">Default: <i>#9E9E9EFF</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

The color of slider to the left of the thumb.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Color%20Right%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Color%20Right%22,%20%22getter%22:%20false%7D"></div>

### Max Value

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>50.0</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Sets the maximum value of slider. Changing the maximum value also resets Thumbposition to be halfway between the minimum and the (new) maximum. If the new maximum is less than the current minimum, then minimum and maximum will both be set to this value. Setting MaxValue resets the thumb position to halfway between MinValue and MaxValue and signals the PositionChanged event.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Max%20Value%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Max%20Value%22,%20%22getter%22:%20false%7D"></div>

### Min Value

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>10.0</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Sets the minimum value of slider. Changing the minimum value also resets Thumbposition to be halfway between the (new) minimum and the maximum. If the new minimum is greater than the current maximum, then minimum and maximum will both be set to this value. Setting MinValue resets the thumb position to halfway between MinValue and MaxValue and signals the PositionChanged event.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Min%20Value%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Min%20Value%22,%20%22getter%22:%20false%7D"></div>

### Rotation Angle

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>0.0</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

Sets the degrees that the slider is rotated around the pivot point. Increasing values result in clockwise rotation.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Rotation%20Angle%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Rotation%20Angle%22,%20%22getter%22:%20false%7D"></div>

### Thumb Color

<span style="user-select: none;"><span class="chip chip-color">Color</span>&#32;<span class="chip chip-color" style="background-color: #00BCD3;">Default: <i>#00BCD3FF</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

The color of slider thumb. This block works only on devices with api &gt;= 16.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Thumb%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Thumb%20Color%22,%20%22getter%22:%20false%7D"></div>

### Thumb Enabled

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>True</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Sets whether or not to display the slider thumb.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Thumb%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Thumb%20Enabled%22,%20%22getter%22:%20false%7D"></div>

### Thumb Image

<span style="user-select: none;"><span class="chip chip-text">Text</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;</span>

<small>Available as ^^Advanced^^ Property</small>

### Thumb Position

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;<span class="chip chip-number">Default: <i>30.0</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Sets the position of the slider thumb. If this value is greater than MaxValue, then it will be set to same value as MaxValue. If this value is less than MinValue, then it will be set to same value as MinValue.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Thumb%20Position%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Thumb%20Position%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none;"><span class="chip chip-boolean">Boolean</span>&#32;<span class="chip chip-boolean">Default: <i>True</i></span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Designer</span>&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Read</span>&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none;"><span class="chip chip-number">Number</span>&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;&#32;<span class="chip chip-rw">Write</span>&#32;-&#32;<span class="chip chip-bd">Blocks</span>&#32;</span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Slider%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
