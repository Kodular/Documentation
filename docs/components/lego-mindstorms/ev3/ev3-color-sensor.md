# EV3 Color Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > EV3|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to a color sensor on a LEGO MINDSTORMS EV3 robot.

## Events

### Above Range

Light level has gone above the range.

[[Event('EV3 Color Sensor', 'Above Range')]]

### Below Range

Light level has gone below the range.

[[Event('EV3 Color Sensor', 'Below Range')]]

### Color Changed

Called when the detected color has changed. The ColorChanged event will occur if the Mode property is set to "color" and the ColorChangedEventEnabled property is set to True.

[[Event('EV3 Color Sensor', 'Color Changed', 'colorCode', 'colorName')]]

| Params | []() |
|--------|------|
|color Code|<span class="chip chip-number">Number</span>|
|color Name|<span class="chip chip-text">Text</span>|


### Within Range

Light level has gone within the range.

[[Event('EV3 Color Sensor', 'Within Range')]]

## Methods

### Get Color Code

<span class="chip chip-number">Returns: <i>Number</i></span> 

It returns the color code from 0 to 7 corresponding to no color, black, blue, green, yellow, red, white and brown.

[[Method('EV3 Color Sensor', 'Get Color Code', True)]]

### Get Color Name

<span class="chip chip-text">Returns: <i>Text</i></span> 

Return the color name in one of "No Color", "Black", "Blue", "Green", "Yellow", "Red", "White", "Brown".

[[Method('EV3 Color Sensor', 'Get Color Name', True)]]

### Get Light Level

<span class="chip chip-number">Returns: <i>Number</i></span> 

It returns the light level in percentage, or -1 when the light level cannot be read.

[[Method('EV3 Color Sensor', 'Get Light Level', True)]]

### Set Ambient Mode

Make the sensor read the light level without reflected light.

[[Method('EV3 Color Sensor', 'Set Ambient Mode', False)]]

### Set Color Mode

Enter the color detection mode.

[[Method('EV3 Color Sensor', 'Set Color Mode', False)]]

### Set Reflected Mode

Make the sensor read the light level with reflected light.

[[Method('EV3 Color Sensor', 'Set Reflected Mode', False)]]

## Properties

### Above Range Event Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the AboveRange event should fire when the light level goes above the TopOfRange.

[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Above Range Event Enabled')]]

### Below Range Event Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the BelowRange event should fire when the light level goes below the BottomOfRange.

[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Below Range Event Enabled')]]

### Bluetooth Client

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The BluetoothClient component that should be used for communication.

[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Bluetooth Client')]]

### Bottom Of Range

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>30</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The bottom of the range used for the BelowRange, WithinRange, and AboveRange events.

[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Bottom Of Range')]]

### Color Changed Event Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the ColorChanged event should fire when the Mode property is set to "color" and the detected color changes.

[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Color Changed Event Enabled')]]

### Mode

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>reflected</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the mode of the sensor.

[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Mode')]]

### Sensor Port

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The sensor port that the sensor is connected to.

[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Sensor Port')]]

### Top Of Range

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>60</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The top of the range used for the BelowRange, WithinRange, and AboveRange events.

[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Top Of Range')]]

### Within Range Event Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the WithinRange event should fire when the light level goes between the BottomOfRange and the TopOfRange.

[[PropertyBlockGetterAndSetter('EV3 Color Sensor', 'Within Range Event Enabled')]]