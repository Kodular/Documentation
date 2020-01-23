# EV3 Gyro Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Ev3|1|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to a gyro sensor on a LEGO MINDSTORMS EV3 robot.

## Events

### Sensor Value Changed

[[Event('EV3 Gyro Sensor', 'Sensor Value Changed', 'sensorValue')]]

??? tip "Parameters"

    | Name | Type |
    |------|------|
    |sensor Value|`number`|


Called then the sensor value changed.

## Methods

### Get Sensor Value

_Block preview not available_

{>>Returns `number`<<}

Returns the current angle or rotation speed based on current mode, or -1 if the value cannot be read from sensor.

### Set Angle Mode

_Block preview not available_

Measures the orientation of the sensor.

### Set Rate Mode

_Block preview not available_

Measures the angular velocity of the sensor.

## Properties

### Bluetooth Client

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Gyro Sensor', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

The BluetoothClient component that should be used for communication.

### Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Gyro Sensor', 'Mode')]]

| Type | Default |
|:----:|:-------:|
|text|angle|

Specifies the mode of the sensor.

### Sensor Port

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Gyro Sensor', 'Sensor Port')]]

| Type | Default |
|:----:|:-------:|
|text|1|

The sensor port that the sensor is connected to.

### Sensor Value Changed Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Gyro Sensor', 'Sensor Value Changed Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the SensorValueChanged event should fire when the sensor value changed.