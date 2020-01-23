# Gyroscope Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Sensors|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component that can measure angular velocity in three dimensions in units of degrees per second.

In order to function, the component must have its `` Enabled `` property set to True, and the device must have a gyroscope sensor.

## Events

### Gyroscope Changed

[[Event('Gyroscope Sensor', 'Gyroscope Changed', 'xAngularVelocity', 'yAngularVelocity', 'zAngularVelocity', 'timestamp')]]

| Params | []() |
|--------|------|
|x Angular Velocity|Number|
|y Angular Velocity|Number|
|z Angular Velocity|Number|
|timestamp|Number|


Indicates that the gyroscope sensor data has changed. The timestamp parameter is the time in nanoseconds at which the event occurred.

## Properties

### Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Enabled property getter method.

[[PropertyBlockGetterAndSetter('Gyroscope Sensor', 'Enabled')]]

### Available

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Indicates whether a gyroscope sensor is available.

[[PropertyBlockGetter('Gyroscope Sensor', 'Available')]]

### X Angular Velocity

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The angular velocity around the X axis, in degrees per second.

[[PropertyBlockGetter('Gyroscope Sensor', 'X Angular Velocity')]]

### Y Angular Velocity

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The angular velocity around the Y axis, in degrees per second.

[[PropertyBlockGetter('Gyroscope Sensor', 'Y Angular Velocity')]]

### Z Angular Velocity

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

The angular velocity around the Z axis, in degrees per second.

[[PropertyBlockGetter('Gyroscope Sensor', 'Z Angular Velocity')]]