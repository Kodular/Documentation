# NXT Touch Sensor

{>> Non-Visible component<<}

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**LEGO® MINDSTORMS® > NXT**|<span class="chip chip-any">API 21, Android 5.0 Lollipop</span>|<span class="chip chip-number">1</span>|

## Overview

A component that provides a high-level interface to a touch sensor on a LEGO MINDSTORMS NXT robot.

## Events

### Pressed

Touch sensor has been pressed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Touch%20Sensor%22,%20%22name%22:%20%22Pressed%22,%20%22param%22:%20%5B%5D%7D"></div>

### Released

Touch sensor has been released.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Touch%20Sensor%22,%20%22name%22:%20%22Released%22,%20%22param%22:%20%5B%5D%7D"></div>

## Methods

### Is Pressed

<span class="chip chip-boolean">Returns: <i>Boolean</i></span>

Returns true if the touch sensor is pressed.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Touch%20Sensor%22,%20%22name%22:%20%22Is%20Pressed%22,%20%22output%22:%20true,%20%22param%22:%20%5B%5D%7D"></div>

## Properties

### Bluetooth Client

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-component">Component</span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

The BluetoothClient component that should be used for communication.

### Pressed Event Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Whether the Pressed event should fire when the touch sensor is pressed.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Touch%20Sensor%22,%20%22name%22:%20%22Pressed%20Event%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Touch%20Sensor%22,%20%22name%22:%20%22Pressed%20Event%20Enabled%22,%20%22getter%22:%20false%7D"></div>

### Released Event Enabled

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span> :heavy_minus_sign: <span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span></span>

Whether the Released event should fire when the touch sensor is released.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Touch%20Sensor%22,%20%22name%22:%20%22Released%20Event%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Touch%20Sensor%22,%20%22name%22:%20%22Released%20Event%20Enabled%22,%20%22getter%22:%20false%7D"></div>

### Sensor Port

<span style="user-select: none; white-space:pre-wrap;"><span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>1</i></span> :heavy_minus_sign: <span class="chip chip-rw">Write</span>  - <span class="chip chip-bd">Designer</span></span>

The sensor port that the sensor is connected to.
