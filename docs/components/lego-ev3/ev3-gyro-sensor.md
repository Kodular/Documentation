# EV3 Gyro Sensor

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® EV3|1|API 19 - Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

_A component that provides a high-level interface to a gyro sensor on a LEGO MINDSTORMS EV3 robot._

## Properties

### Bluetooth Client

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Gyro Sensor', 'Bluetooth Client')]]

| Type |
|:----:|
|component|

The BluetoothClient component that should be used for communication.

### Mode

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Gyro Sensor', 'Mode')]]

| Type | Default |
|:----:|:-------:|
|text|angle|

Specifies the mode of the sensor.

### Sensor Port

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Gyro Sensor', 'Sensor Port')]]

| Type | Default |
|:----:|:-------:|
|text|1|

The sensor port that the sensor is connected to.

### Sensor Value Changed Event Enabled

<small>Available as Common Property</small>

:eyes::pencil: Read-Write property
[[PropertyBlockGetterAndSetter('EV3 Gyro Sensor', 'Sensor Value Changed Event Enabled')]]

| Type | Default |
|:----:|:-------:|
|boolean|False|

Whether the SensorValueChanged event should fire when the sensor value changed.