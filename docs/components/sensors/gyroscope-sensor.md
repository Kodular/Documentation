# Gyroscope Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

Non-visible component that can measure angular velocity in three dimensions in units of degrees per second.

In order to function, the component must have its `` Enabled `` property set to True, and the device must have a gyroscope sensor.

## Events

### Gyroscope Changed

Indicates that the gyroscope sensor data has changed. The timestamp parameter is the time in nanoseconds at which the event occurred.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Gyroscope%20Sensor%22,%20%22name%22:%20%22Gyroscope%20Changed%22,%20%22param%22:%20%5B%22x%20Angular%20Velocity%22,%20%22y%20Angular%20Velocity%22,%20%22z%20Angular%20Velocity%22,%20%22timestamp%22%5D%7D"></div>

| Params | []() |
|--------|------|
|x Angular Velocity|<span class="chip chip-number">Number</span>|
|y Angular Velocity|<span class="chip chip-number">Number</span>|
|z Angular Velocity|<span class="chip chip-number">Number</span>|
|timestamp|<span class="chip chip-number">Number</span>|

## Properties

### Available

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

Indicates whether a gyroscope sensor is available.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Gyroscope%20Sensor%22,%20%22name%22:%20%22Available%22,%20%22getter%22:%20true%7D"></div>

### Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Enabled property getter method.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Gyroscope%20Sensor%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Gyroscope%20Sensor%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>

### X Angular Velocity

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The angular velocity around the X axis, in degrees per second.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Gyroscope%20Sensor%22,%20%22name%22:%20%22X%20Angular%20Velocity%22,%20%22getter%22:%20true%7D"></div>

### Y Angular Velocity

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The angular velocity around the Y axis, in degrees per second.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Gyroscope%20Sensor%22,%20%22name%22:%20%22Y%20Angular%20Velocity%22,%20%22getter%22:%20true%7D"></div>

### Z Angular Velocity

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span>  - <span class="chip chip-bd">Blocks</span></span>

The angular velocity around the Z axis, in degrees per second.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Gyroscope%20Sensor%22,%20%22name%22:%20%22Z%20Angular%20Velocity%22,%20%22getter%22:%20true%7D"></div>
