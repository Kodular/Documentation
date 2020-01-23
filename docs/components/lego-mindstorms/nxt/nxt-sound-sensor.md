# NXT Sound Sensor

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Nxt|API 19, Android 4.4 - 4.4.4 KitKat|1|

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

[[Method('NXT Sound Sensor', 'Get Sound Level', True)]]

{>>Returns `number`<<}

Returns the current sound level as a value between 0 and 1023, or -1 if the sound level can not be read.

## Properties

### Above Range Event Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the AboveRange event should fire when the sound level goes above the TopOfRange.

[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Above Range Event Enabled')]]

### Below Range Event Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the BelowRange event should fire when the sound level goes below the BottomOfRange.

[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Below Range Event Enabled')]]

### Bluetooth Client

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The BluetoothClient component that should be used for communication.

[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Bluetooth Client')]]

### Bottom Of Range

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>256</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The bottom of the range used for the BelowRange, WithinRange, and AboveRange events.

[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Bottom Of Range')]]

### Sensor Port

<span class="chip chip-text">Text</span> <span class="chip chip-text">Default: <i>2</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Non-Visible</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The sensor port that the sensor is connected to.

[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Sensor Port')]]

### Top Of Range

<span class="chip chip-number">Number</span> <span class="chip chip-number">Default: <i>767</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The top of the range used for the BelowRange, WithinRange, and AboveRange events.

[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Top Of Range')]]

### Within Range Event Enabled

<span class="chip chip-boolean">Boolean</span> <span class="chip chip-boolean">Default: <i>False</i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

Whether the WithinRange event should fire when the sound level goes between the BottomOfRange and the TopOfRange.

[[PropertyBlockGetterAndSetter('NXT Sound Sensor', 'Within Range Event Enabled')]]