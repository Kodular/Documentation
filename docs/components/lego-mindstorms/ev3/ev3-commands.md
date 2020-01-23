# EV3 Commands

| Category | Requires | Version |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Ev3|API 19, Android 4.4 - 4.4.4 KitKat|1|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a low-level interface to a LEGO MINDSTORMS EV3 robot, with functions to send system or direct commands to EV3 robots.

## Methods

### Get Battery Current

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the battery current.

[[Method('EV3 Commands', 'Get Battery Current', True)]]

### Get Battery Voltage

<span class="chip chip-number">Returns: <i>Number</i></span> 

Get the battery voltage.

[[Method('EV3 Commands', 'Get Battery Voltage', True)]]

### Get Firmware Build

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the firmware build on EV3.

[[Method('EV3 Commands', 'Get Firmware Build', True)]]

### Get Firmware Version

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the firmware version on EV3.

[[Method('EV3 Commands', 'Get Firmware Version', True)]]

### Get Hardware Version

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the hardware version of EV3.

[[Method('EV3 Commands', 'Get Hardware Version', True)]]

### Get OS Build

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the OS build on EV3.

[[Method('EV3 Commands', 'Get OS Build', True)]]

### Get OS Version

<span class="chip chip-text">Returns: <i>Text</i></span> 

Get the OS version on EV3.

[[Method('EV3 Commands', 'Get OS Version', True)]]

### Keep Alive

Keep the EV3 brick from shutdown for a period of time.

[[Method('EV3 Commands', 'Keep Alive', False, 'minutes')]]

| Params | []() |
|--------|------|
|minutes|<span class="chip chip-number">Number</span>|


## Properties

### Bluetooth Client

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The BluetoothClient component that should be used for communication.

[[PropertyBlockGetterAndSetter('EV3 Commands', 'Bluetooth Client')]]