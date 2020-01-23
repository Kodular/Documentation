# Orientation Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|Sensors|API 19, Android 4.4 - 4.4.4 KitKat|2|

:mag: {>>Non-visible component<<}

## Overview

Non-visible component providing information about the device's physical orientation in three dimensions: 

 *    __Roll__: 0 degrees when the device is level, increases to 90 degrees as the device is tilted up on its left side, and decreases to -90 degrees when the device is tilted up on its right side. 
 *    __Pitch__: 0 degrees when the device is level, up to 90 degrees as the device is tilted so its top is pointing down, up to 180 degrees as it gets turned over. Similarly, as the device is tilted so its bottom points down, pitch decreases to -90 degrees, then further decreases to -180 degrees as it gets turned all the way over.
 *    __Azimuth__: 0 degrees when the top of the device is pointing north, 90 degrees when it is pointing east, 180 degrees when it is pointing south, 270 degrees when it is pointing west, etc.

 These measurements assume that the device itself is not moving.

## Events

### Orientation Changed

Default OrientationChanged event handler

This event is signalled when the device's orientation has changed. Itreports the new values of azimuth, pich, and roll, and it also sets the Azimuth, Pitch,and roll properties.

Azimuth is the compass heading in degrees, pitch indicates how the deviceis tilted from top to bottom, and roll indicates how much the device is tilted fromside to side.

[[Event('Orientation Sensor', 'Orientation Changed', 'azimuth', 'pitch', 'roll')]]

| Params | []() |
|--------|------|
|azimuth|<span class="chip chip-number">Number</span>|
|pitch|<span class="chip chip-number">Number</span>|
|roll|<span class="chip chip-number">Number</span>|


## Properties

### Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Enabled property getter method.

[[PropertyBlockGetterAndSetter('Orientation Sensor', 'Enabled')]]

### Angle

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Angle property getter method (read-only property). Specifically, thisprovides the angle in which the orientation sensor is tilted, treating

[[PropertyBlockGetter('Orientation Sensor', 'Angle')]]

### Available

<span class="chip chip-boolean">Boolean</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Available property getter method (read-only property).

[[PropertyBlockGetter('Orientation Sensor', 'Available')]]

### Azimuth

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Azimuth property getter method (read-only property)  

To return meaningful values the sensor must be enabled.

[[PropertyBlockGetter('Orientation Sensor', 'Azimuth')]]

### Magnitude

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Magnitude property getter method (read-only property). Specifically, thisreturns a number between 0 and 1, indicating how much the deviceis tilted. For the angle of tilt, use

[[PropertyBlockGetter('Orientation Sensor', 'Magnitude')]]

### Pitch

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Pitch property getter method (read-only property)  

To return meaningful values the sensor must be enabled.

[[PropertyBlockGetter('Orientation Sensor', 'Pitch')]]

### Roll

<span class="chip chip-number">Number</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span> 

Roll property getter method (read-only property)  

To return meaningful values the sensor must be enabled.

[[PropertyBlockGetter('Orientation Sensor', 'Roll')]]