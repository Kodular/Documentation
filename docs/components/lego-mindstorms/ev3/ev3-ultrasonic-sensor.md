# EV3 Ultrasonic Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Ev3|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component that provides a high-level interface to an ultrasonic sensor on a LEGO MINDSTORMS EV3 robot._

## Events

### Above Range

[[Event('EV3 Ultrasonic Sensor', 'Above Range')]]

Called when the detected distance has gone above the range.

### Below Range

[[Event('EV3 Ultrasonic Sensor', 'Below Range')]]

Called when the detected distance has gone below the range.

### Within Range

[[Event('EV3 Ultrasonic Sensor', 'Within Range')]]

Called when the detected distance has gone within the range.

## Methods

### GetDistance

[[Method('EV3 Ultrasonic Sensor', 'GetDistance', true)]]

{>>Returns `number`<<}

Returns the current distance in centimeters as a value between 0 and 254, or -1 if the distance can not be read.

### SetCmUnit

[[Method('EV3 Ultrasonic Sensor', 'SetCmUnit', false)]]

Measure the distance in centimeters.

### SetInchUnit

[[Method('EV3 Ultrasonic Sensor', 'SetInchUnit', false)]]

Measure the distance in inches.

## Properties

### Above Range Event Enabled

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Ultrasonic Sensor', 'Above Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the AboveRange event should fire when the distance goes above the TopOfRange.

### Below Range Event Enabled

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Ultrasonic Sensor', 'Below Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the BelowRange event should fire when the distance goes below the BottomOfRange.

### Bluetooth Client

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Ultrasonic Sensor', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

The BluetoothClient component that should be used for communication.

### Bottom Of Range

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Ultrasonic Sensor', 'Bottom Of Range')]]

| Type | Default |
|:----:|:-------:|
|number|30|

The bottom of the range used for the BelowRange, WithinRange, and AboveRange events.

### Sensor Port

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Ultrasonic Sensor', 'Sensor Port')]]

| Type | Default |
|:----:|:-------:|
|text|1|

The sensor port that the sensor is connected to.

### Top Of Range

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Ultrasonic Sensor', 'Top Of Range')]]

| Type | Default |
|:----:|:-------:|
|number|90|

The top of the range used for the BelowRange, WithinRange, and AboveRange events.

### Unit

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Ultrasonic Sensor', 'Unit')]]

| Type | Default |
|:----:|:-------:|
|text|cm|

Specifies the unit of distance.

### Within Range Event Enabled

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Ultrasonic Sensor', 'Within Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the WithinRange event should fire when the distance goes between the BottomOfRange and the TopOfRange.