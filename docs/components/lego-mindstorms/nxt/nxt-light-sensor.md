# NXT Light Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|**LEGO® MINDSTORMS® > NXT**|<span class="chip chip-any">API 19, Android 4.4 - 4.4.4 KitKat</span>|<span class="chip chip-number">1</span>|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to a light sensor on a LEGO MINDSTORMS NXT robot.

## Events

### Above Range

Light level has gone above the range.

[[Event('NXT Light Sensor', 'Above Range')]]

### Below Range

Light level has gone below the range.

[[Event('NXT Light Sensor', 'Below Range')]]

### Within Range

Light level has gone within the range.

[[Event('NXT Light Sensor', 'Within Range')]]

## Methods

### Get Light Level

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the current light level as a value between 0 and 1023, or -1 if the light level can not be read.

[[Method('NXT Light Sensor', 'Get Light Level', True)]]

## Properties

### Above Range Event Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the AboveRange event should fire when the light level goes above the TopOfRange.

[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Above Range Event Enabled')]]

### Below Range Event Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the BelowRange event should fire when the light level goes below the BottomOfRange.

[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Below Range Event Enabled')]]

### Bluetooth Client

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

The BluetoothClient component that should be used for communication.

### Bottom Of Range

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>256</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The bottom of the range used for the BelowRange, WithinRange, and AboveRange events.

[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Bottom Of Range')]]

### Generate Light

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the light sensor should generate light.

[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Generate Light')]]

### Sensor Port

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>3</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> 

The sensor port that the sensor is connected to.

### Top Of Range

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>767</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The top of the range used for the BelowRange, WithinRange, and AboveRange events.

[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Top Of Range')]]

### Within Range Event Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the WithinRange event should fire when the light level goes between the BottomOfRange and the TopOfRange.

[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Within Range Event Enabled')]]