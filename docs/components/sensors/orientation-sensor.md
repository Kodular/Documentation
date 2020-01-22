# Orientation Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|2|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

<p>Non-visible component providing information about the device's physical orientation in three dimensions: <ul> <li> <strong>Roll</strong>: 0 degrees when the device is level, increases to      90 degrees as the device is tilted up on its left side, and      decreases to -90 degrees when the device is tilted up on its right side.      </li> <li> <strong>Pitch</strong>: 0 degrees when the device is level, up to      90 degrees as the device is tilted so its top is pointing down,      up to 180 degrees as it gets turned over.  Similarly, as the device      is tilted so its bottom points down, pitch decreases to -90      degrees, then further decreases to -180 degrees as it gets turned all the way      over.</li> <li> <strong>Azimuth</strong>: 0 degrees when the top of the device is      pointing north, 90 degrees when it is pointing east, 180 degrees      when it is pointing south, 270 degrees when it is pointing west,      etc.</li></ul>     These measurements assume that the device itself is not moving.</p>

## Events

### Orientation Changed

[[Event('Orientation Sensor', 'Orientation Changed', 'azimuth pitch roll')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |azimuth|`number`|
    |pitch|`number`|
    |roll|`number`|


Default OrientationChanged event handler.

 <p>This event is signalled when the device's orientation has changed.  It
 reports the new values of azimuth, pich, and roll, and it also sets the Azimuth, Pitch,
 and roll properties.</p>
 <p>Azimuth is the compass heading in degrees, pitch indicates how the device
 is tilted from top to bottom, and roll indicates how much the device is tilted from
 side to side.</p>

## Properties

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Orientation Sensor', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Enabled property getter method.

### Angle

:eyes: Read-Only property
[[PropertyBlockGetter('Orientation Sensor', 'Angle')]]

| Type | Default |
|:----:|:-------:|
|number|None|

<p>Angle property getter method (read-only property).  Specifically, this
 provides the angle in which the orientation sensor is tilted, treating

### Available

:eyes: Read-Only property
[[PropertyBlockGetter('Orientation Sensor', 'Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Available property getter method (read-only property).

### Azimuth

:eyes: Read-Only property
[[PropertyBlockGetter('Orientation Sensor', 'Azimuth')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Azimuth property getter method (read-only property).

 <p>To return meaningful values the sensor must be enabled.</p>

### Magnitude

:eyes: Read-Only property
[[PropertyBlockGetter('Orientation Sensor', 'Magnitude')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Magnitude property getter method (read-only property).  Specifically, this
 returns a number between 0 and 1, indicating how much the device
 is tilted.  For the angle of tilt, use

### Pitch

:eyes: Read-Only property
[[PropertyBlockGetter('Orientation Sensor', 'Pitch')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Pitch property getter method (read-only property).

 <p>To return meaningful values the sensor must be enabled.</p>

### Roll

:eyes: Read-Only property
[[PropertyBlockGetter('Orientation Sensor', 'Roll')]]

| Type | Default |
|:----:|:-------:|
|number|None|

Roll property getter method (read-only property).

 <p>To return meaningful values the sensor must be enabled.</p>