# EV3 Gyro Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Ev3|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component that provides a high-level interface to a gyro sensor on a LEGO MINDSTORMS EV3 robot._

## Events

### Sensor Value Changed

[[Event('EV3 Gyro Sensor', 'Sensor Value Changed', 'sensorValue')]]

??? tip "Parameters"
    | Name | Type |
    |------|------|
    |sensor Value|`number`|


_Called then the sensor value changed._

## Methods

### GetSensorValue

[[Method('EV3 Gyro Sensor', 'GetSensorValue', true)]]

{>>Returns `number`<<}

_Returns the current angle or rotation speed based on current mode, or -1 if the value cannot be read from sensor._

### SetAngleMode

[[Method('EV3 Gyro Sensor', 'SetAngleMode', false)]]

_Measures the orientation of the sensor._

### SetRateMode

[[Method('EV3 Gyro Sensor', 'SetRateMode', false)]]

_Measures the angular velocity of the sensor._

## Properties

### Bluetooth Client

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Gyro Sensor', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

_The BluetoothClient component that should be used for communication._

### Mode

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Gyro Sensor', 'Mode')]]

| Type | Default |
|:----:|:-------:|
|text|angle|

_Specifies the mode of the sensor._

### Sensor Port

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Gyro Sensor', 'Sensor Port')]]

| Type | Default |
|:----:|:-------:|
|text|1|

_The sensor port that the sensor is connected to._

### Sensor Value Changed Event Enabled

<small>Available as ^^Common^^ Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Gyro Sensor', 'Sensor Value Changed Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

_Whether the SensorValueChanged event should fire when the sensor value changed._