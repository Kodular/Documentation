# EV3 Commands

| Category | Version | Requires |
|:--------:|:-------:|:--------:|
|LEGO® MINDSTORMS® > Ev3|1|API 19, Android 4.4 - 4.4.4 KitKat|

:mag: {>>Non-visible component<<}

## Overview

A component that provides a low-level interface to a LEGO MINDSTORMS EV3 robot, with functions to send system or direct commands to EV3 robots.

## Methods

### Get Battery Current

[[Method('EV3 Commands', 'Get Battery Current', True)]]

{>>Returns `number`<<}

Get the battery current.

### Get Battery Voltage

[[Method('EV3 Commands', 'Get Battery Voltage', True)]]

{>>Returns `number`<<}

Get the battery voltage.

### Get Firmware Build

[[Method('EV3 Commands', 'Get Firmware Build', True)]]

{>>Returns `text`<<}

Get the firmware build on EV3.

### Get Firmware Version

[[Method('EV3 Commands', 'Get Firmware Version', True)]]

{>>Returns `text`<<}

Get the firmware version on EV3.

### Get Hardware Version

[[Method('EV3 Commands', 'Get Hardware Version', True)]]

{>>Returns `text`<<}

Get the hardware version of EV3.

### Get OS Build

[[Method('EV3 Commands', 'Get OS Build', True)]]

{>>Returns `text`<<}

Get the OS build on EV3.

### Get OS Version

[[Method('EV3 Commands', 'Get OS Version', True)]]

{>>Returns `text`<<}

Get the OS version on EV3.

### Keep Alive

[[Method('EV3 Commands', 'Keep Alive', False, 'minutes')]]

| Params | []() |
|--------|------|
|minutes|Number|


Keep the EV3 brick from shutdown for a period of time.

## Properties

### Bluetooth Client

<span class="chip chip-component">Component</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="chip chip-rw">Read</span> <span class="chip chip-rw">Write</span> - <span class="chip chip-bd">Designer</span> <span class="chip chip-bd">Blocks</span> 

The BluetoothClient component that should be used for communication.

[[PropertyBlockGetterAndSetter('EV3 Commands', 'Bluetooth Client')]]