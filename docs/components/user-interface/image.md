# Image

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**User Interface**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">5</span>|

## Overview

Component for displaying images. The picture to display, and other aspects of the Image's appearance, can be specified in the Designer or in the Blocks Editor. You can also add gif images.

??? example "Permissions"
    * [android.permission.INTERNET](https://developer.android.com/reference/android/Manifest.permission.html#INTERNET)
    * [android.permission.READ_EXTERNAL_STORAGE](https://developer.android.com/reference/android/Manifest.permission.html#READ_EXTERNAL_STORAGE)

## Events

### Click

Event to detect that a user has done a simple "Click".

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Click%22,%20%22param%22:%20%5B%5D%7D"></div>

### Long Click

Event to detect that a user has done a simple "Long Click".

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Long%20Click%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Clear Image Tint Color

Clear the image tint color.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Clear%20Image%20Tint%20Color%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Animation

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>:heavy_minus_sign:<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span></span>

This is a limited form of animation that can attach a small number of motion types to images. The allowable motions are ScrollRightSlow, ScrollRight, ScrollRightFast, ScrollLeftSlow, ScrollLeft, ScrollLeftFast, and Stop

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Animation%22,%20%22getter%22:%20false%7D"></div>

### Clickable

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span><span class="chip chip-boolean">Default: <i>False</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Set the component clickable or not clickable.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Clickable%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Clickable%22,%20%22getter%22:%20false%7D"></div>

### Height

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Height%22,%20%22getter%22:%20false%7D"></div>

### Height Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's vertical height as a percentageof the height of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Height%20Percent%22,%20%22getter%22:%20false%7D"></div>

### Image Tint Color

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span></span>

Change the image tint color. You can use too alpha values if you want with the 'make a list' block. Do not forget to use the 'make color' block together with the 'make a list' block.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Image%20Tint%20Color%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Image%20Tint%20Color%22,%20%22getter%22:%20false%7D"></div>

### Picture

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Picture%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Picture%22,%20%22getter%22:%20false%7D"></div>

### Rotation Angle

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span><span class="chip chip-number">Default: <i>0.0</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

The angle at which the image picture appears rotated. This rotation does not appear on the designer screen, only on the device.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Rotation%20Angle%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Rotation%20Angle%22,%20%22getter%22:%20false%7D"></div>

### Scale Picture To Fit

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span><span class="chip chip-boolean">Default: <i>False</i></span>:heavy_minus_sign:<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Specifies whether the image should be resized to match the size of the ImageView.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Scale%20Picture%20To%20Fit%22,%20%22getter%22:%20false%7D"></div>

### Scaling

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span></span>

This property determines how the picture scales according to the Height or Width of the Image. Scale proportionally (0) preserves the picture aspect ratio. Scale to fit (1) matches the Image area, even if the aspect ratio changes.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Scaling%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Scaling%22,%20%22getter%22:%20false%7D"></div>

### Visible

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span><span class="chip chip-boolean">Default: <i>True</i></span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span><span class="chip chip-bd">Blocks</span></span>

Returns true iff the component is visible.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Visible%22,%20%22getter%22:%20false%7D"></div>

### Width

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Read</span><span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width, measured in pixels.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Width%22,%20%22getter%22:%20false%7D"></div>

### Width Percent

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>:heavy_minus_sign:<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Blocks</span></span>

Specifies the component's horizontal width as a percentageof the Width of its parent Component.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Image%22,%20%22name%22:%20%22Width%20Percent%22,%20%22getter%22:%20false%7D"></div>
