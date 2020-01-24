# EV3 Touch Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**LEGO® MINDSTORMS® > EV3**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to a touch sensor on a LEGO MINDSTORMS EV3 robot.

## Events

### Pressed

Called when the touch sensor is pressed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Touch%20Sensor%22,%20%22name%22:%20%22Pressed%22,%20%22params%22:%20%5B%5D%7D"></div>


### Released

Called when the touch sensor is pressed.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Touch%20Sensor%22,%20%22name%22:%20%22Released%22,%20%22params%22:%20%5B%5D%7D"></div>


## Methods

### Is Pressed

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if the touch sensor is pressed.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Touch%20Sensor%22,%20%22name%22:%20%22Is%20Pressed%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


## Properties

### Bluetooth Client

<span class="chip chip-component">Component</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The BluetoothClient component that should be used for communication.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Touch%20Sensor%22,%20%22name%22:%20%22Bluetooth%20Client%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Touch%20Sensor%22,%20%22name%22:%20%22Bluetooth%20Client%22,%20%22getter%22:%20false%7D"></div>


### Pressed Event Enabled

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies whether the Pressed event should fire when the touch sensor ispressed.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Touch%20Sensor%22,%20%22name%22:%20%22Pressed%20Event%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Touch%20Sensor%22,%20%22name%22:%20%22Pressed%20Event%20Enabled%22,%20%22getter%22:%20false%7D"></div>


### Released Event Enabled

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Whether the Released event should fire when the touch sensor is released.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Touch%20Sensor%22,%20%22name%22:%20%22Released%20Event%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Touch%20Sensor%22,%20%22name%22:%20%22Released%20Event%20Enabled%22,%20%22getter%22:%20false%7D"></div>


### Sensor Port

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>1</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

The sensor port that the sensor is connected to.
