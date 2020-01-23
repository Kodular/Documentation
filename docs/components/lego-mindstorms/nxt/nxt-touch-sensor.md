# NXT Touch Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Nxt|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a high-level interface to a touch sensor on a LEGO MINDSTORMS NXT robot.

## Events

### Pressed

Touch sensor has been pressed.

[[Event('NXT Touch Sensor', 'Pressed')]]

### Released

Touch sensor has been released.

[[Event('NXT Touch Sensor', 'Released')]]

## Methods

### Is Pressed

<span class="chip chip-boolean">Returns: <i>Boolean</i></span> 

Returns true if the touch sensor is pressed.

[[Method('NXT Touch Sensor', 'Is Pressed', True)]]

## Properties

### Bluetooth Client

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The BluetoothClient component that should be used for communication.

[[PropertyBlockGetterAndSetter('NXT Touch Sensor', 'Bluetooth Client')]]

### Pressed Event Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the Pressed event should fire when the touch sensor is pressed.

[[PropertyBlockGetterAndSetter('NXT Touch Sensor', 'Pressed Event Enabled')]]

### Released Event Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the Released event should fire when the touch sensor is released.

[[PropertyBlockGetterAndSetter('NXT Touch Sensor', 'Released Event Enabled')]]

### Sensor Port

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>1</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The sensor port that the sensor is connected to.

[[PropertyBlockGetterAndSetter('NXT Touch Sensor', 'Sensor Port')]]