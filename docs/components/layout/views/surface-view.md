# Surface View

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Layout > Views|2|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that shows a live preview of the user''s camera as its background._

## Events

### Clicked

[[Event('Surface View', 'Clicked')]]

_Event to detect clicks on the camera preview._

### Face Detected

[[Event('Surface View', 'Face Detected', 'numbers')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |numbers|`text`|


_Event to detect that there are faces in the front of the camera._

### Got Preview

[[Event('Surface View', 'Got Preview', 'image')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image|`text`|


_Event to get the response from the camera preview as image file. The picture is by default in landscape mode. This event will only work if the option "Save Preview As File" is enabled/ true._

### Long Clicked

[[Event('Surface View', 'Long Clicked')]]

_Event to detect long clicks on the camera preview._

### Picture Created

[[Event('Surface View', 'Picture Created', 'image')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |image|`text`|


_Event to detect that the user has taken a picture from the preview._

### Preview Paused

[[Event('Surface View', 'Preview Paused')]]

_Event to detect that the user paused the camera preview._

### Preview Stoped

[[Event('Surface View', 'Preview Stoped')]]

_Event to detect that the user stopped the camera preview._

## Methods

### PausePreview

[[Method('Surface View', 'PausePreview', false)]]

_Pause the camera preview._

### StartPreview

[[Method('Surface View', 'StartPreview', false)]]

_Start the camera preview._

### StopPreview

[[Method('Surface View', 'StopPreview', false)]]

_Stop the camera preview._

### TakePicture

[[Method('Surface View', 'TakePicture', false)]]

_Take a picture from the camera preview._

## Properties

### Align Horizontal

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Surface View', 'Align Horizontal')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_A number that encodes how contents of the arrangement are aligned  horizontally. The choices are: 1 = left aligned, 2 = right aligned,  3 = horizontally centered.  Alignment has no effect if the arrangement's width is automatic._

### Align Vertical

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Surface View', 'Align Vertical')]]

| Type | Default |
|:----:|:-------:|
|number|1|

_No description available_

### Clickable

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Surface View', 'Clickable')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Set the surface view component clickable or not clickable._

### Detect Faces

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Surface View', 'Detect Faces')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_If enabled you can detect how many faces are in the front of the camera._

### Save Preview As File

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Surface View', 'Save Preview As File')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Enable this block to enable the "Got Preview" event to get a image file from the camera preview._

### Use Back Camera

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Surface View', 'Use Back Camera')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_If enabled you will open the back camera for the camera preview, else you open the front camera. The block detect automatic if there is a device camera available or not._

### Visible

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Surface View', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_Returns true iff the component is visible._

### Column

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Surface View', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Column property getter method._

### Flashlight

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Surface View', 'Flashlight')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Turn on or off the device flashlight. The function knows automatic if there is a flash/ torch available._

### Height

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Surface View', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height, measured in pixels._

### Height Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Surface View', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's vertical height as a percentage
 of the height of its parent Component._

### Row

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Surface View', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Row property getter method._

### Width

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Surface View', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width, measured in pixels._

### Width Percent

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Surface View', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Specifies the component's horizontal width as a percentage
 of the Width of its parent Component._