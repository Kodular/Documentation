# EV3 Gyro Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Ev3|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to a gyro sensor on a LEGO MINDSTORMS EV3 robot.

## Events

### Sensor Value Changed

[[Event('EV3 Gyro Sensor', 'Sensor Value Changed', 'sensorValue')]]

| Params | []() |
|--------|------|
|sensor Value|Number|


Called then the sensor value changed.

## Methods

### Get Sensor Value

[[Method('EV3 Gyro Sensor', 'Get Sensor Value', True)]]

{>>Returns `number`<<}

Returns the current angle or rotation speed based on current mode, or -1 if the value cannot be read from sensor.

### Set Angle Mode

[[Method('EV3 Gyro Sensor', 'Set Angle Mode', False)]]

Measures the orientation of the sensor.

### Set Rate Mode

[[Method('EV3 Gyro Sensor', 'Set Rate Mode', False)]]

Measures the angular velocity of the sensor.

## Properties

### Bluetooth Client

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The BluetoothClient component that should be used for communication.

[[PropertyBlockGetterAndSetter('EV3 Gyro Sensor', 'Bluetooth Client')]]

### Mode

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>angle</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Specifies the mode of the sensor.

[[PropertyBlockGetterAndSetter('EV3 Gyro Sensor', 'Mode')]]

### Sensor Port

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The sensor port that the sensor is connected to.

[[PropertyBlockGetterAndSetter('EV3 Gyro Sensor', 'Sensor Port')]]

### Sensor Value Changed Event Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the SensorValueChanged event should fire when the sensor value changed.

[[PropertyBlockGetterAndSetter('EV3 Gyro Sensor', 'Sensor Value Changed Event Enabled')]]