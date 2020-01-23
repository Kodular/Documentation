# Accelerometer Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Sensors|API 19, Android 4.4 - 4.4.4 KitKat|4|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component that can detect shaking and measure acceleration approximately in three dimensions using SI units (m/s<sup>2</sup>). The components are: 

*    __xAccel__: 0 when the phone is at rest on a flat surface, positive when the phone is tilted to the right (i.e., its left side is raised), and negative when the phone is tilted to the left (i.e., its right size is raised).
*    __yAccel__: 0 when the phone is at rest on a flat surface, positive when its bottom is raised, and negative when its top is raised. 
*    __zAccel__: Equal to -9.8 (earth's gravity in meters per second per second when the device is at rest parallel to the ground with the display facing up, 0 when perpendicular to the ground, and +9.8 when facing down. The value can also be affected by accelerating it with or against gravity. 

## Events

### Acceleration Changed

[[Event('Accelerometer Sensor', 'Acceleration Changed', 'xAccel', 'yAccel', 'zAccel')]]

| Params | []() |
|--------|------|
|x Accel|Number|
|y Accel|Number|
|z Accel|Number|


Indicates the acceleration changed in the X, Y, and/or Z dimensions.

### Shaking

[[Event('Accelerometer Sensor', 'Shaking')]]

Indicates the device started being shaken or continues to be shaken.

## Properties

### Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

If true, the sensor will generate events. Otherwise, no eventsare generated even if the device is accelerated or shaken.

[[PropertyBlockGetterAndSetter('Accelerometer Sensor', 'Enabled')]]

### Legacy Mode

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Prior to the release that added this property the AccelerometerSensor component passed through sensor values directly as received from the Android system. However these values do not compensate for tablets that default to Landscape mode, requiring the MIT App Inventor programmer to compensate. However compensating would result in incorrect results in Portrait mode devices such as phones. We now detect Landscape mode tablets and perform the compensation. However if your project is already compensating for the change, you will now get incorrect results. Although our preferred solution is for you to update your project, you can also just set this property to “true” and our compensation code will be deactivated. Note: We recommend that you update your project as we may remove this property in a future release.

[[PropertyBlockGetterAndSetter('Accelerometer Sensor', 'Legacy Mode')]]

### Minimum Interval (ms)

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>400</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The minimum interval, in milliseconds, between phone shakes

[[PropertyBlockGetterAndSetter('Accelerometer Sensor', 'Minimum Interval ms')]]

### Sensitivity

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>2</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

A number that encodes how sensitive the accelerometer is. The choices are: 1 = weak, 2 = moderate, 3 = strong.

[[PropertyBlockGetterAndSetter('Accelerometer Sensor', 'Sensitivity')]]

### Available

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Available property getter method (read-only property).

[[PropertyBlockGetter('Accelerometer Sensor', 'Available')]]

### X Accel

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the acceleration in the X-dimension in SI units (m/s^2)  
The sensor must be enabled to return meaningful values.

[[PropertyBlockGetter('Accelerometer Sensor', 'X Accel')]]

### Y Accel

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the acceleration in the Y-dimension in SI units (m/s^2)  
The sensor must be enabled to return meaningful values.

[[PropertyBlockGetter('Accelerometer Sensor', 'Y Accel')]]

### Z Accel

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Returns the acceleration in the Z-dimension in SI units (m/s^2)  
The sensor must be enabled to return meaningful values.

[[PropertyBlockGetter('Accelerometer Sensor', 'Z Accel')]]