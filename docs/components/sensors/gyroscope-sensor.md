# Gyroscope Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_<p>Non-visible component that can measure angular velocity in three dimensions in units of degrees per second.</p><p>In order to function, the component must have its <code>Enabled</code> property set to True, and the device must have a gyroscope sensor.</p>_

## Properties

### Enabled

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Gyroscope Sensor', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

Enabled property getter method.

### Available



:eyes: Read-Only property
[[PropertyBlockGetter('Gyroscope Sensor', 'Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

Indicates whether a gyroscope sensor is available.

### X Angular Velocity



:eyes: Read-Only property
[[PropertyBlockGetter('Gyroscope Sensor', 'X Angular Velocity')]]

| Type | Default |
|:----:|:-------:|
|number|None|

The angular velocity around the X axis, in degrees per second.

### Y Angular Velocity



:eyes: Read-Only property
[[PropertyBlockGetter('Gyroscope Sensor', 'Y Angular Velocity')]]

| Type | Default |
|:----:|:-------:|
|number|None|

The angular velocity around the Y axis, in degrees per second.

### Z Angular Velocity



:eyes: Read-Only property
[[PropertyBlockGetter('Gyroscope Sensor', 'Z Angular Velocity')]]

| Type | Default |
|:----:|:-------:|
|number|None|

The angular velocity around the Z axis, in degrees per second.