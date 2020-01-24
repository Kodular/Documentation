# EV3 Color Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**LEGO® MINDSTORMS® > EV3**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-Visible component<<}

## Overview

A component that provides a high-level interface to a color sensor on a LEGO MINDSTORMS EV3 robot.

## Events

### Above Range

Light level has gone above the range.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Above%20Range%22,%20%22params%22:%20%5B%5D%7D"></div>


### Below Range

Light level has gone below the range.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Below%20Range%22,%20%22params%22:%20%5B%5D%7D"></div>


### Color Changed

Called when the detected color has changed. The ColorChanged event will occur if the Mode property is set to "color" and the ColorChangedEventEnabled property is set to True.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Color%20Changed%22,%20%22params%22:%20%5B%22color%20Code%22,%20%22color%20Name%22%5D%7D"></div>

| Params | []() |
|--------|------|
|color Code|<span class="chip chip-number">Number</span>|
|color Name|<span class="chip chip-text">Text</span>|


### Within Range

Light level has gone within the range.

<div class="block" ai2-block="event" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Within%20Range%22,%20%22params%22:%20%5B%5D%7D"></div>


## Methods

### Get Color Code

<span class="chip chip-number">Returns: <i>Number</i></span> 

It returns the color code from 0 to 7 corresponding to no color, black, blue, green, yellow, red, white and brown.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Get%20Color%20Code%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Get Color Name

<span class="chip chip-text">Returns: <i>Text</i></span> 

Return the color name in one of "No Color", "Black", "Blue", "Green", "Yellow", "Red", "White", "Brown".

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Get%20Color%20Name%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Get Light Level

<span class="chip chip-number">Returns: <i>Number</i></span> 

It returns the light level in percentage, or -1 when the light level cannot be read.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Get%20Light%20Level%22,%20%22output%22:%20true,%20%22params%22:%20%5B%5D%7D"></div>


### Set Ambient Mode

Make the sensor read the light level without reflected light.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Set%20Ambient%20Mode%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Set Color Mode

Enter the color detection mode.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Set%20Color%20Mode%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


### Set Reflected Mode

Make the sensor read the light level with reflected light.

<div class="block" ai2-block="method" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Set%20Reflected%20Mode%22,%20%22output%22:%20false,%20%22params%22:%20%5B%5D%7D"></div>


## Properties

### Above Range Event Enabled

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Whether the AboveRange event should fire when the light level goes above the TopOfRange.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Above%20Range%20Event%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Above%20Range%20Event%20Enabled%22,%20%22getter%22:%20false%7D"></div>


### Below Range Event Enabled

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Whether the BelowRange event should fire when the light level goes below the BottomOfRange.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Below%20Range%20Event%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Below%20Range%20Event%20Enabled%22,%20%22getter%22:%20false%7D"></div>


### Bluetooth Client

<span class="chip chip-component">Component</span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The BluetoothClient component that should be used for communication.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Bluetooth%20Client%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Bluetooth%20Client%22,%20%22getter%22:%20false%7D"></div>


### Bottom Of Range

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>30</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The bottom of the range used for the BelowRange, WithinRange, and AboveRange events.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Bottom%20Of%20Range%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Bottom%20Of%20Range%22,%20%22getter%22:%20false%7D"></div>


### Color Changed Event Enabled

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Whether the ColorChanged event should fire when the Mode property is set to "color" and the detected color changes.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Color%20Changed%20Event%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Color%20Changed%20Event%20Enabled%22,%20%22getter%22:%20false%7D"></div>


### Mode

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>reflected</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Specifies the mode of the sensor.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Mode%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Mode%22,%20%22getter%22:%20false%7D"></div>


### Sensor Port

<span class="chip chip-text">Text</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-text">Default: <i>1</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span>

The sensor port that the sensor is connected to.


### Top Of Range

<span class="chip chip-number">Number</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-number">Default: <i>60</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

The top of the range used for the BelowRange, WithinRange, and AboveRange events.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Top%20Of%20Range%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Top%20Of%20Range%22,%20%22getter%22:%20false%7D"></div>


### Within Range Event Enabled

<span class="chip chip-boolean">Boolean</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-boolean">Default: <i>False</i></span><span style="user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="chip chip-rw">Read</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-rw">Write</span><span style="user-select: none;">&nbsp;</span>-<span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Designer</span><span style="user-select: none;">&nbsp;</span><span class="chip chip-bd">Blocks</span><span style="user-select: none;">&nbsp;</span>

Whether the WithinRange event should fire when the light level goes between the BottomOfRange and the TopOfRange.

<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Within%20Range%20Event%20Enabled%22,%20%22getter%22:%20true%7D"></div>
<div class="block" ai2-block="property" not-rendered="true" value="%7B%22componentName%22:%20%22EV3%20Color%20Sensor%22,%20%22name%22:%20%22Within%20Range%20Event%20Enabled%22,%20%22getter%22:%20false%7D"></div>
