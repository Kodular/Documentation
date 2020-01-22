# Image

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|User Interface|5|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_Component for displaying images.  The picture to display, and other aspects of the Image's appearance, can be specified in the Designer or in the Blocks Editor. You can also add gif images._

## Events

### Click

[[Event('Image', 'Click')]]

_Event to detect that a user has done a simple "Click"._

### Long Click

[[Event('Image', 'Long Click')]]

_Event to detect that a user has done a simple "Long Click"._

## Methods

### ClearImageTintColor

[[Method('Image', 'ClearImageTintColor', false)]]

_Clear the image tint color._

## Properties

### Clickable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image', 'Clickable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Set the component clickable or not clickable._

### Picture

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image', 'Picture')]]

| Type |
|:----:|
|text|

_No description available_

### Rotation Angle

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image', 'Rotation Angle')]]

| Type | Default |
|:----:|:-------:|
|number|0.0|

_The angle at which the image picture appears rotated. This rotation does not appear on the designer screen, only on the device._

### Scale Picture To Fit

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image', 'Scale Picture To Fit')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Specifies whether the image should be resized to match the size of the ImageView._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Animation

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image', 'Animation')]]

| Type | Default |
|:----:|:-------:|
|text|None|

_This is a limited form of animation that can attach a small number of motion types to images.  The allowable motions are ScrollRightSlow, ScrollRight, ScrollRightFast, ScrollLeftSlow, ScrollLeft, ScrollLeftFast, and Stop_

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Image Tint Color

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image', 'Image Tint Color')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Change the image tint color. You can use too alpha values if you want with the 'make a list' block. Do not forget to use the 'make color' block together with the 'make a list' block._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Scaling

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image', 'Scaling')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_This property determines how the picture scales according to the Height or Width of the Image. Scale proportionally (0) preserves the picture aspect ratio. Scale to fit (1) matches the Image area, even if the aspect ratio changes._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Image', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._