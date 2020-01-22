# NXT Touch Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Nxt|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component that provides a high-level interface to a touch sensor on a LEGO MINDSTORMS NXT robot._

## Events

### Pressed

[[Event('NXT Touch Sensor', 'Pressed')]]

_Touch sensor has been pressed._

### Released

[[Event('NXT Touch Sensor', 'Released')]]

_Touch sensor has been released._

## Methods

### IsPressed

[[Method('NXT Touch Sensor', 'IsPressed', true)]]

{>>Returns `boolean`<<}

_Returns true if the touch sensor is pressed._

## Properties

### Bluetooth Client

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Touch Sensor', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

_The BluetoothClient component that should be used for communication._

### Pressed Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Touch Sensor', 'Pressed Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the Pressed event should fire when the touch sensor is pressed._

### Released Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Touch Sensor', 'Released Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the Released event should fire when the touch sensor is released._

### Sensor Port

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('NXT Touch Sensor', 'Sensor Port')]]

| Type | Default |
|:----:|:-------:|
|text|1|

_The sensor port that the sensor is connected to._