# NXT Sound Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Nxt|1|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to a sound sensor on a LEGO MINDSTORMS NXT robot.

## Events

### Above Range

[[Event('NXT Sound Sensor', 'Above Range')]]

Sound level has gone above the range.

### Below Range

[[Event('NXT Sound Sensor', 'Below Range')]]

Sound level has gone below the range.

### Within Range

[[Event('NXT Sound Sensor', 'Within Range')]]

Sound level has gone within the range.

## Methods

### Get Sound Level

_Block preview not available_

{>>Returns `number`<<}

Returns the current sound level as a value between 0 and 1023, or -1 if the sound level can not be read.

## Properties

### Above Range Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Above Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the AboveRange event should fire when the sound level goes above the TopOfRange.

### Below Range Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Below Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the BelowRange event should fire when the sound level goes below the BottomOfRange.

### Bluetooth Client

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

The BluetoothClient component that should be used for communication.

### Bottom Of Range

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Bottom Of Range')]]

| Type | Default |
|:----:|:-------:|
|number|256|

The bottom of the range used for the BelowRange, WithinRange, and AboveRange events.

### Sensor Port

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Sensor Port')]]

| Type | Default |
|:----:|:-------:|
|text|2|

The sensor port that the sensor is connected to.

### Top Of Range

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Top Of Range')]]

| Type | Default |
|:----:|:-------:|
|number|767|

The top of the range used for the BelowRange, WithinRange, and AboveRange events.

### Within Range Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Within Range Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the WithinRange event should fire when the sound level goes between the BottomOfRange and the TopOfRange.