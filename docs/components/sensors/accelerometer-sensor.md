# Accelerometer Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|Sensors|4|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_Non-visible component that can detect shaking and measure acceleration approximately in three dimensions using SI units (m/s<sup>2</sup>).  The components are: <ul>
<li> <strong>xAccel</strong>: 0 when the phone is at rest on a flat      surface, positive when the phone is tilted to the right (i.e.,      its left side is raised), and negative when the phone is tilted      to the left (i.e., its right size is raised).</li>
 <li> <strong>yAccel</strong>: 0 when the phone is at rest on a flat      surface, positive when its bottom is raised, and negative when      its top is raised. </li>
 <li> <strong>zAccel</strong>: Equal to -9.8 (earth's gravity in meters per      second per second when the device is at rest parallel to the ground      with the display facing up,      0 when perpendicular to the ground, and +9.8 when facing down.       The value can also be affected by accelerating it with or against      gravity. </li></ul>_

## Events

### Acceleration Changed

[[Event('Accelerometer Sensor', 'Acceleration Changed', 'xAccel yAccel zAccel')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |x Accel|`number`|
    |y Accel|`number`|
    |z Accel|`number`|


_Indicates the acceleration changed in the X, Y, and/or Z dimensions._

### Shaking

[[Event('Accelerometer Sensor', 'Shaking')]]

_Indicates the device started being shaken or continues to be shaken._

## Properties

### Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Accelerometer Sensor', 'Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|True|

_If true, the sensor will generate events.  Otherwise, no events
 are generated even if the device is accelerated or shaken._

### Legacy Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Accelerometer Sensor', 'Legacy Mode')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Prior to the release that added this property the AccelerometerSensor component passed through sensor values directly as received from the Android system. However these values do not compensate for tablets that default to Landscape mode, requiring the MIT App Inventor programmer to compensate. However compensating would result in incorrect results in Portrait mode devices such as phones. We now detect Landscape mode tablets and perform the compensation. However if your project is already compensating for the change, you will now get incorrect results. Although our preferred solution is for you to update your project, you can also just set this property to “true” and our compensation code will be deactivated. Note: We recommend that you update your project as we may remove this property in a future release._

### Minimum Interval (ms)

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Accelerometer Sensor', 'Minimum Interval (ms)')]]

| Type | Default |
|:----:|:-------:|
|number|400|

_The minimum interval, in milliseconds, between phone shakes_

### Sensitivity

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('Accelerometer Sensor', 'Sensitivity')]]

| Type | Default |
|:----:|:-------:|
|number|2|

_A number that encodes how sensitive the accelerometer is. The choices are: 1 = weak, 2 = moderate,  3 = strong._

### Available

:eyes: Read-Only property
[[PropertyBlockGetter('Accelerometer Sensor', 'Available')]]

| Type | Default |
|:----:|:-------:|
|boolean|None|

_Available property getter method (read-only property)._

### X Accel

:eyes: Read-Only property
[[PropertyBlockGetter('Accelerometer Sensor', 'X Accel')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the acceleration in the X-dimension in SI units (m/s^2).
 The sensor must be enabled to return meaningful values._

### Y Accel

:eyes: Read-Only property
[[PropertyBlockGetter('Accelerometer Sensor', 'Y Accel')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the acceleration in the Y-dimension in SI units (m/s^2).
 The sensor must be enabled to return meaningful values._

### Z Accel

:eyes: Read-Only property
[[PropertyBlockGetter('Accelerometer Sensor', 'Z Accel')]]

| Type | Default |
|:----:|:-------:|
|number|None|

_Returns the acceleration in the Z-dimension in SI units (m/s^2).
 The sensor must be enabled to return meaningful values._