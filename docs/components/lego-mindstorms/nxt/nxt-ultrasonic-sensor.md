# NXT Ultrasonic Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Nxt|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component that provides a high-level interface to an ultrasonic sensor on a LEGO MINDSTORMS NXT robot._

## Events

### Above Range

[[Event('NXT Ultrasonic Sensor', 'Above Range')]]

_Distance has gone above the range._

### Below Range

[[Event('NXT Ultrasonic Sensor', 'Below Range')]]

_Distance has gone below the range._

### Within Range

[[Event('NXT Ultrasonic Sensor', 'Within Range')]]

_Distance has gone within the range._

## Methods

### GetDistance

[[Method('NXT Ultrasonic Sensor', 'GetDistance', true)]]

{>>Returns `number`<<}

_Returns the current distance in centimeters as a value between 0 and 254, or -1 if the distance can not be read._

## Properties

### Above Range Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Ultrasonic Sensor', 'Above Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the AboveRange event should fire when the distance goes above the TopOfRange._

### Below Range Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Ultrasonic Sensor', 'Below Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the BelowRange event should fire when the distance goes below the BottomOfRange._

### Bluetooth Client

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Ultrasonic Sensor', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

_The BluetoothClient component that should be used for communication._

### Bottom Of Range

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Ultrasonic Sensor', 'Bottom Of Range')]]

| Type | Default |
|:----:|:-------:|
|number|30|

_The bottom of the range used for the BelowRange, WithinRange, and AboveRange events._

### Sensor Port

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Ultrasonic Sensor', 'Sensor Port')]]

| Type | Default |
|:----:|:-------:|
|text|4|

_The sensor port that the sensor is connected to._

### Top Of Range

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Ultrasonic Sensor', 'Top Of Range')]]

| Type | Default |
|:----:|:-------:|
|number|90|

_The top of the range used for the BelowRange, WithinRange, and AboveRange events._

### Within Range Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Ultrasonic Sensor', 'Within Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the WithinRange event should fire when the distance goes between the BottomOfRange and the TopOfRange._