# EV3 Gyro Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**LEGO® MINDSTORMS® > EV3**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

A component that provides a high-level interface to a gyro sensor on a LEGO MINDSTORMS EV3 robot.

## Events

### Sensor Value Changed

Called then the sensor value changed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Gyro%20Sensor%22,%20%22name%22:%20%22Sensor%20Value%20Changed%22,%20%22param%22:%20%5B%22sensor%20Value%22%5D%7D"></div>

| Params | []() |
|--------|------|
|sensor Value|<span class="chip chip-number">Number</span>|

## Methods

### Get Sensor Value

<span class="chip chip-number">Returns: <i>Number</i></span>

Returns the current angle or rotation speed based on current mode, or -1 if the value cannot be read from sensor.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Gyro%20Sensor%22,%20%22name%22:%20%22Get%20Sensor%20Value%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

### Set Angle Mode

Measures the orientation of the sensor.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Gyro%20Sensor%22,%20%22name%22:%20%22Set%20Angle%20Mode%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

### Set Rate Mode

Measures the angular velocity of the sensor.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Gyro%20Sensor%22,%20%22name%22:%20%22Set%20Rate%20Mode%22,%20%22output%22:%20false,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Bluetooth Client

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

The BluetoothClient component that should be used for communication.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Gyro%20Sensor%22,%20%22name%22:%20%22Bluetooth%20Client%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Gyro%20Sensor%22,%20%22name%22:%20%22Bluetooth%20Client%22,%20%22getter%22:%20false%7D"></div>

### Mode

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>angle</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Specifies the mode of the sensor.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Gyro%20Sensor%22,%20%22name%22:%20%22Mode%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Gyro%20Sensor%22,%20%22name%22:%20%22Mode%22,%20%22getter%22:%20false%7D"></div>

### Sensor Port

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>1</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

The sensor port that the sensor is connected to.

### Sensor Value Changed Event Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Whether the SensorValueChanged event should fire when the sensor value changed.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Gyro%20Sensor%22,%20%22name%22:%20%22Sensor%20Value%20Changed%20Event%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Gyro%20Sensor%22,%20%22name%22:%20%22Sensor%20Value%20Changed%20Event%20Enabled%22,%20%22getter%22:%20false%7D"></div>
