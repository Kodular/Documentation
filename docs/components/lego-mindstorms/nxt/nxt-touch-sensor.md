# NXT Touch Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Nxt|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to a touch sensor on a LEGO MINDSTORMS NXT robot.

## Events

### Pressed

[[Event('NXT Touch Sensor', 'Pressed')]]

Touch sensor has been pressed.

### Released

[[Event('NXT Touch Sensor', 'Released')]]

Touch sensor has been released.

## Methods

### IsPressed

_Block preview not available_

{>>Returns `boolean`<<}

Returns true if the touch sensor is pressed.

## Properties

### Bluetooth Client

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Touch Sensor', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

The BluetoothClient component that should be used for communication.

### Pressed Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Touch Sensor', 'Pressed Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the Pressed event should fire when the touch sensor is pressed.

### Released Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Touch Sensor', 'Released Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the Released event should fire when the touch sensor is released.

### Sensor Port

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Touch Sensor', 'Sensor Port')]]

| Type | Default |
|:----:|:-------:|
|text|1|

The sensor port that the sensor is connected to.