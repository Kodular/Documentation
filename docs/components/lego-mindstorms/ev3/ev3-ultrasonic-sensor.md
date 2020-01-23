# EV3 Ultrasonic Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > EV3|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to an ultrasonic sensor on a LEGO MINDSTORMS EV3 robot.

## Events

### Above Range

Called when the detected distance has gone above the range.

[[Event('EV3 Ultrasonic Sensor', 'Above Range')]]

### Below Range

Called when the detected distance has gone below the range.

[[Event('EV3 Ultrasonic Sensor', 'Below Range')]]

### Within Range

Called when the detected distance has gone within the range.

[[Event('EV3 Ultrasonic Sensor', 'Within Range')]]

## Methods

### Get Distance

<span class="chip chip-number">Returns: <i>Number</i></span> 

Returns the current distance in centimeters as a value between 0 and 254, or -1 if the distance can not be read.

[[Method('EV3 Ultrasonic Sensor', 'Get Distance', True)]]

### Set CM Unit

Measure the distance in centimeters.

[[Method('EV3 Ultrasonic Sensor', 'Set CM Unit', False)]]

### Set Inch Unit

Measure the distance in inches.

[[Method('EV3 Ultrasonic Sensor', 'Set Inch Unit', False)]]

## Properties

### Above Range Event Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the AboveRange event should fire when the distance goes above the TopOfRange.

[[PropertyBlockGetterAndSetter('EV3 Ultrasonic Sensor', 'Above Range Event Enabled')]]

### Below Range Event Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the BelowRange event should fire when the distance goes below the BottomOfRange.

[[PropertyBlockGetterAndSetter('EV3 Ultrasonic Sensor', 'Below Range Event Enabled')]]

### Bluetooth Client

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The BluetoothClient component that should be used for communication.

[[PropertyBlockGetterAndSetter('EV3 Ultrasonic Sensor', 'Bluetooth Client')]]

### Bottom Of Range

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>30</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The bottom of the range used for the BelowRange, WithinRange, and AboveRange events.

[[PropertyBlockGetterAndSetter('EV3 Ultrasonic Sensor', 'Bottom Of Range')]]

### Sensor Port

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The sensor port that the sensor is connected to.

[[PropertyBlockGetterAndSetter('EV3 Ultrasonic Sensor', 'Sensor Port')]]

### Top Of Range

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>90</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The top of the range used for the BelowRange, WithinRange, and AboveRange events.

[[PropertyBlockGetterAndSetter('EV3 Ultrasonic Sensor', 'Top Of Range')]]

### Unit

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>cm</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the unit of distance.

[[PropertyBlockGetterAndSetter('EV3 Ultrasonic Sensor', 'Unit')]]

### Within Range Event Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the WithinRange event should fire when the distance goes between the BottomOfRange and the TopOfRange.

[[PropertyBlockGetterAndSetter('EV3 Ultrasonic Sensor', 'Within Range Event Enabled')]]