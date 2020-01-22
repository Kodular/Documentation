# Google Maps

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Google|4|API 19 - Android 4.4 - 4.4.4 KitKat|

## Overview

_A visible component that shows a map on the screen powered by Google''s Maps service._

## Properties

### Camera Angle

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Camera Angle')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Move the map's camera to the specified tilt, the angle (in degrees) from the nadir (directly facing the Earth). Must be a value between 0.0 and 90.0

### Camera Rotation

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Camera Rotation')]]

| Type | Default |
|:----:|:-------:|
|number|0|

Move the map's camera to the specified bearing, the direction that the camera is pointing in (in degrees clockwise from north).

### Camera Zoom Level

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Camera Zoom Level')]]

| Type | Default |
|:----:|:-------:|
|number|15|

Move the map's camera to the specified zoom level.

### Theme

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Theme')]]

| Type | Default |
|:----:|:-------:|
|text|standard|

Sets the theme of the map. The choices are "standard"(default), "silver", "retro", "dark", "night", "aubergine", "vintage", "kodular" and "roads-only".

### Visible

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Visible')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Returns true iff the component is visible.

### Column



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Column')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Column property getter method.

### Compass Enabled



:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Compass Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates whether the compass widget is currently enabled in the map ui

### Height



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Height')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height, measured in pixels.

### Height Percent



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Height Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's vertical height as a percentage
 of the height of its parent Component.

### Map Camera Changed Listener Enabled



:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Map Camera Changed Listener Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates if the map camera's position changed listener is currently enabled

### Map Click Listener Enabled



:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Map Click Listener Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates if the mapClick event listener is currently enabled

### Map Long Click Listener Enabled



:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Map Long Click Listener Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates if the map longClick listener is currently enabled

### Map Type



:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Map Type')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Indicates the current map type

### My Location Enabled



:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'My Location Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates whether my locaiton UI control is currently enabled for the Google map.

### Rotate Enabled



:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Rotate Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates whether the capability to rotate a map on the ui is currently enabled

### Row



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Row')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Row property getter method.

### Scroll Enabled



:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Scroll Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates whether the capability to scroll a map on the ui is currently enabled

### Style



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Style')]]

| Type | Default |
|:----:|:-------:|
|text|None|

Sets the style of the map from json. Just use a text field and paste there the json data. Create a custom map style at https://mapstyle.withgoogle.com/. Set the theme to "standard" to clear the style json.

### Width



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Width')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width, measured in pixels.

### Width Percent



:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Google Maps', 'Width Percent')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Specifies the component's horizontal width as a percentage
 of the Width of its parent Component.

### Zoom Control Enabled



:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Zoom Control Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates whether the zoom widget on the map ui is currently enabled

### Zoom Gesture Enabled



:eyes: Read-Only property
[[PropertyBlockGetter('Google Maps', 'Zoom Gesture Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates whether the zoom gesture is currently enabled