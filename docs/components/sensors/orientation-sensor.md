# Orientation Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**Sensors**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">2</span>|

:mag: {>>Non-Visible component<<}

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

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22Orientation%20Sensor%22,%20%22name%22:%20%22Orientation%20Changed%22,%20%22param%22:%20%5B%22azimuth%22,%20%22pitch%22,%20%22roll%22%5D%7D"></div>

| Params | []() |
|--------|------|
|azimuth|<span class="chip chip-number">Number</span>|
|pitch|<span class="chip chip-number">Number</span>|
|roll|<span class="chip chip-number">Number</span>|

## Properties

### Angle

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Angle property getter method (read-only property). Specifically, thisprovides the angle in which the orientation sensor is tilted, treating

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Orientation%20Sensor%22,%20%22name%22:%20%22Angle%22,%20%22getter%22:%20true%7D"></div>

### Available

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Available property getter method (read-only property).

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Orientation%20Sensor%22,%20%22name%22:%20%22Available%22,%20%22getter%22:%20true%7D"></div>

### Azimuth

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Azimuth property getter method (read-only property)  

To return meaningful values the sensor must be enabled.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Orientation%20Sensor%22,%20%22name%22:%20%22Azimuth%22,%20%22getter%22:%20true%7D"></div>

### Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>True</i></span>          <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span>&#32;</span>

Enabled property getter method.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Orientation%20Sensor%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Orientation%20Sensor%22,%20%22name%22:%20%22Enabled%22,%20%22getter%22:%20false%7D"></div>

### Magnitude

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Magnitude property getter method (read-only property). Specifically, thisreturns a number between 0 and 1, indicating how much the deviceis tilted. For the angle of tilt, use

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Orientation%20Sensor%22,%20%22name%22:%20%22Magnitude%22,%20%22getter%22:%20true%7D"></div>

### Pitch

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Pitch property getter method (read-only property)  

To return meaningful values the sensor must be enabled.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Orientation%20Sensor%22,%20%22name%22:%20%22Pitch%22,%20%22getter%22:%20true%7D"></div>

### Roll

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-number">Number</span>          <span class="chip chip-rw">Read</span> - <span class="chip chip-bd">Blocks</span>&#32;</span>

Roll property getter method (read-only property)  

To return meaningful values the sensor must be enabled.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22Orientation%20Sensor%22,%20%22name%22:%20%22Roll%22,%20%22getter%22:%20true%7D"></div>
