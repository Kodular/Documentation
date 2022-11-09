# Accelerometer Sensor

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">5</span>|

## Overview

Non-visible component that can detect shaking and measure acceleration approximately in three dimensions using SI units (m/s<sup>2</sup>). The components are: 

*    __xAccel__: 0 when the phone is at rest on a flat surface, positive when the phone is tilted to the right (i.e., its left side is raised), and negative when the phone is tilted to the left (i.e., its right size is raised).
*    __yAccel__: 0 when the phone is at rest on a flat surface, positive when its bottom is raised, and negative when its top is raised. 
*    __zAccel__: Equal to -9.8 (earth's gravity in meters per second per second when the device is at rest parallel to the ground with the display facing up, 0 when perpendicular to the ground, and +9.8 when facing down. The value can also be affected by accelerating it with or against gravity.

## Events

### Acceleration Changed

Indicates the acceleration changed in the X, Y, and/or Z dimensions.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Accelerometer%20Sensor%22,%20%22name%22:%20%22Acceleration%20Changed%22,%20%22param%22:%20%5B%22x%20Accel%22,%20%22y%20Accel%22,%20%22z%20Accel%22%5D%7D"></div>

| Params | []() |
|--------|------|
|x Accel|<span class="chip chip-number">Number</span>|
|y Accel|<span class="chip chip-number">Number</span>|
|z Accel|<span class="chip chip-number">Number</span>|

### Shaking

Indicates the device started being shaken or continues to be shaken.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Accelerometer%20Sensor%22,%20%22name%22:%20%22Shaking%22,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Available

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Available property getter method (read-only property).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Accelerometer%20Sensor%22,%20%22name%22:%20%22Available%22,%20%22getter%22:%20true%7D"></div>

### Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

If true, the sensor will generate events. Otherwise, no eventsare generated even if the device is accelerated or shaken.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Accelerometer%20Sensor%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Accelerometer%20Sensor%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>

### Legacy Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

Prior to the release that added this property the AccelerometerSensor component passed through sensor values directly as received from the Android system. However these values do not compensate for tablets that default to Landscape mode, requiring the MIT App Inventor programmer to compensate. However compensating would result in incorrect results in Portrait mode devices such as phones. We now detect Landscape mode tablets and perform the compensation. However if your project is already compensating for the change, you will now get incorrect results. Although our preferred solution is for you to update your project, you can also just set this property to “true” and our compensation code will be deactivated. Note: We recommend that you update your project as we may remove this property in a future release.

### Minimum Interval (ms)

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>400</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The minimum interval, in milliseconds, between phone shakes

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Accelerometer%20Sensor%22,%20%22name%22:%20%22Minimum%20Interval%20(ms)%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Accelerometer%20Sensor%22,%20%22name%22:%20%22Minimum%20Interval%20(ms)%22,%20%22getter%22:%20false%7D"></div>

### Sensitivity

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>2</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

A number that encodes how sensitive the accelerometer is. The choices are: 1 = weak, 2 = moderate, 3 = strong.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Accelerometer%20Sensor%22,%20%22name%22:%20%22Sensitivity%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Accelerometer%20Sensor%22,%20%22name%22:%20%22Sensitivity%22,%20%22getter%22:%20false%7D"></div>

### X Accel

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns the acceleration in the X-dimension in SI units (m/s^2)  
The sensor must be enabled to return meaningful values.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Accelerometer%20Sensor%22,%20%22name%22:%20%22X%20Accel%22,%20%22getter%22:%20true%7D"></div>

### Y Accel

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns the acceleration in the Y-dimension in SI units (m/s^2)  
The sensor must be enabled to return meaningful values.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Accelerometer%20Sensor%22,%20%22name%22:%20%22Y%20Accel%22,%20%22getter%22:%20true%7D"></div>

### Z Accel

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Returns the acceleration in the Z-dimension in SI units (m/s^2)  
The sensor must be enabled to return meaningful values.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Accelerometer%20Sensor%22,%20%22name%22:%20%22Z%20Accel%22,%20%22getter%22:%20true%7D"></div>
