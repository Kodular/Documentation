# NXT Light Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**LEGO® MINDSTORMS® > NXT**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

A component that provides a high-level interface to a light sensor on a LEGO MINDSTORMS NXT robot.

## Events

### Above Range

Light level has gone above the range.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Light%20Sensor%22,%20%22name%22:%20%22Above%20Range%22,%20%22params%22:%20%5B%5D%7D"></div>


### Below Range

Light level has gone below the range.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Light%20Sensor%22,%20%22name%22:%20%22Below%20Range%22,%20%22params%22:%20%5B%5D%7D"></div>


### Within Range

Light level has gone within the range.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Light%20Sensor%22,%20%22name%22:%20%22Within%20Range%22,%20%22params%22:%20%5B%5D%7D"></div>


## Methods

### Get Light Level

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the current light level as a value between 0 and 1023, or -1 if the light level can not be read.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Light%20Sensor%22,%20%22name%22:%20%22Get%20Light%20Level%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


## Properties

### Above Range Event Enabled

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Whether the AboveRange event should fire when the light level goes above the TopOfRange.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Light%20Sensor%22,%20%22name%22:%20%22Above%20Range%20Event%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Light%20Sensor%22,%20%22name%22:%20%22Above%20Range%20Event%20Enabled%22,%20%22getter%22:%20false%7D"></div>


### Below Range Event Enabled

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Whether the BelowRange event should fire when the light level goes below the BottomOfRange.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Light%20Sensor%22,%20%22name%22:%20%22Below%20Range%20Event%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Light%20Sensor%22,%20%22name%22:%20%22Below%20Range%20Event%20Enabled%22,%20%22getter%22:%20false%7D"></div>


### Bluetooth Client

<span class="chip chip-component">Component</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

The BluetoothClient component that should be used for communication.


### Bottom Of Range

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>256</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The bottom of the range used for the BelowRange, WithinRange, and AboveRange events.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Light%20Sensor%22,%20%22name%22:%20%22Bottom%20Of%20Range%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Light%20Sensor%22,%20%22name%22:%20%22Bottom%20Of%20Range%22,%20%22getter%22:%20false%7D"></div>


### Generate Light

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Whether the light sensor should generate light.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Light%20Sensor%22,%20%22name%22:%20%22Generate%20Light%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Light%20Sensor%22,%20%22name%22:%20%22Generate%20Light%22,%20%22getter%22:%20false%7D"></div>


### Sensor Port

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>3</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

The sensor port that the sensor is connected to.


### Top Of Range

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>767</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The top of the range used for the BelowRange, WithinRange, and AboveRange events.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Light%20Sensor%22,%20%22name%22:%20%22Top%20Of%20Range%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Light%20Sensor%22,%20%22name%22:%20%22Top%20Of%20Range%22,%20%22getter%22:%20false%7D"></div>


### Within Range Event Enabled

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Whether the WithinRange event should fire when the light level goes between the BottomOfRange and the TopOfRange.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Light%20Sensor%22,%20%22name%22:%20%22Within%20Range%20Event%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22NXT%20Light%20Sensor%22,%20%22name%22:%20%22Within%20Range%20Event%20Enabled%22,%20%22getter%22:%20false%7D"></div>
