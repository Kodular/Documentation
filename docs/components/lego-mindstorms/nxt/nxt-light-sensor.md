# NXT Light Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Nxt|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to a light sensor on a LEGO MINDSTORMS NXT robot.

## Events

### Above Range

[[Event('NXT Light Sensor', 'Above Range')]]

Light level has gone above the range.

### Below Range

[[Event('NXT Light Sensor', 'Below Range')]]

Light level has gone below the range.

### Within Range

[[Event('NXT Light Sensor', 'Within Range')]]

Light level has gone within the range.

## Methods

### Get Light Level

[[Method('NXT Light Sensor', 'Get Light Level', True)]]

{>>Returns `number`<<}

Returns the current light level as a value between 0 and 1023, or -1 if the light level can not be read.

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

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The BluetoothClient component that should be used for communication.

[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Bluetooth Client')]]

### Bottom Of Range

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>256</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The bottom of the range used for the BelowRange, WithinRange, and AboveRange events.

[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Bottom Of Range')]]

### Generate Light

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the light sensor should generate light.

[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Generate Light')]]

### Sensor Port

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>3</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The sensor port that the sensor is connected to.

[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Sensor Port')]]

### Top Of Range

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>767</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The top of the range used for the BelowRange, WithinRange, and AboveRange events.

[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Top Of Range')]]

### Within Range Event Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the WithinRange event should fire when the light level goes between the BottomOfRange and the TopOfRange.

[[PropertyBlockGetterAndSetter('NXT Light Sensor', 'Within Range Event Enabled')]]